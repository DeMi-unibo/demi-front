import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useCSVData } from "../hooks/useCSVData";

interface Props {
    width: string;
    height: string;
    year: string;
    dataset: "D4" | "D5";
    gender: string;
    permit?: string | undefined;
    root: string;
}

function ChartMap({ width, height, year, dataset, gender, root, permit }: Props) {
    const url =
        "https://raw.githubusercontent.com/mjavadf/DeMi/refs/heads/main/datasets/mashup/italy_immigration_trends_by_country_and_permit_iso2.csv";
    const [searchTerm] = useState("");
    const [sortColumn] = useState("");
    const [ascending] = useState(true);

    const { data } = useCSVData(url, searchTerm, sortColumn, ascending);

    useEffect(() => {
        if (data) {
            const filteredData = data.filter((row) => {
                if (dataset === "D4") {
                    return (
                        row.Year === Number(year) &&
                        row.Sex === gender &&
                        row.Dataset_Code === dataset &&
                        row.Country_Code !== "IT" // Exclude rows with Country_Code "IT"
                    );
                } else if (dataset === "D5") {
                    return (
                        row.Year === Number(year) &&
                        row.Sex === gender &&
                        row.Dataset_Code === dataset &&
                        (permit ? row.Permit_Type === permit : true) && // Only filter by permit if it's provided
                        row.Country_Code !== "IT" // Exclude rows with Country_Code "IT"
                    );
                }
                return false;
            });
            

            let rootElement = am5.Root.new(root);
            rootElement.setThemes([am5themes_Animated.new(rootElement)]);

            let chart = rootElement.container.children.push(
                am5map.MapChart.new(rootElement, {
                    panX: "rotateX",
                    panY: "none",
                    wheelY: "none",
                    projection: am5map.geoEquirectangular(),
                })
            );

            let overlay = rootElement.container.children.push(
                am5.Container.new(rootElement, {
                    width: am5.p100,
                    height: am5.p100,
                    layer: 100,
                    visible: false,
                })
            );

            overlay.children.push(
                am5.Rectangle.new(rootElement, {
                    width: am5.p100,
                    height: am5.p100,
                    fill: am5.color(0x000000),
                    fillOpacity: 0.3,
                })
            );

            overlay.children.push(
                am5.Label.new(rootElement, {
                    text: "Use CTRL + Scroll to zoom",
                    fontSize: 30,
                    x: am5.p50,
                    y: am5.p50,
                    centerX: am5.p50,
                    centerY: am5.p50,
                })
            );

            chart.events.on("wheel", function (ev) {
                if (ev.originalEvent.ctrlKey) {
                    ev.originalEvent.preventDefault();
                    chart.set("wheelY", "zoom");
                } else {
                    chart.set("wheelY", "none");
                    overlay.show();
                    overlay.setTimeout(function () {
                        overlay.hide();
                    }, 800);
                }
            });

            let polygonSeries = chart.series.push(
                am5map.MapPolygonSeries.new(rootElement, {
                    geoJSON: am5geodata_worldLow,
                    valueField: "value",
                    calculateAggregates: true,
                    exclude: ["AQ"], // Exclude Antarctica
                })
            );

            polygonSeries.mapPolygons.template.setAll({
                tooltipText: "{name}: {value}",
                interactive: true,
                fill: am5.color(0xcccccc), // Default color gray
            });

            polygonSeries.set("heatRules", [
                {
                    target: polygonSeries.mapPolygons.template,
                    dataField: "value",
                    min: am5.color(0x14B8A5), // Light Green
                    max: am5.color(0x052E29), // Dark Green
                    key: "fill",
                },
            ]);

            polygonSeries.mapPolygons.template.adapters.add(
                "fill",
                function (fill, target) {
                    if (
                        target.dataItem &&
                        (target.dataItem.dataContext as { id: string }).id === "IT"
                    ) {
                        return am5.color(0x0a36af); // Change Italy's color to blue
                    }
                    return fill;
                }
            );

            polygonSeries.mapPolygons.template.adapters.add(
                "tooltipText",
                function (tooltipText, target) {
                    if (
                        target.dataItem &&
                        (target.dataItem.dataContext as { id: string }).id === "IT"
                    ) {
                        return "{name}"; // Only show the name for Italy
                    }
                    return tooltipText;
                }
            );

            polygonSeries.data.setAll(
                filteredData.map((row) => ({
                    id: row.Country_Code,
                    value: row.Value,
                }))
            );

            let heatLegend = chart.children.push(
                am5.HeatLegend.new(rootElement, {
                    orientation: "vertical",
                    startColor: am5.color(0x14B8A5),
                    endColor: am5.color(0x052E29),
                    startText: "Lowest",
                    endText: "Highest",
                    stepCount: 5,
                })
            );

            heatLegend.startLabel.setAll({
                fontSize: 12,
                fill: heatLegend.get("startColor"),
            });

            heatLegend.endLabel.setAll({
                fontSize: 12,
                fill: heatLegend.get("endColor"),
            });

            polygonSeries.events.on("datavalidated", function () {
                heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
                heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
            });

            return () => {
                rootElement.dispose();
            };
        }
    }, [data, year, root, gender, permit]);

    return <Box id={root} width={width} height={height}></Box>;
}

export default ChartMap;

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
}

function ChartMap({ width, height }: Props) {
    const url =
        "https://raw.githubusercontent.com/mjavadf/DeMi/refs/heads/main/datasets/mashup/italy_immigration_trends_by_country_and_permit_iso2.csv";
    const [searchTerm] = useState("");
    const [sortColumn] = useState("");
    const [ascending] = useState(true);

    const { data } = useCSVData(url, searchTerm, sortColumn, ascending);

    useEffect(() => {
        // Filter the data based on your conditions
        if (data) {
            const filteredData = data.filter(
                (row) =>
                    row.Year === 2020 &&
                    row.Sex === "Total" &&
                    row.Dataset_Code === "D4"
            );
            console.log(filteredData);

            // Create root and chart
            let root = am5.Root.new("chartdiv");

            // Set themes
            root.setThemes([am5themes_Animated.new(root)]);

            // Create map chart
            let chart = root.container.children.push(
                am5map.MapChart.new(root, {
                    panX: "rotateX",
                    panY: "none",
                    projection: am5map.geoEquirectangular(),
                })
            );

            // Create polygon series for the map and exclude Antarctica and Greenland
            let polygonSeries = chart.series.push(
                am5map.MapPolygonSeries.new(root, {
                    geoJSON: am5geodata_worldLow,
                    valueField: "value",
                    calculateAggregates: true,
                    exclude: ["AQ"], // Exclude Antarctica (AQ) and Greenland (GL)
                })
            );

            polygonSeries.mapPolygons.template.setAll({
                tooltipText: "{name}: {value}",
                interactive: true,
                fill: am5.color(0xcccccc), // Change the default color to gray
                // stroke: am5.color(0x333333),
            });

            // Add heat rules for color scaling
            polygonSeries.set("heatRules", [
                {
                    target: polygonSeries.mapPolygons.template,
                    dataField: "value",
                    min: am5.color(0x14b8a6), // Change minimum color to green
                    max: am5.color(0x661f00), // Keep the maximum color as red or choose another color
                    key: "fill",
                },
            ]);

            // Customize Italy's appearance
            polygonSeries.mapPolygons.template.adapters.add("fill", function(fill, target) {
                if (target.dataItem && (target.dataItem.dataContext as { id: string }).id === "IT") {
                    return am5.color(0x0A36AF); // Change Italy's color to blue
                }
                return fill;
            });

            // Customize Italy's tooltip
            polygonSeries.mapPolygons.template.adapters.add("tooltipText", function(tooltipText, target) {
                if (target.dataItem && (target.dataItem.dataContext as { id: string }).id === "IT") {
                    return "{name}"; // Only show the name for Italy
                }
                return tooltipText;
            });

            // Set data for the polygons (you'll replace the hardcoded data with filtered data)
            polygonSeries.data.setAll(
                filteredData.map((row) => ({
                    id: row.Country_Code, // Assuming Country_Code matches the id in geoJSON
                    value: row.Value, // Using the immigration value for heatmap
                }))
            );

            // Create heat legend to show the color scale
            let heatLegend = chart.children.push(
                am5.HeatLegend.new(root, {
                    orientation: "vertical",
                    startColor: am5.color(0x14b8a6), // Change start color to green
                    endColor: am5.color(0x661f00), // Keep end color as red or choose another color
                    startText: "Lowest",
                    endText: "Highest",
                    stepCount: 5,
                })
            );

            // Set heat legend labels
            heatLegend.startLabel.setAll({
                fontSize: 12,
                fill: heatLegend.get("startColor"),
            });

            heatLegend.endLabel.setAll({
                fontSize: 12,
                fill: heatLegend.get("endColor"),
            });

            // Update heat legend when data is validated
            polygonSeries.events.on("datavalidated", function () {
                heatLegend.set(
                    "startValue",
                    polygonSeries.getPrivate("valueLow")
                );
                heatLegend.set(
                    "endValue",
                    polygonSeries.getPrivate("valueHigh")
                );
            });

            // Cleanup on unmount
            return () => {
                root.dispose();
            };
        }
    }, [data]);

    return <Box id="chartdiv" width={width} height={height}></Box>;
}

export default ChartMap;
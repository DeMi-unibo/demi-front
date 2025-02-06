import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

interface Props {
    width: string;
    height: string;
}

function ChartMap({ width, height }: Props) {
    useEffect(() => {
        // Create root and chart
        var root = am5.Root.new("chartdiv");

        // Set themes
        root.setThemes([am5themes_Animated.new(root)]);

        var chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "rotateX",
                // https://www.amcharts.com/docs/v5/charts/map-chart/#Built_in_projections
                projection: am5map.geoEquirectangular(),
            })
        );

        // Create polygon series
        var polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                exclude: ["AQ"],
            })
        );

        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            interactive: true,
        });

        polygonSeries.mapPolygons.template.states.create("hover", {
            fill: am5.color(0x14b8a6),
        });

        // Cleanup on unmount
        return () => {
            root.dispose();
        };
    }, []);

    return <Box id="chartdiv" width={width} height={height}></Box>;
}

export default ChartMap;

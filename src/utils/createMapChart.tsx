import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function createMapChart(elementId: string): am5.Root | null { // Explicit return type
  try {
    const root = am5.Root.new(elementId);

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoEquirectangular(),
      })
    );

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
      fill: am5.color(0x1bffe6),
      stroke: am5.color(0x000000),
      strokeWidth: 0.2,
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x15ccb7),
    });

    polygonSeries.mapPolygons.template.adapters.add(
      "fill",
      (fill, target) => {
        const dataContext = target.dataItem?.dataContext as { id: string } | undefined;
        if (dataContext?.id === "IT") {
          return am5.color(0x077aca);
        }
        return fill;
      }
    );

    return root;
  } catch (error) {
    console.error("Error creating chart:", error);
    return null; // Return null if an error occurs
  }
}

export default createMapChart;
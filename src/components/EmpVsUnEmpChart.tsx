import { useEffect, useLayoutEffect, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { DemoGraphicData } from "../pages/Visualizations/Demographical";

interface Props {
  data: DemoGraphicData[];
  chartId: string; // Unique chart ID (e.g., "empUnempChart")
}

function EmpVsUnEmpChart({ data, chartId }: Props) {
  const [filteredData, setFilteredData] = useState<DemoGraphicData[]>([]);

  // Filter and sort the data
  useEffect(() => {
    const filtered = data
      .filter(
        (item) =>
          item.Territory === "Italy" &&
          item.Age_class === "Total" &&
          item.Education_Level === "total" &&
          item.Gender === "total" &&
          item.Work_Type === "total" &&
          item.Year !== null &&
          item.Employed_percentage !== null &&
          item.Unemployed_percentage !== null
      )
      .sort((a, b) => (a.Year || 0) - (b.Year || 0));
    setFilteredData(filtered);
  }, [data]);

  // Create chart
  useLayoutEffect(() => {
    if (!filteredData.length) return;

    const root = am5.Root.new(chartId);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        layout: root.verticalLayout,
        paddingLeft: 0,
      })
    );

    const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // X Axis
    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
    });

    xRenderer.labels.template.adapters.add("text", (text, target) => {
      const ctx = target.dataItem?.dataContext as DemoGraphicData;
      return ctx && typeof ctx.Year === "number" ? ctx.Year.toString() : text;
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "Year",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    // Y Axis
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, { strokeOpacity: 0.1 }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    yAxis.children.push(
      am5.Label.new(root, {
        rotation: -90,
        text: "Percentage (%)",
        y: am5.p50,
        centerX: am5.p50,
      })
    );

    // Series creator
    const createSeries = (
      field: keyof DemoGraphicData,
      name: string,
      color: am5.Color
    ) => {
      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name,
          xAxis,
          yAxis,
          valueYField: field,
          categoryXField: "Year",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{name} ({categoryX}): {valueY}%",
          }),
        })
      );

      series.columns.template.setAll({
        tooltipY: am5.percent(10),
        cornerRadiusTL: 5,
        cornerRadiusTR: 5,
        strokeOpacity: 0,
        fill: color,
      });

      series.data.setAll(filteredData);
      series.appear(800);
      return series;
    };

    // Add series
    createSeries("Employed_percentage", "Employed", am5.color(0x50c878));
    createSeries("Unemployed_percentage", "Unemployed", am5.color(0xff6347));

    // Legend
    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );
    legend.data.setAll(chart.series.values);

    // Final
    xAxis.data.setAll(filteredData);
    chart.appear(1000, 100);

    return () => root.dispose();
  }, [filteredData, chartId]);

  return (
    <>
      <h2>Italy Employment & Unemployment Rate (%) - Total Population</h2>
      <div id={chartId} style={{ width: "100%", height: "500px" }}>
        {filteredData.length === 0 && <p>Processing chart data...</p>}
      </div>
    </>
  );
}

export default EmpVsUnEmpChart;

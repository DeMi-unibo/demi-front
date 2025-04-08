import { useLayoutEffect, useRef, useEffect, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useCSVData } from "../hooks/useCSVData";

const DATASET_URL =
  "https://raw.githubusercontent.com/mjavadf/DeMi/refs/heads/main/datasets/mashup/italy_immigration_trends_by_country_and_permit_iso2.csv";

function StackedBarChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartData, setChartData] = useState<any[]>([]);
  const { data } = useCSVData(DATASET_URL, "", "Value", false);

  useEffect(() => {
    if (!data) return;

    const filtered = data.filter(
      (d) =>
        d.Sex === "Total" &&
        d.Dataset_Code === "D5" &&
        d.Permit_Type !== "Total"
    );

    const grouped = filtered.reduce((acc: any, row: any) => {
      const year = String(row.Year);
      const permitType = row.Permit_Type;
      const value = Number(row.Value);

      if (!acc[year]) {
        acc[year] = { year };
      }

      acc[year][permitType] = (acc[year][permitType] || 0) + value;

      return acc;
    }, {});

    const formatted = Object.values(grouped);
    setChartData(formatted);
  }, [data]);

  useLayoutEffect(() => {
    if (chartData.length === 0 || !chartRef.current) return;

    const root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        layout: root.verticalLayout,
      })
    );

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
        }),
      })
    );

    xAxis.data.setAll(chartData);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    const permitTypes = ["Short-term", "Long-term"]; // 👈 Removed "Total"
    permitTypes.forEach((type) => {
      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: type,
          xAxis,
          yAxis,
          valueYField: type,
          categoryXField: "year",
          stacked: true,
        })
      );

      series.data.setAll(chartData);

      series.columns.template.setAll({
        tooltipText: `${type}: {valueY}`,
        width: am5.percent(90),
      });

      series.appear();
    });

    chart.set("cursor", am5xy.XYCursor.new(root, {}));
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartData]);

  return <div id="chartdiv" ref={chartRef} style={{ width: "100%", height: "500px" }} />;
}

export default StackedBarChart;


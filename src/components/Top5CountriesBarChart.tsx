import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useCSVData } from "../hooks/useCSVData";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Kelly from "@amcharts/amcharts5/themes/Kelly";

const DATASET_URL =
    "https://raw.githubusercontent.com/mjavadf/DeMi/refs/heads/main/datasets/mashup/italy_immigration_trends_by_country_and_permit_iso2.csv";

function Top5CountriesBarChart() {
    const chartRef = useRef<HTMLDivElement>(null);
    const [pivotData, setPivotData] = useState<any[] | null>(null);
    const { data } = useCSVData(DATASET_URL, "", "Value", false);

    useEffect(() => {
        if (!data) return;

        // Step 1: Filter dataset
        const filtered = data.filter(
            (d) => d.Sex === "Total" && d.Dataset_Code === "D4"
        );

        // Step 2: Aggregate total Value by country
        const totalByCountry: Record<string, number> = {};

        for (const row of filtered) {
            if (row.Country_Name === "Italy") continue;

            const country = row.Country_Name;
            totalByCountry[country] =
                (totalByCountry[country] || 0) + Number(row.Value);
        }

        // Step 3: Get top 5 countries by total immigration
        const topCountries = Object.entries(totalByCountry)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([country]) => country);

        // Step 4: Filter rows for top countries only
        const topRows = filtered.filter((row) =>
            topCountries.includes(row.Country_Name)
        );

        // Step 5: Build pivot-like structure
        const years = Array.from(new Set(topRows.map((r) => r.Year))).sort();
        const pivotData = years.map((year) => {
            const row: any = { Year: year.toString() }; // amCharts needs string categories
            for (const country of topCountries) {
                const value = topRows.find(
                    (r) => r.Year === year && r.Country_Name === country
                )?.Value;

                row[country] = value ?? 0;
            }
            return row;
        });

        setPivotData(pivotData);
    }, [data]);

    // amCharts 5 rendering
    useLayoutEffect(() => {
        if (
            !pivotData ||
            pivotData.length === 0 ||
            !pivotData[0] ||
            !chartRef.current
        )
            return;

        const root = am5.Root.new(chartRef.current);

        root.setThemes([am5themes_Kelly.new(root)]);

        const chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: true,
                panY: false,
                wheelX: "panX",
                wheelY: "zoomX",
                layout: root.verticalLayout,
            })
        );

        // Create curtain + message to show when wheel is used over chart without CTRL
        let overlay = root.container.children.push(
            am5.Container.new(root, {
                width: am5.p100,
                height: am5.p100,
                layer: 100,
                visible: false,
            })
        );

        let curtain = overlay.children.push(
            am5.Rectangle.new(root, {
                width: am5.p100,
                height: am5.p100,
                fill: am5.color(0x000000),
                fillOpacity: 0.3,
            })
        );

        let message = overlay.children.push(
            am5.Label.new(root, {
                text: "Use CTRL + Scroll to zoom",
                fontSize: 30,
                x: am5.p50,
                y: am5.p50,
                centerX: am5.p50,
                centerY: am5.p50,
            })
        );

        chart.plotContainer.events.on("wheel", function (ev) {
            // Show overlay when wheel is used over chart
            if (ev.originalEvent.ctrlKey) {
                ev.originalEvent.preventDefault();
                chart.set("wheelX", "panX");
                chart.set("wheelY", "zoomX");
            } else {
                chart.set("wheelX", "none");
                chart.set("wheelY", "none");
                overlay.show();
                overlay.setTimeout(function () {
                    overlay.hide();
                }, 800);
            }
        });

        const xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: "Year",
                renderer: am5xy.AxisRendererX.new(root, {}),
            })
        );

        xAxis.data.setAll(pivotData);

        const yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {}),
            })
        );

        const countryNames = Object.keys(pivotData[0]).filter(
            (key) => key !== "Year"
        );

        countryNames.forEach((country) => {
            const series = chart.series.push(
                am5xy.LineSeries.new(root, {
                    name: country,
                    xAxis,
                    yAxis,
                    valueYField: country,
                    categoryXField: "Year",
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{name}: {valueY}",
                    }),
                })
            );

            series.data.setAll(pivotData);
            series.strokes.template.setAll({ strokeWidth: 2 });
            series.bullets.push(() =>
                am5.Bullet.new(root, {
                    sprite: am5.Circle.new(root, {
                        radius: 5,
                        fill: series.get("stroke"),
                    }),
                })
            );
        });

        chart.set(
            "cursor",
            am5xy.XYCursor.new(root, {
                behavior: "zoomX",
                xAxis,
            })
        );

        chart.appear(1000, 100);
        xAxis.appear(1000);
        yAxis.appear(1000);

        return () => {
            root.dispose();
        };
    }, [pivotData]);

    return <div ref={chartRef} style={{ width: "100%", height: "500px" }} />;
}

export default Top5CountriesBarChart;

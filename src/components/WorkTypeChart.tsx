import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// Assuming DemoGraphicData is defined in this path and includes:
// Territory, Age_class, Education_Level, Gender, Work_Type, Year, Value
import { DemoGraphicData } from "../pages/Visualizations/Demographical"; // Adjust path as needed

// Define a type for the processed data structure optimized for stacking
interface ProcessedWorkTypeData {
    Year: string; // Use string for category axis after conversion
    'full-time'?: number; // Optional properties for flexibility
    'part-time'?: number;
    // Add other work types here if they exist in your data and should be stacked
}

// Define the props for the component
interface Props {
    data: DemoGraphicData[]; // Expects the raw, unfiltered data
    chartId: string;         // Requires a unique ID for the chart container div
}

/**
 * WorkTypeChart Component
 * Displays a stacked bar chart showing the number of people (Value)
 * categorized by Work_Type (e.g., full-time, part-time) over the years.
 * Uses the chart's default ColorSet for assigning series colors.
 */
function WorkTypeChart({ data, chartId }: Props) {
    // State to hold the data transformed for the chart
    const [processedData, setProcessedData] = useState<ProcessedWorkTypeData[]>([]);

    // Step 1: Filter and Process Raw Data into the required structure
    useEffect(() => {
        if (!data) return; // Exit if data is not yet available

        // Filter for Italy, specific demographics, and valid Work_Type (excluding "total")
        const filtered = data.filter(
            (item) =>
                item.Territory === "Italy" &&
                item.Age_class === "Total" &&
                item.Education_Level === "total" &&
                item.Gender === "total" &&
                item.Work_Type != null && item.Work_Type !== "total" && // Ensure Work_Type exists and is not "total"
                item.Year != null &&
                item.Value != null // Ensure Value exists for the bar height
        );

        // Sort chronologically by Year before grouping
        filtered.sort((a, b) => (a.Year || 0) - (b.Year || 0));

        // Transform the filtered data into a structure suitable for stacking
        // Groups data by Year, with properties for each Work_Type's Value
        const transformed = filtered.reduce<Record<string, ProcessedWorkTypeData>>((accumulator, item) => {
            // Assert non-null based on filter conditions for TypeScript
            const yearStr = item.Year!.toString();
            const workType = item.Work_Type!;

            // Initialize an object for this year if it doesn't exist
            if (!accumulator[yearStr]) {
                accumulator[yearStr] = { Year: yearStr };
            }

            // Add the Value under the corresponding Work_Type key
            // Ensure only expected work types are added as keys
            if (workType === 'full-time' || workType === 'part-time') {
                 // Use nullish coalescing for safety, default to 0 if Value is null/undefined
                 accumulator[yearStr][workType] = item.Value ?? 0;
            }

            return accumulator;
        }, {});

        // Convert the mapping object back into an array for amCharts
        setProcessedData(Object.values(transformed));

    }, [data]); // Rerun this effect if the raw 'data' prop changes

    // Step 2: Render the amCharts chart using the processedData
    useLayoutEffect(() => {
        // Don't proceed if data processing is incomplete or resulted in empty data
        if (processedData.length === 0) {
            return; // Chart will not render until processedData is populated
        }

        // Initialize amCharts root element bound to the chartId div
        let root = am5.Root.new(chartId);

        // Apply themes (e.g., animated theme)
        root.setThemes([am5themes_Animated.new(root)]);

        // Create the XYChart instance
        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,         // Disable horizontal panning
                panY: true,          // Enable vertical panning
                wheelX: "none",      // Disable horizontal zooming via mouse wheel
                wheelY: "zoomY",     // Enable vertical zooming via mouse wheel
                layout: root.verticalLayout,
                paddingLeft: 0,      // Adjust padding if needed
            })
        );

        // Get the chart's default color set provided by the theme
        let colors = chart.get("colors");
        if (!colors) {
            // Provide a fallback just in case colors aren't immediately available
            console.warn("amCharts ColorSet not found, creating default.");
            colors = am5.ColorSet.new(root, {});
        }

        // Add a cursor, configured for vertical zoom/pan to match chart settings
        chart.set("cursor", am5xy.XYCursor.new(root, { behavior: "zoomY" }));

        // --- Create Axes ---

        // X Axis (Category: Year)
        let xRenderer = am5xy.AxisRendererX.new(root, {
            minGridDistance: 30,     // Minimum space between grid lines
            minorGridEnabled: false  // Don't show minor grid lines
        });
        // Adapter to prevent comma formatting in year labels (e.g., "2,019")
        xRenderer.labels.template.adapters.add("text", (text, target) => {
            const dataContext = target.dataItem?.dataContext as ProcessedWorkTypeData;
            return dataContext?.Year ?? text; // Use the string Year directly
        });

        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: "Year", // Field name from ProcessedWorkTypeData
                renderer: xRenderer,
                tooltip: am5.Tooltip.new(root, { labelText: "{categoryX}" }) // Tooltip on axis labels
            })
        );

        // Y Axis (Value: Number of People)
        let yRenderer = am5xy.AxisRendererY.new(root, {
             strokeOpacity: 0.1 // Make axis line slightly lighter
        });
        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                min: 0, // Ensure Y axis starts at 0
                renderer: yRenderer,
                tooltip: am5.Tooltip.new(root, { labelText: "{valueY}" }) // Tooltip on axis line/ticks
            })
        );
         // Add a label to the Y Axis
        yAxis.children.unshift( // unshift places it relative to the axis line correctly
            am5.Label.new(root, {
                rotation: -90,
                text: "Number of People", // Descriptive axis title
                y: am5.p50,
                centerX: am5.p50
            })
        );

        // --- Create Series (Stacked Columns) ---

        /**
         * Helper function to create a stacked column series.
         * @param field The data field key in ProcessedWorkTypeData (e.g., 'full-time')
         * @param name The display name for the series (e.g., "Full-Time")
         * @param colorIndex The index from the chart's ColorSet to use for this series
         */
        function createSeries(field: keyof ProcessedWorkTypeData, name: string, colorIndex: number) {
            let series = chart.series.push(am5xy.ColumnSeries.new(root, {
                name: name,
                stacked: true, // CRITICAL: Enable stacking for this series
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: field,         // Data field for the bar height
                categoryXField: "Year",     // Data field for the category
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} ({categoryX}): {valueY} [bold]({valueYTotalPercent.formatNumber('#.0')}%)", // Tooltip showing name, year, value, and stack percentage
                }),
                 // Assign fill color automatically using the chart's color set
                fill: colors?.getIndex(colorIndex)
            }));

            // Configure the appearance of the columns in this series
            series.columns.template.setAll({
                tooltipY: am5.percent(10), // Position tooltip slightly above the column
                strokeOpacity: 0,         // No border for cleaner stacks
            });

            // Set the processed data for this series
            series.data.setAll(processedData);
            // Animate the series appearance on load
            series.appear();
            return series;
        }

        // Create the series for each work type category using sequential color indices
        createSeries("full-time", "Full-Time", 0); // Uses the first color in the set
        createSeries("part-time", "Part-Time", 1); // Uses the second color in the set
        // Add more calls to createSeries if you have other work types in ProcessedWorkTypeData

        // --- Add Legend ---
        let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.p50,          // Center the legend horizontally
            x: am5.p50,                // Position it at 50% horizontally
            marginTop: 15,
            marginBottom: 15,
        }));
        // Populate the legend automatically from the chart's series
        legend.data.setAll(chart.series.values);

        // --- Set Final Data and Animate ---
        // Set the category data on the X axis *after* series are created
        xAxis.data.setAll(processedData);

        // Make the chart animate on load
        chart.appear(1000, 100); // duration and delay

        // --- Cleanup ---
        // This is crucial for React: dispose of the chart when the component unmounts
        // or when dependencies change causing the effect to re-run.
        return () => {
            root.dispose();
        };

    }, [chartId, processedData]); // Effect dependencies: re-run if ID or processed data changes

    // Step 3: Render the component's JSX
    return (
         <div style={{ width: "100%", height: "500px", marginBottom: '20px' }}> {/* Added margin */}
            {/* Optional: Add a title above the chart */}
            <h3 style={{ textAlign: 'center' }}>Work Type Distribution (Italy, Total Population)</h3>
            {/* The div where the amCharts chart will be rendered */}
            <div id={chartId} style={{ width: "100%", height: "450px" }}>
                 {/* Display a message while data is loading/processing or if no data */}
                {processedData.length === 0 && <p style={{ textAlign: 'center', paddingTop: '50px' }}>Processing work type data or no data available...</p>}
            </div>
        </div>
    );
}

export default WorkTypeChart;
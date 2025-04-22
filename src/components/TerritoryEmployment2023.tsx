import { useEffect, useLayoutEffect, useState } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// Assuming DemoGraphicData interface is defined in this path and includes necessary fields:
// Territory, Gender, Education_Level, Year, Age_class, Work_Type,
// Employed_percentage, Unemployed_percentage
import { DemoGraphicData } from "../pages/Visualizations/Demographical"; // Adjust this path as needed

// Define a simpler data structure specific to this chart's needs
interface TerritoryEmploymentData {
    Territory: string;
    Employed_percentage: number;
    Unemployed_percentage: number;
}

// Define the props expected by the component
interface Props {
    data: DemoGraphicData[]; // Expects the raw, unfiltered dataset
    chartId: string;         // Requires a unique HTML ID for the chart container
}

/**
 * TerritoryEmployment2023 Component
 *
 * Renders a horizontal clustered bar chart comparing Employment (Green)
 * and Unemployment (Blue) percentages across Italian territories
 * (excluding the national total 'Italy') for the specific year 2023.
 * Expects the full raw dataset via the `data` prop and performs
 * filtering internally.
 */
function TerritoryEmployment2023({ data, chartId }: Props) {
    // State to store the data after filtering and processing
    const [processedData, setProcessedData] = useState<TerritoryEmploymentData[]>([]);

    // Effect hook to filter and transform the raw data when it changes
    useEffect(() => {
        // Guard clause: Don't run if the input data isn't available
        if (!data) return;

        // Filter the raw data according to the chart's requirements
        const filtered = data.filter(
            (item) =>
                item.Territory !== "Italy" &&          // Exclude the national total
                item.Gender === "total" &&             // Filter for aggregated gender
                item.Education_Level === "total" &&    // Filter for aggregated education
                item.Year === 2023 &&                  // Filter for the specific year
                item.Age_class === "Total" &&          // Filter for aggregated age class
                item.Work_Type === "total" &&          // Use 'total' work type for overall territory rates
                item.Employed_percentage != null &&    // Ensure Employed % data exists
                item.Unemployed_percentage != null   // Ensure Unemployed % data exists
        );

        // Optional: Sort the filtered data (e.g., alphabetically by Territory)
        filtered.sort((a, b) => a.Territory.localeCompare(b.Territory));

        // Map the filtered data to the simpler structure needed by the chart
        const finalData = filtered.map(item => ({
            Territory: item.Territory,
            // Use nullish coalescing (??) to provide a default value (0) if data is unexpectedly null
            Employed_percentage: item.Employed_percentage ?? 0,
            Unemployed_percentage: item.Unemployed_percentage ?? 0,
        }));

        // Update the component's state with the processed data
        setProcessedData(finalData);

    }, [data]); // Dependency array: This effect re-runs if the `data` prop changes

    // Effect hook to manage the amCharts instance lifecycle
    useLayoutEffect(() => {
        // Guard clause: Don't try to render the chart if there's no processed data yet
        if (processedData.length === 0) {
            return;
        }

        // Create the amCharts root element linked to the designated div ID
        let root = am5.Root.new(chartId);

        // Apply amCharts themes (e.g., for animations)
        root.setThemes([am5themes_Animated.new(root)]);

        // Create the XYChart instance with horizontal layout
        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,                  // Disable horizontal panning
                panY: true,                   // Enable vertical panning (useful for many territories)
                wheelX: "none",               // Disable horizontal zooming via mouse wheel
                wheelY: "zoomY",              // Enable vertical zooming via mouse wheel
                layout: root.horizontalLayout, // Set chart layout to horizontal
                paddingLeft: 5,               // Adjust chart padding if needed
                paddingRight: 10
            })
        );

        // --- Define Specific Colors for the Series ---
        const employedColor = am5.color(0x50C878);   // Define Green color for 'Employed'
        const unemployedColor = am5.color(0x3498DB); // Define Blue color for 'Unemployed'
        // --- End of Color Definition ---

        // Add a cursor for interactivity (configured for vertical zooming)
        let cursor = chart.set("cursor", am5xy.XYCursor.new(root, { behavior: "zoomY" }));
        cursor.lineX.set("visible", false); // Hide the vertical cursor line

        // --- Create Chart Axes ---

        // Y-Axis (Vertical): Categories - Territories
        let yRenderer = am5xy.AxisRendererY.new(root, {
            minGridDistance: 10, // Adjust minimum space between labels/gridlines
            inversed: false      // Order categories from top to bottom
        });
        yRenderer.grid.template.set("location", 1); // Adjust grid line position if needed

        let yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: "Territory", // Data field containing territory names
                renderer: yRenderer,
                tooltip: am5.Tooltip.new(root, { themeTags: ["axis"] }) // Basic tooltip on axis labels
            })
        );

        // X-Axis (Horizontal): Values - Percentage
        let xRenderer = am5xy.AxisRendererX.new(root, {
            strokeOpacity: 0.1 // Make the axis line less prominent
        });
        let xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                min: 0,              // Ensure axis starts at 0%
                // max: 100,         // Optional: Force axis maximum to 100%
                renderer: xRenderer,
                tooltip: am5.Tooltip.new(root, { themeTags: ["axis"] }) // Basic tooltip on axis ticks
            })
        );
        // Add a label title to the X-Axis
        xAxis.children.push(
            am5.Label.new(root, {
                text: "Percentage (%)", // Axis title text
                x: am5.p50,             // Position label at the center of the axis
                centerX: am5.p50        // Center the label text horizontally
            })
        );

        // --- Create Chart Series (Clustered Horizontal Bars) ---

        /**
         * Helper function to create a ColumnSeries for the horizontal clustered bar chart.
         * Accepts a specific color object for styling.
         * @param field - The key from TerritoryEmploymentData for the series values (e.g., 'Employed_percentage').
         * @param name - The display name for the series (e.g., "Employed").
         * @param color - The am5.Color object to use for filling the bars.
         */
        function createSeries(field: keyof TerritoryEmploymentData, name: string, color: am5.Color) {
            let series = chart.series.push(am5xy.ColumnSeries.new(root, {
                name: name,                 // Series name (for legend and tooltips)
                stacked: false,             // Ensure bars are clustered, not stacked
                xAxis: xAxis,               // Assign the value axis (X)
                yAxis: yAxis,               // Assign the category axis (Y)
                valueXField: field,         // Data field for bar length (horizontal value)
                categoryYField: "Territory",// Data field for bar category (vertical position)
                sequencedInterpolation: true, // Animation setting
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "vertical", // Tooltip points horizontally from bar
                    labelText: "{name} ({categoryY}): {valueX}%" // Tooltip content format
                }),
                fill: color                 // Apply the specified fill color
            }));

            // Configure the visual appearance of the columns (horizontal bars)
            series.columns.template.setAll({
                height: am5.percent(90),    // Bar thickness relative to available category space
                tooltipX: am5.percent(100), // Position tooltip relative to the end of the bar
                cornerRadiusTR: 4,          // Optional: Rounded top-right corner
                cornerRadiusBR: 4           // Optional: Rounded bottom-right corner
            });

            // Assign the processed data to this series
            series.data.setAll(processedData);
            // Add appearance animation
            series.appear();
            return series; // Return the created series instance
        }

        // Create the actual series instances, passing the defined colors
        createSeries("Employed_percentage", "Employed", employedColor);     // Create 'Employed' series with green color
        createSeries("Unemployed_percentage", "Unemployed", unemployedColor); // Create 'Unemployed' series with blue color

        // --- Add Legend ---
        let legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.p50,          // Center the legend horizontally
            x: am5.p50,                // Position it at 50% horizontally
            marginTop: 15,             // Add some space above the legend
            marginBottom: 15,          // Add some space below the legend
        }));
        // Automatically populate the legend from the chart's series
        legend.data.setAll(chart.series.values);

        // --- Set Final Category Data and Animate Chart ---
        // Assign data to the category axis (Y-Axis)
        yAxis.data.setAll(processedData);

        // Trigger the overall chart appearance animation
        chart.appear(1000, 100); // Animation duration and delay

        // --- Cleanup Function ---
        // This function is returned by useLayoutEffect and runs when the component
        // unmounts or before the effect runs again due to dependency changes.
        // It's crucial for disposing of the amCharts instance to prevent memory leaks.
        return () => {
            root.dispose();
        };

    }, [chartId, processedData]); // Dependencies: Effect re-runs if chartId or processedData changes

    // --- Render Component JSX ---
    return (
        // Outer container div for spacing/layout
        <div style={{ width: "100%", height: "600px", marginBottom: '20px' }}>
            {/* Chart Title */}
            <h3 style={{ textAlign: 'center' }}>Employment vs. Unemployment Rate by Territory (2023)</h3>
             {/* The div that amCharts will target using the chartId */}
            <div id={chartId} style={{ width: "100%", height: "550px" }}>
                 {/* Conditional rendering: Show a message if data is still processing or empty */}
                {processedData.length === 0 && (
                    <p style={{ textAlign: 'center', paddingTop: '50px' }}>
                        Processing territory employment data or no data available for 2023...
                    </p>
                )}
            </div>
        </div>
    );
}

// Export the component for use in other parts of the application
export default TerritoryEmployment2023;
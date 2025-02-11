import { Box, Flex } from "@chakra-ui/react";
import ChartMap from "../components/ChartMap";
import { SegmentedControl } from "../components/ui/segmented-control";
import { useState } from "react";

function Visualizations() {
    const years: string[] = ["2019", "2020", "2021", "2022", "2023"];
    const [year, setYear] = useState("2019");

    return (
        <Box width="100%" p={4}>
            {/* Centered Year Selection Control */}
            <Flex justify="center" mb={4}>
                <SegmentedControl
                    items={years}
                    value={year}
                    onValueChange={(value) => setYear(value.value)}
                    colorPalette="pink"
                />
            </Flex>

            {/* Map Visualization */}
            <ChartMap width="100%" height="500px" year={year} />
        </Box>
    );
}

export default Visualizations;

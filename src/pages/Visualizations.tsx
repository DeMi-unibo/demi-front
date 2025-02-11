import { Box, Flex, Heading, Tabs } from "@chakra-ui/react";
import ChartMap from "../components/ChartMap";
import { SegmentedControl } from "../components/ui/segmented-control";
import { useState } from "react";

function Visualizations() {
    const years: string[] = ["2019", "2020", "2021", "2022", "2023"];
    const [year, setYear] = useState("2019");

    const genders: string[] = ["Total", "Male", "Female"];
    const [gender, setGender] = useState("Total");

    const permits: string[] = ["Total", "Long-term", "Short-term"];
    const [permit, setPermit] = useState("Total");

    const [tab, setTab] = useState<string | null>("D4");

    return (
        <Box width="100%" p={4}>
            {/* Centered Year Selection Control */}
            <Flex justify="center" mb={4} direction="column" align="center">
                <Heading mb={2}>Select the year:</Heading>
                <SegmentedControl
                    items={years}
                    value={year}
                    onValueChange={(value) => setYear(value.value)}
                    colorPalette="pink"
                />
            </Flex>

            {/* Map Visualization */}

            <Tabs.Root value={tab} onValueChange={(e) => setTab(e.value)}>
                <Tabs.List>
                    <Tabs.Trigger value="D4">
                        Immigrants - citizenship
                    </Tabs.Trigger>
                    <Tabs.Trigger value="D5">
                        Type of residence permit and citizenship
                    </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="D4">
                    <Heading mb={2} id="map-heading" textAlign="center">
                    Immigrant Numbers to Italy in {year} by Country
                    </Heading>
                    <Flex
                        justify="center"
                        mb={4}
                        direction="column"
                        align="center"
                    >
                        <Heading mb={2}>Select the gender:</Heading>
                        <SegmentedControl
                            items={genders}
                            value={gender}
                            onValueChange={(value) => setGender(value.value)}
                            colorPalette="pink"
                        />
                    </Flex>
                    {/* <div id="d4-root"></div> */}
                    <ChartMap
                        width="100%"
                        height="500px"
                        year={year}
                        dataset="D4"
                        gender={gender}
                        root="d4-root"
                    />
                </Tabs.Content>
                <Tabs.Content value="D5">
                    <Heading mb={2} id="map-heading" textAlign="center">
                    Immigrant Numbers to Italy in {year} by Country and Residence Permit Type
                    </Heading>
                    <Flex justify="center" mb={4} direction="row" align="center">
                        <Flex direction="column" align="center" mr={8}>
                            <Heading mb={2}>Select the gender:</Heading>
                            <SegmentedControl
                                items={genders}
                                value={gender}
                                onValueChange={(value) => setGender(value.value)}
                                colorPalette="pink"
                            />
                        </Flex>
                        <Flex direction="column" align="center" ml={8}>
                            <Heading mb={2}>Select the permit type:</Heading>
                            <SegmentedControl
                                items={permits}
                                value={permit}
                                onValueChange={(value) => setPermit(value.value)}
                                colorPalette="pink"
                            />
                        </Flex>
                    </Flex>
                    {/* <div id="d5-root"></div> */}
                    <ChartMap
                        width="100%"
                        height="500px"
                        year={year}
                        dataset="D5"
                        gender={gender}
                        root="d5-root"
                        permit={permit}
                    />
                </Tabs.Content>
            </Tabs.Root>
        </Box>
    );
}

export default Visualizations;

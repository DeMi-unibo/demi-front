import { Flex, Heading } from "@chakra-ui/react";
import ChartMap from "./ChartMap";
import { GenderSelector } from "./selectors/GenderSelector";
import { PermitSelector } from "./selectors/PermitSelector";

interface VisualizationTabProps {
    year: string;
    dataset: "D4" | "D5";
    gender: string;
    onGenderChange: (value: string) => void;
    permit?: string;
    onPermitChange?: (value: string) => void;
}

export function VisualizationTab({
    year,
    dataset,
    gender,
    onGenderChange,
    permit,
    onPermitChange,
}: VisualizationTabProps) {
    return (
        <>
            <Heading mb={2} textAlign="center">
                Immigrant Numbers to Italy in {year} by Country
                {dataset === "D5" && " and Residence Permit Type"}
            </Heading>

            <Flex
                justify="center"
                mb={4}
                align="center"
            >
                <GenderSelector
                    genders={["Total", "Male", "Female"]}
                    gender={gender}
                    onChange={onGenderChange}
                />
                {dataset === "D5" && permit && onPermitChange && (
                    <Flex direction="column" align="center" ml={8}>
                        <PermitSelector
                            permits={["Total", "Long-term", "Short-term"]}
                            permit={permit}
                            onChange={onPermitChange}
                        />
                    </Flex>
                )}
            </Flex>

            <ChartMap
                width="100%"
                height="500px"
                year={year}
                dataset={dataset}
                gender={gender}
                root={dataset === "D4" ? "d4-root" : "d5-root"}
                permit={permit}
            />
        </>
    );
}

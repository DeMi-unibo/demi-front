import { Flex, Heading } from "@chakra-ui/react";
import { SegmentedControl } from "../ui/segmented-control";

interface YearSelectorProps {
    years: string[];
    year: string;
    onChange: (value: string) => void;
}

export function YearSelector({ years, year, onChange }: YearSelectorProps) {
    return (
        <Flex justify="center" mb={4} direction="column" align="center">
            <Heading mb={2}>Select the year:</Heading>
            <SegmentedControl
                items={years}
                value={year}
                onValueChange={(value) => onChange(value.value)}
                colorPalette="pink"
            />
        </Flex>
    );
}

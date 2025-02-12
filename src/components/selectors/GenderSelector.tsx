import { Flex, Heading } from "@chakra-ui/react";
import { SegmentedControl } from "../ui/segmented-control";

interface GenderSelectorProps {
    genders: string[];
    gender: string;
    onChange: (value: string) => void;
}

export function GenderSelector({
    genders,
    gender,
    onChange,
}: GenderSelectorProps) {
    return (
        <Flex justify="center" mb={4} direction="column" align="center">
            <Heading mb={2}>Select the gender:</Heading>
            <SegmentedControl
                items={genders}
                value={gender}
                onValueChange={(value) => onChange(value.value)}
                colorPalette="pink"
            />
        </Flex>
    );
}

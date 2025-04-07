import { Flex, Heading } from "@chakra-ui/react";
import { SegmentedControl } from "../ui/segmented-control";

interface PermitSelectorProps {
    permits: string[];
    permit: string;
    onChange: (value: string) => void;
}

export function PermitSelector({
    permits,
    permit,
    onChange,
}: PermitSelectorProps) {
    return (
        <Flex direction="column" align="center">
            <Heading mb={2}>Select the permit type:</Heading>
            <SegmentedControl
                items={permits}
                value={permit}
                onValueChange={(value) => value.value !== null && onChange(value.value)}
                colorPalette="pink"
            />
        </Flex>
    );
}

import { Tabs } from "@chakra-ui/react";

interface VisualizationTabsProps {
    tab: string;
    onTabChange: (tab: string) => void;
}

export function VisualizationTabs({
    tab,
    onTabChange,
}: VisualizationTabsProps) {
    return (
        <Tabs.Root value={tab} onValueChange={(e) => onTabChange(e.value)}>
            <Tabs.List>
                <Tabs.Trigger value="D4">Immigrants - Citizenship</Tabs.Trigger>
                <Tabs.Trigger value="D5">
                    Type of Residence Permit and Citizenship
                </Tabs.Trigger>
            </Tabs.List>
        </Tabs.Root>
    );
}

import { Box } from "@chakra-ui/react";
import { useYear } from "../hooks/useYear";
import { useGender } from "../hooks/useGender";
import { usePermit } from "../hooks/usePermit";
import { useVisualizationTab } from "../hooks/useVisualizationTab";
import { YearSelector } from "../components/selectors/YearSelector";
import { VisualizationTabs } from "../components/VisualizationTabs";
import { ChartVisualization } from "../components/ChartVisualization";

function Visualizations() {
    const { years, year, setYear } = useYear();
    const { gender, setGender } = useGender();
    const { permit, setPermit } = usePermit();
    const { tab, setTab } = useVisualizationTab();

    return (
        <Box width="100%" p={4}>
            <YearSelector years={years} year={year} onChange={setYear} />
            <VisualizationTabs tab={tab} onTabChange={setTab} />

            {tab === "D4" ? (
                <ChartVisualization
                    year={year}
                    dataset="D4"
                    gender={gender}
                    onGenderChange={setGender}
                />
            ) : (
                <ChartVisualization
                    year={year}
                    dataset="D5"
                    gender={gender}
                    onGenderChange={setGender}
                    permit={permit}
                    onPermitChange={setPermit}
                />
            )}
        </Box>
    );
}

export default Visualizations;

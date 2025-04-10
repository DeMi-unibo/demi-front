import { Box, Heading } from "@chakra-ui/react";
import { useYear } from "../../hooks/useYear";
import { useGender } from "../../hooks/useGender";
import { usePermit } from "../../hooks/usePermit";
import { useVisualizationTab } from "../../hooks/useVisualizationTab";
import { YearSelector } from "../../components/selectors/YearSelector";
import { VisualizationTabs } from "../../components/VisualizationTabs";
import { VisualizationTab } from "../../components/VisualizationTab";
import DataTable from "../../components/DataTable";
import Top5CountriesBarChart from "../../components/Top5CountriesBarChart";
import StackedBarChart from "../../components/StackedBarChart";

function Geographical() {
    const { years, year, setYear } = useYear();
    const { gender, setGender } = useGender();
    const { permit, setPermit } = usePermit();
    const { tab, setTab } = useVisualizationTab();

    return (
        <Box width="100%" p={4}>
            <YearSelector years={years} year={year} onChange={setYear} />
            <VisualizationTabs tab={tab} onTabChange={setTab} />

            {tab === "D4" ? (
                <>
                    <VisualizationTab
                        year={year}
                        dataset="D4"
                        gender={gender}
                        onGenderChange={setGender}
                    />
                    <DataTable
                        url="https://raw.githubusercontent.com/mjavadf/DeMi/refs/heads/main/datasets/mashup/italy_immigration_trends_by_country_and_permit_iso2.csv"
                        year={year}
                        gender={gender}
                        dataset="D4" // Pass the dataset type for D4
                    />
                </>
            ) : (
                <>
                    <VisualizationTab
                        year={year}
                        dataset="D5"
                        gender={gender}
                        onGenderChange={setGender}
                        permit={permit}
                        onPermitChange={setPermit}
                    />
                    <DataTable
                        url="https://raw.githubusercontent.com/mjavadf/DeMi/refs/heads/main/datasets/mashup/italy_immigration_trends_by_country_and_permit_iso2.csv"
                        year={year}
                        gender={gender}
                        permit={permit}
                        dataset="D5" // Pass the dataset type for D5
                    />
                </>
            )}

            <div style={{ marginTop: "32px" }} />

            <Heading as="h2" size="lg" mb={4}>
                Immigration Trends to Italy (Top 5 Countries)
            </Heading>

            <Top5CountriesBarChart />

            <div style={{ marginTop: "32px" }} />

            <Heading as="h2" size="lg" mb={4}>
                Immigration to Italy by Permit Type (Short-term vs Long-term),
                2019–2024
            </Heading>

            <StackedBarChart />
        </Box>
    );
}

export default Geographical;

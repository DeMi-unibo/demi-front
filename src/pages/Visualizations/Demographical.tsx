import EmpVsUnEmpChart from "../../components/EmpVsUnEmpChart";
// import ItalyDemographic from "../../components/ItalyDemographic";
import { useCSVData } from "../../hooks/useCSVData";

const DATASET_URL =
    "https://raw.githubusercontent.com/mjavadf/DeMi/refs/heads/main/datasets/mashup/italy_immigration_trends_by_demographic_profiles.csv";

export interface DemoGraphicData {
    Territory: string;
    Gender: string;
    Education_Level: string;
    Year: number;
    Unemployed_percentage: number | null; // Fixed typo from "Unmployed"
    Employed_percentage: number | null;
    Work_Type: string | null;
    Value: number | null;
    Age_class: string;
    Foreign_Percentage: number | null;
    Italian_Percentage: number | null;
}

function Demographical() {
    const {
        data: csvData,
        error: csvError,
        isLoading: csvLoading,
    } = useCSVData(DATASET_URL);

    if (csvLoading) {
        return <div>Loading...</div>;
    }

    if (csvError) {
        return <div>Error loading data: {csvError.message}</div>;
    }

    if (!csvData) {
        return <div>No data available</div>;
    }

    return (
        <>
                <EmpVsUnEmpChart data={csvData} chartId="empUnempChart" />
                {/* <ItalyDemographic data={csvData} /> */}
        </>
    );
}

export default Demographical;

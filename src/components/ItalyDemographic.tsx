import { useEffect, useState } from "react";
import { DemoGraphicData } from "../pages/Visualizations/Demographical";

interface Props {
    data: DemoGraphicData[];
}

function ItalyDemographic({ data }: Props) {
    const [filteredData, setFilteredData] = useState<DemoGraphicData[]>([]);

    useEffect(() => {
        // filter data where "Territory" is "Italy", "Value" is not null, and "Year" is not null
        const filtered = data.filter(
            (item) =>
                item.Territory !== "Italy" &&
                item.Gender === "total" &&
                item.Education_Level === "total" &&
                item.Year === 2023 &&
                item.Age_class === "Total" &&
                item.Work_Type != null &&
                item.Employed_percentage != null &&
                item.Unemployed_percentage != null 

        );
        setFilteredData(filtered);
    }, [data]);

    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    console.log("ItalyDemographic Data:", filteredData);

    return (
        <>
            <p>[ItalyDemographic Component]: Recieved Data</p>
        </>
    );
}

export default ItalyDemographic;

import { useState } from "react";

export function useYear(initialYear: string = "2019") {
    const years = ["2019", "2020", "2021", "2022", "2023"];
    const [year, setYear] = useState(initialYear);

    return { year, setYear, years };
}

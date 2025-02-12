import { useState } from "react";

export function useGender(initialGender: string = "Total") {
    const genders = ["Total", "Male", "Female"];
    const [gender, setGender] = useState(initialGender);

    return { gender, setGender, genders };
}

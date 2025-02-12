import { useState } from "react";

export function useVisualizationTab(initialTab: string = "D4") {
    const [tab, setTab] = useState<string>(initialTab);

    return { tab, setTab };
}

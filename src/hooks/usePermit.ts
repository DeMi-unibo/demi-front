import { useState } from "react";

export function usePermit(initialPermit: string = "Total") {
    const permits = ["Total", "Long-term", "Short-term"];
    const [permit, setPermit] = useState(initialPermit);

    return { permit, setPermit, permits };
}

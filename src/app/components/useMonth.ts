import { useState } from "react";

const useMonth = () => {
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
    
    const setMonth = (month: string) => {
        setSelectedMonth(month);
    };

    return { selectedMonth, setMonth };
}

export default useMonth;
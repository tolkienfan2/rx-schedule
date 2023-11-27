import { useState, useEffect, useCallback } from "react";
import { Scheduler } from "../schedulerModel";

const useScheduler = () => {
    const [scheduler, setScheduler] = useState<Scheduler | null>(null);
    const [dates, setDates] = useState<number[]>([]);
    const [dayOfFirstDate, setDayOfFirstDate] = useState<number>(0);

    useEffect(() => {
        if (!scheduler) return;
        setDates(scheduler.getDates());
        setDayOfFirstDate(scheduler.getDayOfFirstDate());
    }, [scheduler]);

    const initializeScheduler = useCallback((month: string, year: string) => {
        const scheduler = new Scheduler(month, year);
        setScheduler(scheduler);
    }, []);

    return { dates, dayOfFirstDate, initializeScheduler };
}

export default useScheduler;
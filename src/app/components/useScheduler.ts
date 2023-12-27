import { useState, useEffect, useCallback } from "react";
import { Scheduler } from "../models/schedulerModel";

const useScheduler = () => {
    const [scheduler, setScheduler] = useState<Scheduler | null>(null);
    const [dates, setDates] = useState<number[]>([]);
    const [dayOfFirstDate, setDayOfFirstDate] = useState<number>(0);
    const [weeks, setWeeks] = useState<(number | null)[][]>([]);

    useEffect(() => {
        if (!scheduler) return;
        setDates(scheduler.getDates());
        setDayOfFirstDate(scheduler.getDayOfFirstDate());
        setWeeks(scheduler.getWeeks());
    }, [scheduler]);

    const initializeScheduler = useCallback((month: string, year: string) => {
        const scheduler = new Scheduler(month, year);
        setScheduler(scheduler);
    }, []);

    return { dates, dayOfFirstDate, weeks, initializeScheduler };
}

export default useScheduler;
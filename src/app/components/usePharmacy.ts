import { useState, useEffect, useCallback } from "react";
import type { OpeningTime } from "../types";
import { Pharmacy } from "../models/pharmacyModel";

const usePharmacy = () => {
    const [pharmacy, setPharmacy] = useState<Pharmacy | null>(null);
    const [name, setName] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [sundayHours, setSundayHours] = useState<OpeningTime>({ From: '', To: '' });
    const [weekdayHours, setWeekdayHours] = useState<OpeningTime>({ From: '', To: '' });
    const [saturdayHours, setSaturdayHours] = useState<OpeningTime>({ From: '', To: '' });
    const [holidayHours, setHolidayHours] = useState<OpeningTime>({ From: '', To: '' });

    useEffect(() => {
        if (!pharmacy) return;
    }, [pharmacy]);

    const initializePharmacy = useCallback((name: string, location: string, sundayHours: OpeningTime, weekdayHours: OpeningTime, saturdayHours: OpeningTime, holidayHours: OpeningTime) => {
        const pharmacy = new Pharmacy(name, location, sundayHours, weekdayHours, saturdayHours, holidayHours);
        setPharmacy(pharmacy);
    }, []);

    return { pharmacy, initializePharmacy };
}

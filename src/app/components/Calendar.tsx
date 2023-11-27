"use client";
import React, { useEffect, useCallback } from "react";
import HeaderBox from "./HeaderBox";
import DayBox from "./DayBox";
import DropDown from "./dropdown/DropDown";
import useMonth from "./useMonth";
import useYear from "./useYear";
import useScheduler from "./useScheduler";
import { months, days, headers, years } from "../constants";

export const Calendar = () => {
    const { selectedMonth, setMonth } = useMonth();
    const { selectedYear, setYear } = useYear();
    const { dates, dayOfFirstDate, initializeScheduler } = useScheduler();

    useEffect(() => {
        if (!selectedMonth || !selectedYear) {
            return;
        }
        initializeScheduler(selectedMonth, selectedYear);
    }, [selectedMonth, selectedYear, initializeScheduler]);

    const getWeeks = useCallback(() => {
        const firstSlice = 7 - dayOfFirstDate;
        const getWeek1 = () => {
            const firstWeek = dates.slice(0, firstSlice);
            if (dayOfFirstDate < 7) {
                const undefinedDays = Array(dayOfFirstDate).fill(undefined);
                return [...undefinedDays, ...firstWeek];
            }
            return firstWeek;
        }
        const week2 = dates.slice(firstSlice, firstSlice + 7);
        const week3 = dates.slice(firstSlice + 7, firstSlice + 14);
        const week4 = dates.slice(firstSlice + 14, firstSlice + 21);
        const week5 = dates.slice(firstSlice + 21, firstSlice + 28);
        const week6 = dates.slice(firstSlice + 28, dates.length); 
        const week1 = getWeek1();
        return { week1, week2, week3, week4, week5, week6 };
    }, [dates, dayOfFirstDate]);

    const { week1, week2, week3, week4, week5, week6 } = getWeeks();

    return (
        <>
        <DropDown items={months} triggerLabel="Month" setSelection={setMonth} />
        <DropDown items={years} triggerLabel="Year" setSelection={setYear} />
        <div className="calendar">
            {headers.map((header, index) => (
                <HeaderBox key={index} header={header} day={days[index]} />
            ))}
            {days.map((day, index) => (
                <DayBox key={index} day={day} date={week1[index]} />
            ))}
            {days.map((day, index) => (
                <DayBox key={index} day={day} date={week2[index]} />
            ))}
            {days.map((day, index) => (
                <DayBox key={index} day={day} date={week3[index]} />
            ))}
            {days.map((day, index) => (
                <DayBox key={index} day={day} date={week4[index]} />
            ))}
            {days.map((day, index) => (
                <DayBox key={index} day={day} date={week5[index]} />
            ))}
            {week6.length > 0 && days.map((day, index) => (
                <DayBox key={index} day={day} date={week6[index]} />
            ))}
        </div>
        </>
    );
}

export default Calendar;
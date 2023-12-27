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
    const { weeks, initializeScheduler } = useScheduler();

    useEffect(() => {
        if (!selectedMonth || !selectedYear) {
            return;
        }
        initializeScheduler(selectedMonth, selectedYear);
    }, [selectedMonth, selectedYear, initializeScheduler]);

    return (
        <>
        <DropDown items={months} triggerLabel="Month" setSelection={setMonth} />
        <DropDown items={years} triggerLabel="Year" setSelection={setYear} />
        <div className="calendar">
            {headers.map((header, index) => (
                <HeaderBox key={index} header={header} day={days[index]} />
            ))}
            {weeks.map(week => (
                week.map((date, index) => (
                    <DayBox key={index} day={days[index]} date={date} />
                ))
            ))}
        </div>
        </>
    );
}

export default Calendar;
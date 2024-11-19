"use client";
import React, { useEffect, useCallback } from "react";
import styles from '../css/calendar.module.css';
import { PharmacyInfo } from "./PharmacyInfo";
import HeaderBox from "./HeaderBox";
import DayBox from "./DayBox";
import { Placeholder } from "./Placeholder";
import DropDown from "./dropdown/DropDown";
import useMonth from "./useMonth";
import useYear from "./useYear";
import useScheduler from "./useScheduler";
import { months, days, headers, years, calendarPlaceholder, namePlaceholder, locationPlaceholder } from "../constants";

export const Calendar = () => {
    const { selectedMonth, setMonth } = useMonth();
    const { selectedYear, setYear } = useYear();
    const { weeks, initializeScheduler } = useScheduler();
    const calendarNotSet = !selectedMonth || !selectedYear;

    useEffect(() => {
        if (!selectedMonth || !selectedYear) {
            return;
        }
        initializeScheduler(selectedMonth, selectedYear);
    }, [selectedMonth, selectedYear, initializeScheduler]);

    const renderWeeks = useCallback(() => {
        if (!weeks) {
            return;
        }

        return weeks.map(week => (
            week.map((date, index) => (
                <DayBox key={index} day={days[index]} date={date} />
            ))
        ));
    }, [weeks]);

    return (
        <>
        <div className={styles.panel}>
            <div className={styles.panelItem}>
                <PharmacyInfo label={namePlaceholder} />
            </div>
            <div className={styles.panelItem}>
                <PharmacyInfo label={locationPlaceholder} />
            </div>
            <div className={styles.panelItem}>
                <DropDown items={months} triggerLabel="Month" setSelection={setMonth} />
                <DropDown items={years} triggerLabel="Year" setSelection={setYear} />
            </div>
        </div>
        {calendarNotSet ?
            <Placeholder placeholderText={calendarPlaceholder} /> :
            <div className="calendar">
            {headers.map((header, index) => (
                <HeaderBox key={index} header={header} day={days[index]} />
            ))}
            {renderWeeks()}
        </div>}
        </>
    );
}

export default Calendar;
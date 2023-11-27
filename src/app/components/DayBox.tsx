import React from "react";

type DayBoxProps = {
    day: string;
    date: number;

}

const DayBox = (props: DayBoxProps) => {
    const { date, day } = props;

    return (
        <div className={day} style={{
            height: '150px',
            border: '1px solid black',
        }}>
        <h1>{date}</h1>
        </div>
    );
}

export default DayBox;
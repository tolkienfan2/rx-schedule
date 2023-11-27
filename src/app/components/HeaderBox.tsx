import React from "react";

type HeaderBoxProps = {
    header: string;
    day: string;
}

const HeaderBox = (props: HeaderBoxProps) => {
    const { header, day } = props;

    return (
        <div className={`${day} week0`}>
        <h1>{header}</h1>
        </div>
    );
}

export default HeaderBox;

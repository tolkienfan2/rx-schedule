import React from "react";

type PlaceholderProps = {
    placeholderText: string;
}

export const Placeholder = (props: PlaceholderProps) => {
    const { placeholderText } = props;
    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            {placeholderText}
        </div>
    );
}

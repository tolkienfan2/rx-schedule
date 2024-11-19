import React from 'react';

type PharmacyInfoProps = {
    label: string;
}

export const PharmacyInfo = ({ label }: PharmacyInfoProps) => {
    return(
        <>
            <input 
                style={{ 
                height: "3em",
                border: "none",
                paddingInlineStart: "0.5em",
                fontSize: "16px"
                }}
                placeholder={label}
            />
        </>
    )
}

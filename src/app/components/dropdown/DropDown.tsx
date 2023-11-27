"use client";
import React, { useEffect } from "react";
import styles from './dropdown.module.css';
import DropDownMenu from "./DropDownMenu";
import Trigger from "./Trigger";
import useDropdown from "./useDropdown";
import useMonth from "../useMonth";
import useYear from "../useYear";
import useScheduler from "../useScheduler";

export type DropDownProps = {
    items: string[];
    triggerLabel: string;
    setSelection: (selection: string) => void;
}

const DropDown = (props: DropDownProps) => {
    const { items, triggerLabel, setSelection } = props;
    const { open, selected, selectedIndex, ariaAttributes, toggleOpen, handleKeyDown, setSelected } = useDropdown(items);

    useEffect(() => {
        if (!selected) {
            return
        }
        setSelection(selected);
    }, [selected, setSelection]);

    return (
        <div className={styles.dropdown} onKeyDown={handleKeyDown} {...ariaAttributes}>
        <Trigger label={selected ?? triggerLabel} onClick={toggleOpen} />
        {open && <DropDownMenu items={items} onItemClick={setSelected} selectedIndex={selectedIndex} toggleOpen={toggleOpen} />}
        </div>
    );
}

export default DropDown;
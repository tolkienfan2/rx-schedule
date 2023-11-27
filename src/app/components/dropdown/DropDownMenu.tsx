import React from 'react';
import styles from './dropdown.module.css';

const DropDownMenu = ({ items, selectedIndex, onItemClick, toggleOpen }: {
    items: string[];
    selectedIndex: number;
    onItemClick: (item: string) => void;
    toggleOpen: () => void;
}) => {
    return (
        <div className={styles.menu} role="listbox">
            {items.map((item, index) => (
                <div 
                    className={styles.menuItem} 
                    key={index} 
                    onClick={toggleOpen}
                    aria-selected={index === selectedIndex}
                >
                    <button onClick={() => onItemClick(item)}>{item}</button>
                </div>
            ))}
        </div>
    );
};

export default DropDownMenu;
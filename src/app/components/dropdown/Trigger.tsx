import React from 'react';
import styles from './dropdown.module.css';

const Trigger = ({ label, onClick }: {
    label: string;
    onClick: () => void;
}) => {
    return (
        <button className={styles.trigger} onClick={onClick}>
            {label}
        </button>
    );
};

export default Trigger;

import React from 'react';
import styles from '../../css/dropdown.module.css';

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

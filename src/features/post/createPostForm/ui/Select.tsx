import React, { forwardRef } from "react";
import styles from "./Select.module.css";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    error?: string;
    children: React.ReactNode;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ label, error, children, ...props }, ref) => (
    <div className={styles.field}>
        {label && <label className={styles.label}>{label}</label>}
        <select ref={ref} className={styles.select} {...props}>
            {children}
        </select>
        {error && <span className={styles.error}>{error}</span>}
    </div>
));
Select.displayName = "Select"; 
import React, { forwardRef } from "react";
import styles from "./Input.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, ...props }, ref) => (
    <div className={styles.field}>
        {label && <label className={styles.label}>{label}</label>}
        <input ref={ref} className={styles.input} {...props} />
        {error && <span className={styles.error}>{error}</span>}
    </div>
));
Input.displayName = "Input"; 
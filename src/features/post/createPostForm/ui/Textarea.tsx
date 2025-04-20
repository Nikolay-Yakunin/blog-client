import React, { forwardRef } from "react";
import styles from "./Textarea.module.css";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, error, ...props }, ref) => (
    <div className={styles.field}>
        {label && <label className={styles.label}>{label}</label>}
        <textarea ref={ref} className={styles.textarea} {...props} />
        {error && <span className={styles.error}>{error}</span>}
    </div>
));
Textarea.displayName = "Textarea"; 
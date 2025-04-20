import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./MarkdownPreview.module.css";

type MarkdownPreviewProps = {
    value: string;
    placeholder?: string;
    label?: string;
};

export const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ value, placeholder, label }) => (
    <div className={styles.previewColumn}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.preview}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{value || placeholder}</ReactMarkdown>
        </div>
    </div>
); 
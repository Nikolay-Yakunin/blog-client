import { useState } from "react";
import { useCreatePostMutation } from "@entities/post/api";
import styles from "./CreatePostForm.module.css";
import { Button } from "@shared/ui/Button/Button";
import { useI18n } from "@app/providers/I18nProvider";
import ru from "./locales/ru.json";
import en from "./locales/en.json";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Select } from "./ui/Select";
import { MarkdownPreview } from "./ui/MarkdownPreview";

// Временный Loader
const Loader = () => <div style={{ textAlign: 'center', padding: '8px' }}>Загрузка...</div>;
// Временный ErrorMessage
const ErrorMessage = ({ message }: { message: string }) => (
    <div className={styles.error}>{message}</div>
);

const translations = { ru, en };

type LocaleKey = keyof typeof ru;

function useLocale() {
    const { lang } = useI18n();
    const t = (key: LocaleKey): string => translations[lang][key] || key;
    return { t };
}

interface FormState {
    title: string;
    description: string;
    raw_content: string;
    tags: string;
    status: "draft" | "published";
}

const initialState: FormState = {
    title: "",
    description: "",
    raw_content: "",
    tags: "",
    status: "draft",
};

export const CreatePostForm = () => {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState<Partial<FormState>>({});
    const [createPost, { isLoading, isSuccess, error }] = useCreatePostMutation();
    const { t } = useLocale();

    const validate = (): boolean => {
        const newErrors: Partial<FormState> = {};
        if (!form.title.trim()) newErrors.title = t("required_title");
        if (!form.raw_content.trim()) newErrors.raw_content = t("required_content");
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        await createPost({
            title: form.title,
            description: form.description,
            raw_content: form.raw_content,
            tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
            status: form.status,
        });
    };

    return (
        <div className={styles.wrapper}>
            <form className={styles.form + ' ' + styles.editColumn} onSubmit={handleSubmit}>
                <Input
                    label={t("title")}
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    error={errors.title}
                />
                <Input
                    label={t("description")}
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                />
                <Textarea
                    label={t("content")}
                    name="raw_content"
                    value={form.raw_content}
                    onChange={handleChange}
                    rows={10}
                    required
                    error={errors.raw_content}
                />
                <Input
                    label={t("tags")}
                    name="tags"
                    value={form.tags}
                    onChange={handleChange}
                />
                <Select
                    label={t("status")}
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value="draft">{t("draft")}</option>
                    <option value="published">{t("published")}</option>
                </Select>
                <Button className={styles.button} type="submit" disabled={isLoading}>
                    {isLoading ? <Loader /> : t("create")}
                </Button>
                {isSuccess && <div className={styles.success}>{t("success")}</div>}
                {error && <ErrorMessage message={t("error")} />}
            </form>
            <MarkdownPreview
                value={form.raw_content}
                placeholder={t("preview_placeholder")}
                label={t("preview")}
            />
        </div>
    );
}; 
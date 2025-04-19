import { useState } from "react";
import { useCreatePostMutation } from "@entities/post/api";

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

    const validate = (): boolean => {
        const newErrors: Partial<FormState> = {};
        if (!form.title.trim()) newErrors.title = "Заголовок обязателен";
        if (!form.raw_content.trim()) newErrors.raw_content = "Контент обязателен";
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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Заголовок*</label>
                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />
                {errors.title && <span style={{ color: "red" }}>{errors.title}</span>}
            </div>
            <div>
                <label>Описание</label>
                <input
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Контент (Markdown)*</label>
                <textarea
                    name="raw_content"
                    value={form.raw_content}
                    onChange={handleChange}
                    rows={10}
                    required
                />
                {errors.raw_content && <span style={{ color: "red" }}>{errors.raw_content}</span>}
            </div>
            <div>
                <label>Теги (через запятую)</label>
                <input
                    name="tags"
                    value={form.tags}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Статус</label>
                <select name="status" value={form.status} onChange={handleChange}>
                    <option value="draft">Черновик</option>
                    <option value="published">Опубликован</option>
                </select>
            </div>
            <button type="submit" disabled={isLoading}>Создать пост</button>
            {isSuccess && <div style={{ color: "green" }}>Пост успешно создан!</div>}
            {error && <div style={{ color: "red" }}>Ошибка при создании поста</div>}
        </form>
    );
}; 
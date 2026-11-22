import { SubmitEventHandler, useState } from "react";
import { grades, type GradeLevel } from "@/data/grades"
import { type Book, updateBook, deleteBook } from "@/lib/books";
import styles from "@/app/admin/admin.module.css";

type EditingBookProps = {
    book: Book;
    grade: GradeLevel;
    onCancel: () => void;
    onSaved: () => Promise<void>;
};

export default function EditingBook({
    book,
    grade,
    onCancel,
    onSaved,
}: EditingBookProps) {
    const [title, setTitle] = useState(book.title);
    const [language, setLanguage] = useState(book.language);
    const [author, setAuthor] = useState(book.author);
    const [desc, setDesc] = useState(book.description);
    const [saving, setSaving] = useState(false);
    const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(grade);
    const [error, setError] = useState("");


    const handleSave: SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if (saving) return; // Prevent multiple submissions
        setSaving(true);
        setError("");

        try {
            await updateBook(book.id, { title, author, language, gradeLevel: selectedGrade, description: desc });
            await onSaved();
        } catch (err) {
            console.error("Failed to save book updates:", err);
            setError("Failed to save book.");
        } finally {
            setSaving(false);
        }
    };

    async function handleDelete() {
        const confirmed = window.confirm(
            `Are you sure you want to delete "${book.title}"?`
        );

        if (!confirmed || saving) return;

        setSaving(true);
        setError("");

        try {
            await deleteBook(book.id);
            await onSaved();
        } catch (err) {
            console.error("Failed to delete book:", err);
            setError("Unable to delete book.");
        } finally {
            setSaving(false);
        }
    }


    const gradeInfo = grades.find((g) => g.id === grade);
    const color = gradeInfo?.color ?? "orange";

    return (

        <form
            className={styles.editBookForm}
            onSubmit={handleSave}
        >
            <div className={`${styles.colorLine} ${styles[color]}`}></div>
            <div className={styles.editBookInfo}>
                <h1>Edit Book</h1>

                <label htmlFor="edit-book-title">Book Title</label>
                <input
                    type="text"
                    id="edit-book-title"
                    placeholder="Book Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="grade">Grade Level</label>
                        <select
                            id="grade"
                            value={selectedGrade}
                            onChange={(e) => setSelectedGrade(e.target.value as GradeLevel)}
                        >
                            {grades.map((gradeOption) => (
                                <option
                                    key={gradeOption.id}
                                    value={gradeOption.id}
                                >
                                    {gradeOption.label}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="language">Language</label>
                        <select
                            id="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                        </select>
                    </div>
                </div >
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label htmlFor="desc">Description</label>
                <textarea
                    placeholder="Description"
                    id="desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                {error && <p role="alert">{error}</p>}
                <div className={styles.editBookActions}>
                    <button
                        type="submit"
                        className={styles.saveButton}
                        disabled={saving}>
                        {saving ? "Saving..." : "Save"}
                    </button>
                    <button
                        type="button"
                        className={styles.deleteButton}
                        onClick={handleDelete} disabled={saving}>
                        Delete
                    </button>
                    <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={onCancel}
                        disabled={saving}
                    >
                        Cancel
                    </button>
                </div>
            </div>


        </form >


    )
}
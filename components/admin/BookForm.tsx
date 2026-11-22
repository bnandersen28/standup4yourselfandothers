import styles from '@/app/admin/admin.module.css';
import { addBook } from '@/lib/books';
import { useState } from "react";
import type { FormEvent } from "react";

export default function BookForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setMessage("");

        const form = event.currentTarget;
        const formData = new FormData(form);
        const bookData = {
            title: formData.get("book-title") as string,
            gradeLevel: formData.get("grade-level") as string,
            language: formData.get("language") as string,
            author: formData.get("author") as string,
            description: formData.get("book-description") as string
        };

        try {
            await addBook(bookData);
            setMessage("Book added successfully!");
        } catch (error) {
            console.error("Error adding book:", error);
            setMessage("Failed to add book.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form id={styles.bookForm} onSubmit={handleSubmit}>
            <h1>Add a Book</h1>
            <label htmlFor="book-title">Book Title:</label>
            <input type="text" name="book-title" id="book-title" placeholder="Book Title" required />
            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label htmlFor="grade-level">Grade Level:</label>
                    <select name="grade-level" id="grade-level" required>
                        <option value="preschool">Preschool</option>
                        <option value="primary">Primary Grades</option>
                        <option value="upper-elementary">Upper Elementary</option>
                        <option value="middle-school">Middle School</option>
                        <option value="high-school">High School</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="language">Language:</label>
                    <select name="language" id="language" required>
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                    </select>
                </div>
            </div>
            <label htmlFor="author">Author:</label>
            <input type="text" name="author" id="author" placeholder="Author" required />
            <label htmlFor="book-description">Description:</label>
            <textarea name="book-description" id="book-description" placeholder="Description"></textarea>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {message && <p className={styles.message}>{message}</p>}
        </form>
    );

}
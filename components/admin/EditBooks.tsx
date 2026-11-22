"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { getBooksByGrade, Book } from "@/lib/books";
import { grades, type GradeLevel } from "@/data/grades";
import EditingBook from "./EditingBook"
import styles from "@/app/admin/admin.module.css";
import BookCard from "./BookCard";

type BooksByGrade = Record<string, Book[]>;

export default function EditBookForm() {
    const [booksByGrade, setbooksByGrade] = useState<BooksByGrade>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const editFormRef = useRef<HTMLDivElement>(null);
    const [activeGrade, setActiveGrade] = useState<GradeLevel | null>(null);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    //Use effect to scroll to edit Book form 



    const refreshBooks = useCallback(async () => {

        try {
            setLoading(true);
            setError("");

            const results = await Promise.all(
                grades.map(async (grade) => {
                    const books = await getBooksByGrade(grade.id);

                    return {
                        grade: grade.id,
                        books,
                    };

                })
            );

            const grouped: BooksByGrade = {};

            results.forEach(({ grade, books }) => {
                grouped[grade] = books;
            });

            setbooksByGrade(grouped);
        } catch (err) {
            console.error("Failed to fetch books: ", err);
            setError("Unable to load books.");
        } finally {
            setLoading(false);
        }


    }, []);

    //Fetch books on initial load 
    useEffect(() => {
        refreshBooks().catch(() => { });
    }, [refreshBooks]);

    // Scroll to editing form when a book is selected
    useEffect(() => {
        if (selectedBook && editFormRef.current) {
            editFormRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [selectedBook]);


    function toggleGrade(grade: GradeLevel) {
        setActiveGrade(current =>
            current === grade ? null : grade
        );
        setSelectedBook(null);
    }

    function handleEdit(book: Book) {
        setSelectedBook(book);
    }

    async function handleSaved() {
        try {
            await refreshBooks();
            setSelectedBook(null);
        } catch {
            // Keep the editor open if refreshing fails
        }
    }



    return (
        <section className={styles.editBooksContainer}>
            {loading && <p>Loading books...</p>}
            {error && <p role="alert">{error}</p>}

            {!loading && !error && grades.map((grade) => (
                <div
                    key={grade.id}
                    className={styles.gradeSection}
                >
                    <button
                        type="button"
                        className={`${styles.gradeButton} ${styles[grade.color]}`}
                        onClick={() => toggleGrade(grade.id)}
                        aria-expanded={activeGrade === grade.id}
                    >
                        {grade.label}
                        <span>({booksByGrade[grade.id]?.length ?? 0})</span>
                    </button>

                    {activeGrade === grade.id && (
                        <>
                            {selectedBook &&
                                booksByGrade[grade.id]?.some(
                                    b => b.id === selectedBook.id
                                ) && (
                                    <div
                                        ref={editFormRef}
                                        className={styles.editFormWrapper}
                                    >
                                        <EditingBook
                                            key={selectedBook.id}
                                            book={selectedBook}
                                            grade={grade.id}
                                            onCancel={() => setSelectedBook(null)}
                                            onSaved={handleSaved}
                                        />
                                    </div>
                                )
                            }

                            <div className={styles.bookList}>
                                {(booksByGrade[grade.id] ?? []).map((book) => (
                                    <BookCard
                                        key={book.id}
                                        book={book}
                                        grade={grade.id}
                                        onEdit={handleEdit}
                                    />
                                ))}
                            </div>
                        </>

                    )}
                </div>
            ))}
        </section>
    );
}

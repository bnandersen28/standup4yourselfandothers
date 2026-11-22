"use client";

import { useEffect, useState } from "react";
import { getBooksByGrade, type Book } from "@/lib/books";
import GradeButtons from "./GradeButtons";
import BookList from "./BookList";
import type { GradeLevel } from "@/data/grades";
import styles from "@/app/books/books.module.css";

export default function BookCatalog() {
    const [selectedGrade, setSelectedGrade] = useState<GradeLevel | null>(null);
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!selectedGrade) {
            return;
        }

        let cancelled = false;

        async function loadBooks() {
            setLoading(true);
            setError("");
            setBooks([]);

            try {
                const results = await getBooksByGrade(selectedGrade!);
                if (!cancelled) {
                    setBooks(results);
                }
            } catch (err) {
                console.error(err);
                if (!cancelled) {
                    setError("Failed to load books");
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        loadBooks();

        return () => {
            cancelled = true;
        };
    }, [selectedGrade]);

    function handleGradeSelect(grade: GradeLevel){
        setSelectedGrade((current) =>
            current === grade ? null : grade
        );
    }

    return (
        <div className={styles.bookCatalog}>
            <GradeButtons
                selectedGrade={selectedGrade}
                onSelect={handleGradeSelect}
            />
            {selectedGrade && (
                <div className={styles.booksContainer}>
                    {loading ? (
                        <p>Loading books...</p>
                    ) : error ? (
                        <p role="alert">{error}</p>
                    ) : (
                        <BookList books={books} />
                    )}
                </div>
            )}
        </div>
    );
}
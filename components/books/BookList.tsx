import type { Book } from "@/lib/books";
import BookCard from "./BookCard";
import styles from "@/app/books/books.module.css";

type Props = {
    books: Book[];
}

export default function BookList({books}: Props) {
    if (books.length === 0) {
        return (
            <p>No books found for this grade level.</p>
        );
    }
    return (
        <div className={styles.bookGrid}>
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
}
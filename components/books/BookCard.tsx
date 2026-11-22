import type { Book } from "@/lib/books";
import styles from "@/app/books/books.module.css";

type Props = {
    book: Book;
}

export default function BookCard({book}: Props) {
    const language = book.language
    ? book.language.charAt(0).toUpperCase() + book.language.slice(1)
    : "";

    return (
        <article className={styles.book}>
            <h3>{book.title}</h3>

            <div className={styles.info}>
                <div className={styles.row}>
                    <span className={styles.label}>Author:</span>
                    <span className={styles.value}>{book.author}</span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>Language:</span>
                    <span className={styles.value}>{language}</span>
                </div>

                <p className={styles.desc}>{book.description}</p>
            </div>
        </article>
    );
}
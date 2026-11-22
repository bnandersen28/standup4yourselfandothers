import { Book } from '@/lib/books';
import { grades, GradeLevel } from '@/data/grades';
import styles from "@/app/admin/admin.module.css"

type BookCardProps = {
    book : Book;
    grade: GradeLevel;
    onEdit: (book: Book) => void;
}
export default function BookCard({
  book,
  grade,
  onEdit,
}: BookCardProps) {
    const gradeInfo = grades.find((g) => g.id === grade);
    const color = gradeInfo?.color ?? "orange";
    return(
        <article
            className={styles.bookCard}
        >
            <div className={`${styles.colorLine} ${styles[color]}`}></div>

            <div className={styles.bookInfo}>
                <h2>{book.title}</h2>
                <div className={styles.row}>
                    <span className={styles.label}>Author: </span>
                    <span>{book.author}</span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>Language: </span>
                    <span>{book.language.charAt(0).toLocaleUpperCase()+ book.language.slice(1)}</span>
                </div>

                <button
                    type="button"
                    onClick={()=> onEdit(book)}
                >
                    Edit
                </button>
            </div>
        </article>

    );
}

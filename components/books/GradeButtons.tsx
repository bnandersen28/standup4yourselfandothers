import { grades, type GradeLevel } from "@/data/grades";
import styles from "@/app/books/books.module.css";

type Props = {
    selectedGrade: GradeLevel | null;
    onSelect: (grade: GradeLevel) => void;
}

export default function GradeButtons({
    selectedGrade,
    onSelect
}: Props) {
    return (
        <div className={`${styles.gradeButtons} ${
            selectedGrade ? styles.horizontal : ""
        }`}
        >
            {grades.map((grade) => (
                <button
                    key={grade.id}
                    className={`${styles.bookBtn} ${styles[grade.color]} `}
                    onClick={()=> onSelect(grade.id)}
                    aria-pressed={selectedGrade === grade.id}
                >
                    {grade.label}
                </button>
            ))}
        </div>
    );
}
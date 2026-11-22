import styles from "./PageTitle.module.css";

type PagetitleProps = {
    firstWord: string;
    secondWord: string;
    description?: string;
};

export default function PageTitle({ firstWord, secondWord, description }: PagetitleProps) {
    return (
        <section className={styles.titleZone}>
            <div className={styles.titleStack}>
                <span className={styles.wordOne}>{firstWord}</span>
                <span className={styles.wordTwo}>{secondWord}</span>
            </div>
            {description && (
                <h4 className={styles.subhead}>{description}</h4>
            )}
        </section>
    );
}
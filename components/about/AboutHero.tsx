import styles from '@/app/about/about.module.css';

export default function AboutHero() {
    return (
        <section className={styles.aboutHero}><div className={styles.wrap}>
            <h1 aria-label="About Stand Up for Yourself and Others">
                <span className={styles.l1}>About </span>
                <span className={styles.l2}>Stand Up </span>
                <span className={styles.l3}>for Yourself </span>
                <span className={styles.l4}>and Others!</span>
            </h1>
            <div className={styles.print}>
                <div className={styles.tape}></div>
                <img src="/images/storyhour8.jpg" alt="Stand Up Story Hour" />
            </div>
        </div>
        </section>
    )
}

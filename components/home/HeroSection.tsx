import styles from "@/app/home.module.css";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
        <div className={styles.heroText}>
            <h1>
          Helping kids stand up for{" "}
          <span className={styles.highlight}>
            themselves
          </span>{" "}
          and{" "}
          <span className={styles.highlight}>
            each other
          </span>
        </h1>
          <p>Puppet shows, storytimes, and books that teach children to value individuality -- brought to libraries and
        faith communities across Williamsburg.</p>
        </div>
        <div className={styles.heroButtons}>
            <Link href="/input" className="btn btn-blue">
          Get Involved
        </Link>

        <Link href="/events" className="btn btn-green">
          Upcoming Events
        </Link>
        </div>
    </section>
  );
}
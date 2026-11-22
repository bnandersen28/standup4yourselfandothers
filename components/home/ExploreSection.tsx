import ExploreCard from "@/components/ui/ExploreCard";
import styles from "@/app/home.module.css";

export default function ExploreSection() {
    return (
        <section className={styles.exploreSection}>
            <h3>Learn More About Stand Up</h3>
            <h4>Check Out What We're Doing</h4>

            <div className={styles.exploreRow}>
                <ExploreCard
                    image="/images/icon-book-catalog.png"
                    alt="Book Catalog Icon"
                    description="Looking for your child's next read? Browse our compilation of books for all grades that we believe support our mission."
                    href="/books"
                    label="Book Catalog"
                    color="pink"
                />

                <ExploreCard
                    image="/images/icon-projects.png"
                    alt="Projects Icon"
                    description="From storytimes to puppet shows, we like to stay involved in our community. Learn more about what we do."
                    href="/projects"
                    label="Projects"
                    color="green"
                />

                <ExploreCard
                    image="/images/icon-about-us.png"
                    alt="About Us Icon"
                    description="Interested in our history and what our next steps are? Learn more about our organization and mission."
                    href="/about"
                    label="About Us"
                    color="yellow"
                />
            </div>
        </section>
    );
}
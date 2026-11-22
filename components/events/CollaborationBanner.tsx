import Link from "next/link";
import styles from "@/app/events/events.module.css";

export default function CollaborationBanner() {
    return (
        <section className={styles.collaborationBanner}>
            <h2>Want to collaborate with us?</h2>
            <p>
                   We would love to bring our events to your community!
        If you are interested in hosting an event or story hour
        at your organization, please reach out!
            </p>
            <Link href="/input" className={styles.contactButton}>
                Contact Us
            </Link>
        </section>
    );
}
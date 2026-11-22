import styles from "@/app/home.module.css";
import Link from "next/link";

export default function SponsorSection(){
    return(
        <section className={styles.sponsorSection}>
            <h1>Shoutout to our sponsor!</h1>
            <p>Stand Up is proud to be sponsored by {" "}
                <span className={styles.highlight}>HART (Historic Area Religions Together),</span> {" "}
            a local multifaith group dedicated to promoting interaction and understanding across all backgrounds. To learn more about HART and their events, 
            visit their {" "}
            <Link 
            href="https://peninsulahart.org/" 
            target="_blank"
            rel="noopener noreferrer"
            >website</Link> or their <Link href="https://www.facebook.com/PeninsulaHART/" target="_blank" rel="noopener noreferrer">Facebook page</Link>.</p>
        </section>
    );
}
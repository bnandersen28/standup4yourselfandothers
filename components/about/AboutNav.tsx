import styles from "@/app/about/about.module.css";
import Link from "next/link";
import Image from "next/image";

export default function AboutNav() {
    return (
        <section className={styles.aboutNav}>
            <div className={styles.tiles}>
                <div className={styles.tile + ' ' + styles.t1}><Image src="/images/storyhour4.jpg" alt="" width={360} height={400}/>
                    <Link href="/books">View Our Book Catalog<span>→</span></Link>
                </div>
                <div className={styles.tile + ' ' + styles.t2}><Image src="/images/storyhour5.jpg" alt="" width={360} height={400}/>
                    <Link href="/projects">View Our Projects<span>→</span></Link>
                </div>
                <div className={styles.tile + ' ' + styles.t3}><Image src="/images/storyhour7.jpg" alt="" width={360} height={400}/>
                    <Link href="/input">Contact Us<span>→</span></Link>
                </div>
            </div>

        </section>
    );
}

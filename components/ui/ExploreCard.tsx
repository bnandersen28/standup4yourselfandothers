import Link from "next/link";
import styles from "@/app/home.module.css";

type ExploreCardProps = {
    image: string;
    alt: string;
    description: string;
    href: string;
    label: string;
    color: "pink" | "green"| "yellow";
};

export default function ExploreCard({ image, alt, description, href, label, color }: ExploreCardProps) {
    return (
        <div className={`${styles.exploreCard} ${styles[color]}`}>
            <img src={image} alt={alt} />
            <p>{description}</p>

            <Link href={href} className={styles.bwButton}>
                {label}
            </Link>
        </div>
    );
}
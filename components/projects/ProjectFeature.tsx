import type { ReactNode } from "react";
import Image from "next/image";
import styles from "@/app/projects/projects.module.css";

type ProjectFeatureProps = {
    title: string;
    image: string;
    alt: string;
    variant: "f1" | "f2";
    children: ReactNode;
};

export default function ProjectFeature({
    title,
    image,
    alt,
    variant,
    children,
}: ProjectFeatureProps) {
    return (
        <section className={`${styles.feature} ${styles[variant]}`}>
            <div className={styles.photo}>
                <div className={styles.tape}></div>
                <Image
                    src={image}
                    alt={alt}
                    width={600}
                    height={400}
                />
            </div>
            <div className={styles.text}>
                <h2>{title}</h2>
                {children}
            </div>
        </section>
    );
}
import styles from "@/app/input/input.module.css"

type Props = {
    title: string;
    description: string;
}

export default function InvolvementCard({
    title,
    description
}: Props) {
    return (
        <article className={styles.involveCard}>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    )
}
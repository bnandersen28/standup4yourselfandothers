
import type { Event } from "@/lib/events";
import styles from "@/app/events/events.module.css";

type Props = {
  event: Event;
};

function formatEventDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);

  return new Date(year, month - 1, day);
}

export default function PublicEventCard({ event }: Props) {
  const date = formatEventDate(event.date);

  const month = date
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();

  const fullDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className={styles.card}>
      <div className={styles.datebox}>
        <span className={styles.mon}>{month}</span>
        <span className={styles.day}>{date.getDate()}</span>
      </div>

      <h3>{event.title}</h3>

      <div className={styles.info}>
        <div className={styles.row}>
          <span className={styles.label}>Location:</span>
          <span className={styles.value}>
            {event.location || "TBD"}
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Date:</span>
          <span className={styles.value}>{fullDate}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Time:</span>
          <span className={styles.value}>
            {event.time || "TBD"}
          </span>
        </div>

        <p className={styles.desc}>{event.description}</p>
      </div>
    </article>
  );
}

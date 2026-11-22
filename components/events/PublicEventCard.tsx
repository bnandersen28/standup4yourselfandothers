
import type { Event } from "@/lib/events";
import styles from "@/app/events/events.module.css";

type Props = {
  event: Event;
};

const MONTHS = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

function formatEventDate(dateString: string) {
    const [year, month, day] = dateString.split("-").map(Number);

    const monthName = MONTHS[month - 1];

    return {
        month: monthName.slice(0, 3).toUpperCase(),
        day,
        fullDate: `${monthName} ${day}, ${year}`,
    };
}

export default function PublicEventCard({ event }: Props) {
  const { month, day, fullDate } = formatEventDate(event.date);

  return (
    <article className={styles.card}>
      <div className={styles.datebox}>
        <span className={styles.mon}>{month}</span>
        <span className={styles.day}>{day}</span>
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

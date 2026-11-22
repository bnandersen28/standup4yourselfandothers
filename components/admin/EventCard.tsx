
import type { Event } from "@/lib/events";
import styles from "@/app/admin/admin.module.css";

type EventCardProps = {
  event: Event;
  type: "upcoming" | "past";
  onEdit: (event: Event) => void;
};

export default function EventCard({
  event,
  type,
  onEdit,
}: EventCardProps) {
  return (
    <article
          className={`${styles.eventCard} ${type === "upcoming"
                  ? styles.upcomingCard
                  : styles.pastCard}`}
      >
        <div className={styles.colorLine}></div>

        <div className={styles.eventInfo}>

          <h2>{event.title}</h2>
          <div className={styles.row}>
              <span className={styles.label}>Date:</span>
              <span className={styles.value}>{event.date}</span>
          </div>
          <div className={styles.row}>
              <span className={styles.label}>Time:</span>
              <span>{event.time}</span>
          </div>
          <div className={styles.row}>
              <span className={styles.label}>Location: </span>
              <span>{event.location}</span>
          </div>

          <button
              type="button"
              className={styles.eventCardButton}
              onClick={() => onEdit(event)}
          >
              Edit Event
          </button>
        </div>
      </article>
  );
}

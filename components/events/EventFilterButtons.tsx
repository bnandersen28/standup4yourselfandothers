import styles from "@/app/events/events.module.css";

export type EventFilter = "upcoming" | "past";

type Props = {
    selectedFilter: EventFilter | null;
    onSelect: (filter: EventFilter) => void;    
}

export default function EventFilterButtons({ selectedFilter, onSelect }: Props) {
    return(
        <div className={styles.eventsButtons}>
      <button
        type="button"
        className={`${styles.eventBtn} ${styles.yellow} ${selectedFilter === "upcoming" ? styles.active : ""}`}
        onClick={() => onSelect("upcoming")}
        aria-pressed={selectedFilter === "upcoming"}
      >
        Upcoming Events
      </button>

      <button
        type="button"
        className={`${styles.eventBtn} ${styles.pink} ${selectedFilter === "past" ? styles.active : ""}`}
        onClick={() => onSelect("past")}
        aria-pressed={selectedFilter === "past"}
      >
        Past Events
      </button>
    </div>
  );
}
    
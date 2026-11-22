import type { AdminAction } from "./AdminDashboard";
import styles from "@/app/admin/admin.module.css";

type Props = {
    activeAction: AdminAction;
    onSelect: (action: AdminAction) => void;
};

export default function AdminButtons({
    activeAction,
    onSelect
}: Props) {
  return (
    <div className={`${styles.adminButtons} ${
        activeAction !== null ? styles.buttonsActive : ""
    }`}>
      <button
        type="button"
        onClick={() => onSelect("add-event")}
        className={`${styles.adminButton} ${styles.blue}  ${
            activeAction === "add-event" ? styles.active : ""
        }`}
      >
        {activeAction === "add-event" ? "Close Form" : "Add Event"}
      </button>
      
      <button
        type="button"
        onClick={() => onSelect("edit-event")}
        className={`${styles.adminButton} ${styles.green} ${
            activeAction === "edit-event" ? styles.active : ""
        }`}
      >
        {activeAction === "edit-event" ? "Close Form" : "Edit Events"}
      </button>
      
      <button
        type="button"
        onClick={() => onSelect("add-book")}
        className={`${styles.adminButton} ${styles.orange} ${
            activeAction === "add-book" ? styles.active : ""
        }`}
      >
        {activeAction === "add-book" ? "Close Form" : "Add Book"}
      </button>
      
      <button
        type="button"
        onClick={() => onSelect("edit-book")}
        className={`${styles.adminButton} ${styles.pink} ${
            activeAction === "edit-book" ? styles.active : ""
        }`}
      >
        {activeAction === "edit-book" ? "Close Form" : "Edit Books"}
      </button>
    </div>
  );
}
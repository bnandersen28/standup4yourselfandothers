"use client";

import { useState} from "react";
import AdminButtons from "./AdminButtons";
import EventForm from "./EventForm";
import EditEventForm from "./EditEvents";
import BookForm from "./BookForm";
import EditBookForm from "./EditBooks";
import styles from "@/app/admin/admin.module.css";



export type AdminAction = 
    | "add-event"
    | "edit-event"
    | "add-book"
    | "edit-book"
    | null;

export default function AdminDashboard() {
    const [activeAction, setActiveAction] = useState<AdminAction | null>(null);

    function toggleAction(action: AdminAction) {
        setActiveAction((current)=>
            current === action ? null : action
        );
    }

    return(
        <section className={styles.adminDashboard}>
            <AdminButtons
                activeAction={activeAction}
                onSelect={toggleAction}
            />

            <div className={styles.formContainer}>
            {activeAction === "add-event" && <EventForm />}
            {activeAction === "edit-event" && <EditEventForm />}
            {activeAction === "add-book" && <BookForm />}
            {activeAction === "edit-book" && <EditBookForm />}
            </div>
        </section>
    )
}
      
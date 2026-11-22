"use client";

import { SubmitEventHandler, useState } from "react";
import { type Event, updateEvent, deleteEvent } from "@/lib/events";
import styles from "@/app/admin/admin.module.css";

type EditingEventsProps = {
    event: Event;
    type: "upcoming" | "past";
    onCancel: () => void;
    onSaved: () => Promise<void>;
};

function formatTimeForInput(time: string): string {
    const match = time.trim().match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/i);

    if (!match) return time;

    let hours = Number(match[1]);
    const minutes = match[2] ?? "00";
    const period = match[3].toLowerCase();

    if (hours < 1 || hours > 12 || Number(minutes) > 59) {
        return "";
    }

    if (period === "pm" && hours !== 12) hours += 12;
    if (period === "am" && hours === 12) hours = 0;

    return `${String(hours).padStart(2, "0")}:${minutes}`;
}

export default function EditingEvents({
    event,
    type,
    onCancel,
    onSaved,
}: EditingEventsProps) {
    const [title, setTitle] = useState(event.title);
    const [date, setDate] = useState(event.date);
    const [time, setTime] = useState(formatTimeForInput(event.time));
    const [location, setLocation] = useState(event.location);
    const [description, setDescription] = useState(event.description ?? "");
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const handleSave: SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if (saving) return; // Prevent multiple submissions
        setSaving(true);
        setError("");

        try {
            await updateEvent(event.id, { title, date, time, location, description });
            await onSaved();
        } catch (err) {
            console.error("Failed to save event:", err);
            setError("Failed to save event.");
        } finally {
            setSaving(false);
        }
    };

    async function handleDelete() {
        const confirmed = window.confirm(
            `Are you sure you want to delete "${event.title}"?`
        );

        if (!confirmed || saving) return;

        setSaving(true);
        setError("");

        try {
            await deleteEvent(event.id);
            await onSaved();
        } catch (err) {
            console.error("Failed to delete event:", err);
            setError("Unable to delete event.");
        } finally {
            setSaving(false);
        }
    }

    return (

        <form
            className={`${styles.editEventForm} ${type === "upcoming"
                ? styles.upcomingCard
                : styles.pastCard
                }`}
            onSubmit={handleSave}
        >
            <div className={styles.colorLine2}></div>
            <div className={styles.editEventInfo}>
                <h1>Edit Event</h1>

                <label htmlFor="edit-event-title">Event Title</label>
                <input
                    type="text"
                    id="edit-event-title"
                    placeholder="Event Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                </div >
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <label htmlFor="desc">Description</label>
                <textarea
                    placeholder="Description"
                    id="desc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {error && <p role="alert">{error}</p>}
                <div className={styles.editEventActions}>
                    <button
                        type="submit"
                        className={styles.saveButton}
                        disabled={saving}>
                        {saving ? "Saving..." : "Save"}
                    </button>
                    <button
                        type="button"
                        className={styles.deleteButton}
                        onClick={handleDelete} disabled={saving}>
                        Delete
                    </button>
                    <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={onCancel}
                        disabled={saving}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form >
    
    )
}
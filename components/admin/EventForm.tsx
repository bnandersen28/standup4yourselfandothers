"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { addEvent, type NewEvent } from "@/lib/events";
import styles from "@/app/admin/admin.module.css";

export default function EventForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const event: NewEvent = {
            title: String(formData.get("title") ?? "").trim(),
            date: String(formData.get("date") ?? "").trim(),
            time: String(formData.get("time") ?? "").trim(),
            location: String(formData.get("location") ?? "").trim(),
            description: String(formData.get("description") ?? "").trim(),
        };

        setIsSubmitting(true);
        setMessage("");

        try {
            await addEvent(event);
            setMessage("Event added successfully!");
            form.reset();
        } catch (error) {
            setMessage("Failed to add event. Please try again.");
        } finally {
            setIsSubmitting(false);
        }

    }
    return (
        <form id={styles.eventForm} onSubmit={handleSubmit}>
            <h1>Add Event</h1>

            <label htmlFor="title">Event Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="Event Title"
                required />
            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="time">Time:</label>
                    <input
                        type="text"
                        id="time"
                        name="time"
                        placeholder="Time" required />
                </div>
            </div>
            <label htmlFor="location">Location:</label>
            <input
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                required />

            <label htmlFor="event-description">Description:</label>
            <textarea 
            id="event-description" 
            name="description" 
            placeholder="Description"></textarea>


            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {message && <p className={styles.message}>{message}</p>}
        </form>
    );
}

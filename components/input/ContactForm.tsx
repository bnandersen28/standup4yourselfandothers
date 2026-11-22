"use client";

import { useState, type SubmitEvent} from "react";
import emailjs from "@emailjs/browser";
import styles from "@/app/input/input.module.css";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState("");

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {

        e.preventDefault();
        if(sending) return; // Prevent multiple submissions
        setSending(true);
        setStatus("");

        try{
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                {
                    to_email: "standup4everyone@gmail.com",
                    from_name: name,
                    from_email: email,
                    message: message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setStatus("Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Failed to send message:", error);
            setStatus("Failed to send message. Please try again.");
        } finally{
            setSending(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            ></textarea>
            <button type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
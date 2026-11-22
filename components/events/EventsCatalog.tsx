"use client";

import { useEffect, useState } from "react";
import { getCategorizedEvents, type Event } from "@/lib/events";
import EventFilterButtons, {
    type EventFilter,
} from "@/components/events/EventFilterButtons";
import PublicEventCard from "@/components/events/PublicEventCard";
import styles from "@/app/events/events.module.css";

export default function EventsCatalog() {
    const [selectedFilter, setSelectedFilter] = useState<EventFilter | null>(null);
    const [upcoming, setUpcoming] = useState<Event[]>([]);
    const [past, setPast] = useState<Event[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let cancelled = false;

        async function loadEvents() {
            try {
                const result = await getCategorizedEvents();
                if (!cancelled) {
                    setUpcoming(result.upcoming);
                    setPast(result.past);
                }
            } catch (err) {
                if (!cancelled) {
                    setError("Failed to load events.");
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadEvents();

        return () => {
            cancelled = true;
        };
    }, []);

    const displayedEvents = selectedFilter === "upcoming" ? upcoming : past;

    return (
        <div className={styles.eventsCatalog}>
            <EventFilterButtons
                selectedFilter={selectedFilter}
                onSelect={setSelectedFilter}
            />

            {loading && <p>Loading events...</p>}
            {error && <p role="alert">{error}</p>}

            {!loading && !error && selectedFilter && 
            (displayedEvents.length === 0 ? (
                <div className={styles.noEvents}>
                    <p>
                        {selectedFilter === "upcoming"
                            ? "We currently have no upcoming events. Please follow us on Instagram @standupforyourselfandothers, or check back later!"
                            : "There are no past events to display."}
                    </p>
                </div>
            ): (
            <section className={styles.eventsDisplay}>
                {displayedEvents.map((event) => (
                    <PublicEventCard key={event.id} event={event} />
                ))}
            </section>
            )
            
            )}
        </div>
    );
}

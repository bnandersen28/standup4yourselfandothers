"use client";
import { useEffect, useState, useRef } from "react";
import { getCategorizedEvents, type Event } from "@/lib/events";
import EditingEvents from "./EditingEvent";
import EventCard from "./EventCard";
import styles from "@/app/admin/admin.module.css";

type EventCategory = "upcoming" | "past";

export default function EditEvents() {
    const [upcoming, setUpcoming] = useState<Event[]>([]);
    const [past, setPast] = useState<Event[]>([]);
    const [activeCategory, setActiveCategory] = useState<EventCategory | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const editFormRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(selectedEvent){
            editFormRef.current?.scrollIntoView({
                behavior: "smooth", 
                block: "start",
            });
        }
    }, [selectedEvent]);


    useEffect(() => {
        async function fetchEvents() {
            try {
                const events = await getCategorizedEvents();
                setUpcoming(events.upcoming);
                setPast(events.past);
            } catch (err) {
                setError("Failed to fetch events.");
            } finally {
                setLoading(false);
            }
        }

        fetchEvents();
    }, []);

    function toggleCateogry(category: EventCategory) {
        setActiveCategory((current) =>
            current === category ? null : category
        );
    }

    function handleEdit(event: Event) {
        setSelectedEvent(event);
    }

    async function refreshEvents() {
        const events = await getCategorizedEvents();
        setUpcoming(events.upcoming);
        setPast(events.past);
    }


    return (
        <section className={styles.editEventsContainer}>

            <button
                type="button"
                className={styles.green}
                onClick={() => toggleCateogry("upcoming")}
                aria-expanded={activeCategory === "upcoming"}
            >
                <span>Upcoming Events</span>
                <span className={`${styles.arrow} ${activeCategory === "upcoming" ? styles.arrowOpen : ""
                    }`}
                    aria-hidden="true">
                    ▼
                </span>
            </button>


            {activeCategory === "upcoming" && (
                <>
                    {selectedEvent &&
                        upcoming.some(e => e.id === selectedEvent.id) && (
                            <div
                                ref={editFormRef}
                                className={styles.editFormWrapper}
                            >
                                <EditingEvents
                                    key={selectedEvent.id}
                                    event={selectedEvent}
                                    type="upcoming"
                                    onCancel={() => setSelectedEvent(null)}
                                    onSaved={async () => {
                                        await refreshEvents();
                                        setSelectedEvent(null);
                                    }}
                                />
                            </div>
                        )}
                    <div className={styles.eventList}>
                        {loading ? (
                            <p>Loading events...</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : upcoming.length === 0 ? (
                            <p>No upcoming events.</p>
                        ) : (
                            upcoming.map((event) => (

                                <EventCard
                                    key={event.id}
                                    event={event}
                                    type="upcoming"
                                    onEdit={handleEdit}
                                />
                            ))
                        )}
                    </div>


                </>
            )}

            <button
                type="button"
                className={styles.purple}
                onClick={() => toggleCateogry("past")}
                aria-expanded={activeCategory === "past"}
            >
                <span>Past Events</span>
                <span className={`${styles.arrow} ${activeCategory === "past" ? styles.arrowOpen : ""
                    }`}
                    aria-hidden="true">
                    ▼
                </span>
            </button>


            {activeCategory === "past" && (

                <>
                {selectedEvent &&
                        past.some(e => e.id === selectedEvent.id) && (
                            <div
                                ref={editFormRef}
                                className={styles.editFormWrapper}
                            >
                                <EditingEvents
                                    key={selectedEvent.id}
                                    event={selectedEvent}
                                    type="past"
                                    onCancel={() => setSelectedEvent(null)}
                                    onSaved={async () => {
                                        await refreshEvents();
                                        setSelectedEvent(null);
                                    }}
                                />
                            </div>
                        )}
                    <div className={styles.eventList}>
                        {loading ? (
                            <p>Loading events...</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : past.length === 0 ? (
                            <p>No past events.</p>
                        ) : (
                            past.map((event) => (

                                <EventCard key={event.id} event={event} type="past" onEdit={handleEdit} />
                            ))
                        )}
                    </div>

                </>
            )
            }

        </section >
    );

}
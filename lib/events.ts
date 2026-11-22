//Saves new events, edits already uploaded events, deletes events, and loads events from Firestore database.

import { 
    addDoc,
    collection, 
    serverTimestamp,
    updateDoc,
    doc,
    getDocs,
    deleteDoc
} from "firebase/firestore";
import { getFirebaseDb } from "./firebase";

export type NewEvent = {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
}; 

export type Event = NewEvent & {
    id: string;
};

const db = getFirebaseDb();

export async function addEvent(event: NewEvent) {
    try {
        const docRef = await addDoc(collection(db, "events"), {
            ...event,
            timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    
}

export async function getCategorizedEvents(): Promise<{
    upcoming: Event[];
    past: Event[];
}>{
    const snapshot = await getDocs(collection(db, "events"));
    const events: Event[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as NewEvent),
    }));

    //Get current date in YYYY-MM-DD format
    const today = new Date();

    const todayString = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, "0"),
        String(today.getDate()).padStart(2, "0"),
    ].join("-");

    const upcoming = events.filter((event) => event.date >= todayString).sort((a, b) => a.date.localeCompare(b.date));
    const past = events.filter((event) => event.date < todayString).sort((a, b) => b.date.localeCompare(a.date));   

    return { upcoming, past };
}

export async function updateEvent(
    eventId: string,
    eventData: Partial<Omit<Event, "id">>
){
    const eventRef = doc(db, "events", eventId);
    await updateDoc(eventRef, eventData);
}

export async function deleteEvent(eventId: string) {
    const eventRef = doc(db, "events", eventId);
    await deleteDoc(eventRef);
}
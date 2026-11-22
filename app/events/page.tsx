import type { Metadata } from "next";
import EventsCatalog  from "@/components/events/EventsCatalog";
import CollaborationBanner from "@/components/events/CollaborationBanner";
import RainbowLine from "@/components/ui/RainbowLine";
import PageTitle from "@/components/ui/PageTitle";
import styles from "./events.module.css";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past events hosted by Stand Up For Yourself and Others",
};

export default function EventsPage() {
    return (
        <>
        <RainbowLine />
        <main className={styles.eventsPage}>
        <PageTitle
            firstWord="Stand Up!"
            secondWord="Events"
            description="Upcoming and past events hosted by Stand Up For Yourself and Others"
        />
        
            <EventsCatalog />
            
        </main>
        <RainbowLine />
        <CollaborationBanner />
        <RainbowLine  />
        </>
    );
}
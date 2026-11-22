import PageTitle from "@/components/ui/PageTitle";
import RainbowLine from "@/components/ui/RainbowLine";
import TeamGrid from "@/components/team/TeamGrid";
import SteeringCommittee from "@/components/team/SteeringCommittee";
import styles from "./team.module.css";

export default function TeamPage() {
    return (
        <>
        <RainbowLine />
        <main className={styles.teamContainer}>
            <PageTitle
                firstWord="Meet"
                secondWord="Our Team"
                description="the people behind Stand Up" />
            <TeamGrid />
            
        </main>
        <SteeringCommittee />
        <RainbowLine />
        </>
    );
}
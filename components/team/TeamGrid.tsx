import TeamMemberCard from "./TeamMemberCard";
import { teamMembers } from "@/data/teamMembers";
import styles from "@/app/team/team.module.css";

export default function TeamGrid() {
    return (
        <section className={styles.teamZone}>
            <div className={styles.teamGrid}>
                {teamMembers.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                ))}
            </div>
        </section>
    );
}



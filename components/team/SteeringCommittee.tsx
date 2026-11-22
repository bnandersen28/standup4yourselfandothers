import styles from "@/app/team/team.module.css";

const committeeMembers = [
    "Rev. Lisa Green",
    "Glenn Solomon",
    "Dr. Robert A. Whitehead",
    "Susan Portnoff",
    "Sylvia Scholnick",
    "Dr. Jocelyn Henry-Whitehead"
];

export default function SteeringCommittee() {
    return (
        <section className={styles.steeringCommitteeZone}>
            <h2>Our Steering Committee</h2>
            <h4>The volunteers who guide Stand Up behind the scenes</h4>

            <div className={styles.steeringCommittee}>
                {committeeMembers.map((name)=>(
                    <div key={name} className={styles.scMember}>
                        <h4>{name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}
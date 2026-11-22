"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/app/team/team.module.css";
import type { TeamMember } from "@/data/teamMembers";

type Props = {
    member: TeamMember;
}

export default function TeamMemberCard({ member }: Props) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`${styles.flipOuter} ${styles[member.color]} ${isFlipped ? styles.flipped : ""
                }`}
        >
            <div className={styles.flipCard}>
                <div className={`${styles.flipFace} ${styles.flipFront}`}>
                    <div className={styles.avatar}>
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={180}
                            height={180}
                        />
                    </div>

                    <h2 className={styles.memberName}>{member.name}</h2>
                    <h4 className={styles.memberRole}>{member.role}</h4>

                    <button
                        type="button"
                        className={styles.flipButton}
                        onClick={() => setIsFlipped(true)}
                    >
                        Tap to flip
                    </button>
                </div>
                <div className={`${styles.flipFace} ${styles.flipBack}`}
                    onClick={() => setIsFlipped(false)}>
                    <div className={styles.avatar}>
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={180}
                            height={180}
                        />
                    </div>
                    <h2 className={styles.memberName}>{member.name}</h2>
                    <h4 className={styles.memberRole}>{member.role}</h4>
                    <p>{member.bio}</p>


                </div>
            </div>
        </div>
    );
}
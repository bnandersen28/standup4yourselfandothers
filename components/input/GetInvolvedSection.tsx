import PageTitle from "../ui/PageTitle";
import InvolvementCard from "./InvolvementCard";
import styles from "@/app/input/input.module.css"

const involvmentOptions = [
    {
        title: "Volunteer",
        description: "We are always looking for volunteers to help with our events and programs. If you are interested in volunteering, please reach out to us!"
    }, 
    {
        title: "Connect",
        description: "We would love to connect with you! Follow us on social media and stay up to date with our latest news and events."
    }, 
    {
        title: "Donate",
        description: "We welcome donations! Send donations to Temple Beth El Williamsburg (Our Fiscal Agent). Please earmark your donation for \"Stand Up\""
    }
];

export default function GetInvolvedSection() {
    return (
        <section className={styles.getInvolved}>
            <PageTitle
                firstWord="Get"
                secondWord="Involved"
                description="Like our mission and want to support us? Here are some ways you can get involved!"
            />
            <div className={styles.involveGrid}>
                {involvmentOptions.map((option, index) => (
                    <InvolvementCard
                        key={option.title}
                        title={option.title}
                        description={option.description}
                    />
                ))}
            </div>
        </section>
    );
}
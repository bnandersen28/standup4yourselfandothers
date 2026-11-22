import styles from "@/app/input/input.module.css";
import PageTitle from "../ui/PageTitle";
import ContactForm from "./ContactForm";

export default function ContactSection(){
    return (
        <section className={styles.yourInput}>
            <h1>Your Input</h1>
            <h4>Have a suggestion, question, or want to work with us? Use our contact form below and you should hear back from us soon!</h4>
            <div className={styles.involveForm}>
                <ContactForm />
            </div>
        </section>
    )
}
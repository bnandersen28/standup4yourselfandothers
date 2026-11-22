import GetInvolvedSection from "@/components/input/GetInvolvedSection";
import RainbowLine from "@/components/ui/RainbowLine";
import ContactSection from "@/components/input/ContactSection";
import styles from "./input.module.css";



export default function InputPage() {
    return (
        <>
            <RainbowLine />
            <section className={styles.involvePage}>
                <GetInvolvedSection />
                <ContactSection />
          
            </section>
              <RainbowLine />
        </>

    )
}
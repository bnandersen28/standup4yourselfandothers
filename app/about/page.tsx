import RainbowLine from "@/components/ui/RainbowLine";
import AboutHero from "@/components/about/AboutHero";
import NextSteps from "@/components/about/NextSteps";
import AboutNav from "@/components/about/AboutNav";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      <RainbowLine />
      <AboutHero />
      <section className={styles.band + ' ' + styles['b-blue']}>
        <div className={styles.wrap + ' ' + styles.two + ' ' + styles.a}>
            <h2 className={styles.h2}>Who We Are</h2>
            <p>Stand Up For Yourself and Others! is an anti-bullying initiative sponsored by HART (Historic Area Religions Together), 
                an organization representing various faith communities in the Williamsburg Area.</p>
        </div>
      </section>
      <section className={styles.band + ' ' + styles['b-yellow']}>
        <div className={styles.wrap + ' ' + styles.two + ' ' + styles.b}>
        <p>To help children learn to value kindess and individual differences, and to reduce the effects of anti-group
            bias on children in our community.</p>
         <h2 className={styles.h2}>Our Mission</h2>
        </div>
      </section>
      <NextSteps />
        <AboutNav />
        <RainbowLine />
    </>
      
    );
}
  
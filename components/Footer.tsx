import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h2>Contact Us</h2>
        <p>
          <a href="mailto:standup4everyone@gmail.com">
            standup4everyone@gmail.com
          </a>
        </p>
      </div>

      <div className={styles.footerDivider}></div>

      <div className={styles.footerSection}>
        <h2>Follow Us</h2>
        <a
          href="https://www.instagram.com/standupforyourselfandothers/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram: @standupforyourselfandothers
        </a>
      </div>
    </footer>
  );
}

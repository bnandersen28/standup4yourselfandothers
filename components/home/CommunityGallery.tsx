import styles from "@/app/home.module.css";

export default function CommunityGallery() {
    return (
        <section className={styles.communityGallery}>
            <h3>Some of Our Favorite Moments</h3>
            <h4>Time in the Community</h4>
            <div className={styles.imageMarquee}>
                <div className={styles.imageTrack}>
                    <img src="images/storyhour1.jpg" alt="Stand Up Story Hour" />
                    <img src="images/puppetshow1.jpg" alt="Puppet Show" />
                    <img src="images/storyhour2.jpg" alt="Stand Up Story Hour" />
                    <img src="images/storyhour7.jpg" alt="Stand Up Story Hour" />
                    <img src="images/storyhour3.jpg" alt="Stand Up Story Hour" />
                    <img src="images/storyhour4.jpg" alt="Stand Up Story Hour" />
                    <img src="images/storyhour1.jpg" alt="Stand Up Story Hour" />
                    <img src="images/puppetshow1.jpg" alt="Puppet Show" />
                    <img src="images/storyhour2.jpg" alt="Stand Up Story Hour" />
                    <img src="images/storyhour7.jpg" alt="Stand Up Story Hour" />
                    <img src="images/storyhour3.jpg" alt="Stand Up Story Hour" />
                    <img src="images/storyhour4.jpg" alt="Stand Up Story Hour" />
                </div>
            </div>
        </section>
    );
}
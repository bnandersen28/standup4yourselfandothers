import styles from "@/app/home.module.css";

export default function AboutSection() {
    return (
        <section className={styles.aboutSection}>
            <h1>About Stand Up</h1>
            
            <p>
                Stand up! For Yourself and Others is an anti-bullying initiative
                sponsored by {" "} 
                <strong>
                    HART (Historic Area Religions Together, an organization
                    representing various faith communities in the Williamsburg Area)
                    </strong> {" "}
                    and the {" "}
                <strong>
                Williamsburg Community Foundation.</strong>
                </p>
                
                <p>
                    The initiative was founded in October 2023. Our first activity was MLK Weekend,
                    a presentation of the puppet show, in response to the growing concern
                    of the effects of bullying on our children. Our mission is to help
                    children learn to value individual differences and reduce the negative
                    effects of anti-group bias on children in our community. As part of this
                    initiative we are providing art and literature programs including books
                    and puppet shows to local libraries and faith communities that teach children
                    the importance of valuing individuality.</p>
    </section>         
    );
}   
import ProjectFeature from "@/components/projects/ProjectFeature";
import RainbowLine from "@/components/ui/RainbowLine";
import PageTitle from "@/components/ui/PageTitle";
import styles from "./projects.module.css";

export default function Projects() {
    return (
        <><RainbowLine />
            <main className={styles.projectsPage}>
                <PageTitle
                    firstWord="Our"
                    secondWord="Projects"
                    description="How we stay involved in the community" />
                <ProjectFeature
                    title="Story Hours"
                    image="/images/storytime.png"
                    alt="Stand Up Story Hour"
                    variant="f1"
                >
                    <p>
                        Join us for “Stand Up! For Yourself and Others” Story Hours at local libraries
                        and faith communities, where community leaders from all corners of Williamsburg
                        read stories to children that promote the value of individual differences. The
                        stories come from our carefully chosen book collection, which includes over 100
                        books we’ve donated to the Williamsburg Regional Library.
                    </p>
                </ProjectFeature>
                <ProjectFeature
                    title="Puppet Shows"
                    image="/images/puppetshowproject.jpg"
                    alt="Stand Up Puppet Shows"
                    variant="f2"
                >
                    <p>
                        At “Stand Up! For yourself and others”, we are proud to partner up with the Rainbow Puppet Company, created by
                        David Messick, whose anti-bullying puppet show program “Speak Out- The Search for Gold” has become a trusted
                        resource for many schools and communities.

                        The program follows the Rainbow Puppeteers as they embark on a treasure hunt, teaching children that the
                        greatest treasure is respect and trust for others. One of the key stories featured in the program, “The Wall,”
                        highlights the importance of teamwork and valuing individual skills.
                    </p>

                    <p>
                        To learn more about the Rainbow Puppet Company and their puppet show productions,
                        visit their website at <a href="https://rainbowpuppets.com/" target="_blank">https://rainbowpuppets.com/</a>.
                        You can also view highlights
                        of their numerous puppet shows on their youtube channel at <a href="https://www.youtube.com/@davidmessick6577"
                            target="_blank">https://www.youtube.com/@davidmessick6577</a>.
                    </p>
                </ProjectFeature>
            </main>
            <RainbowLine  />
        </>
    );

}
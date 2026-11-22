import styles from '@/app/about/about.module.css';

export default function NextSteps() {
    return (
        <section className={styles.band + ' ' + styles['b-green']}>
            <div className={styles.nextSteps}>
                <h2>Our Next Steps</h2>
                <p>For almost three years, Stand Up! has brought thought-provoking and entertaining educational programming to the Williamsburg community.
                    We are now ready to transfer this legacy to the community agencies that share our commitment to helping children learn to value individual differences
                    and act with kindness. There are almost 200 books in the children's and youth collection at the branches of the Williamsburg Regional Library.</p>
                <p>We are excited to announce these books are available to child care centers, preschools, and public and private schools at no cost through the following ways:</p>

                <div className={styles.steps}>
                    <div className={styles.step}><span className={styles.num}>1</span>Checking out books from the collection yourself</div>
                    <div className={styles.step}><span className={styles.num}>2</span>Contacting Eletha Davis, the Outreach Coordinator at WRL about delivering books to your program at no cost to you <br /> 
                    <strong>edavis@wrl.org</strong> <br />
                    <strong>757-741-3323</strong></div>
                    <div className={styles.step}><span className={styles.num}>3</span>Requesting one of our wonderful volunteer guest readers</div>
                </div>
         </div>



        </section>
    );
}
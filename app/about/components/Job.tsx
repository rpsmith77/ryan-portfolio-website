import styles from "../page.module.css"

export default function Job(props: any) {
    return (
        <div className={styles.job}>
            <div className={styles.jobTitle}>
                <h2>{props.title} - {props.company}</h2>
            </div>
            <h3 className={styles.jobDate}>{props.date}</h3>
            <ul className={styles.jobDesc}>
                {props.description.map((line: string, index: number) => <li key={index}>{line}</li>)}
            </ul>
        </div>
    );
}
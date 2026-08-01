'use client'

import styles from "../page.module.css"
import {useId, useState} from "react";
import ExpandDown from "../../../public/expand-down.svg"
import Image from "next/image";

type JobProps = {
    title: string;
    company: string;
    date: string;
    description: string[];
};

export default function Job(props: JobProps) {
    const [showDesc, setShowDesc] = useState(false);
    const descriptionId = useId();

    return (
        <div className={styles.job}>
            <div className={styles.jobTitle}>
                <h2>{props.title} - {props.company}</h2>
            </div>
            <h3 className={styles.jobDate}>{props.date}</h3>
            <div>
                {showDesc ?
                    <div id={descriptionId}>
                        <ul className={styles.jobDesc}>
                            {props.description.map((line: string, index: number) =>
                                <li key={index}>
                                    {line}
                                </li>)
                            }
                        </ul>
                    </div> : null}
                <button
                    type="button"
                    className={`${styles.jobToggle} ${showDesc ? styles.seeLess : styles.seeMore}`}
                    aria-expanded={showDesc}
                    aria-controls={descriptionId}
                    aria-label={`${showDesc ? 'Hide' : 'Show'} details for ${props.title} at ${props.company}`}
                    onClick={() => setShowDesc((current) => !current)}
                >
                    <Image className={'filterSVG'}
                           src={ExpandDown}
                           alt=""
                           aria-hidden="true"
                           width={30}
                           height={30}/>
                </button>
            </div>

        </div>
    );
}
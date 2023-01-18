'use client'

import styles from "../page.module.css"
import {useState} from "react";
import ExpandDown from "../../../public/expand-down.svg"
import Image from "next/image";

export default function Job(props: any) {
    const [showDesc, setShowDesc] = useState(false);


    return (
        <div onClick={() => setShowDesc(!showDesc)} className={styles.job}>
            <div className={styles.jobTitle}>
                <h2>{props.title} - {props.company}</h2>
            </div>
            <h3 className={styles.jobDate}>{props.date}</h3>
            <div>
                {showDesc ?
                    <div>
                        <ul className={styles.jobDesc}>
                            {props.description.map((line: string, index: number) =>
                                <li key={index}>
                                    {line}
                                </li>)
                            }
                        </ul>
                    </div> : null}
                <div className={showDesc ? styles.seeLess : styles.seeMore}>
                    <Image className={'filterSVG'} src={ExpandDown} alt={'show more button'} width={30}
                           height={30}/>
                </div>
            </div>

        </div>
    );
}
import styles from "../page.module.css"
import Image from "next/image"
import {FunctionComponent} from "react";

type Props = {
    title: string,
    subtitle: string
    description: string,
    builtWith: string[],
    image?: string,
    website?: string,
}

const Project: FunctionComponent<Props> = ({title, subtitle, description, builtWith, image = null, website = ''}) => {
    return (
        <a href={website ? website : ''} className={styles.project}>
            {image && <Image className={styles.image}
                             src={image}
                             alt={`Picture of ${title}`}
                             width={250}
                             height={250}

            />}
            <div className={styles.text}>
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.subtitle}>{subtitle}</h3>
                <p className={styles.description}>{description}</p>
                <h4 className={styles.builtWith}>{builtWith.map((tool: string, index: number) => {
                    if (index !== builtWith.length - 1) {
                        return <span key={index}>{tool}, </span>;
                    } else {
                        return <span key={index}>and {tool}.</span>;
                    }
                })}</h4>
            </div>

        </a>
    );
}

export default Project;

import styles from "../page.module.css"
import Image from "next/image"
import type {ProjectData} from "@/app/data/portfolio";

const Project = ({title, subtitle, description, builtWith, image, website}: ProjectData) => {
    return (
        <a href={website} className={styles.project} target="_blank" rel="noopener noreferrer">
            {image && <Image className={styles.image}
                             src={image}
                             alt=""
                             aria-hidden="true"
                             width={250}
                             height={250}

            />}
            <div className={styles.text}>
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.subtitle}>{subtitle}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.builtWith}><span className={styles.visuallyHidden}>Built with: </span>{builtWith.map((tool, index) => {
                    if (index !== builtWith.length - 1) {
                        return <span key={index}>{tool}, </span>;
                    } else {
                        return <span key={index}>and {tool}.</span>;
                    }
                })}</p>
                <span className={styles.visuallyHidden}>(opens in a new tab)</span>
            </div>

        </a>
    );
}

export default Project;

import Image from 'next/image'
import styles from './page.module.css'
import Loading from "./loading";
import Link from "next/link";
import LinkedIn from "../public/linkedin-outline.svg"
import Github from "../public/github-outline.svg"
import Email from "../public/mail-05.svg"
import HandWave from "./HandWave";

export default function Home() {



    return (
        <div className={styles.container}>
            <main>
                <div className={styles.heroSection}>
                    <div className={styles.heroText}>
                        {/*<h2><span className={styles.wave}>👋</span> Welcome!</h2>*/}
                        <h2><HandWave/> Welcome!</h2>
                        <h1 className={styles.heroGradientText}>
                            <span className={styles.heroNormalText}>I&apos;m </span>
                            Ryan Smith
                            <span className={styles.heroNormalText}>.<br/>I make </span>
                            Cool Stuff
                            <span className={styles.heroNormalText}>.</span>
                        </h1>
                        <div className={styles.contact}>
                            <a href={'https://www.linkedin.com/in/ryan--smith/'} target={'_blank'} rel="noreferrer">
                                <Image src={LinkedIn} alt={'LinkedIn Social Link'} width={30} height={30}/>
                            </a>
                            <a href={'https://github.com/rpsmith77'} target={'_blank'} rel="noreferrer">
                                <Image src={Github} alt={'GitHub Link'} width={30} height={30}/>
                            </a>
                            <a href={'mailto:rpsmith77@gmail.com'}>
                                <Image src={Email} alt={'Email Link'} width={30} height={30}/>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

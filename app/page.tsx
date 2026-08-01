import Image from 'next/image'
import styles from './page.module.css'
import LinkedIn from "../public/linkedin-outline.svg"
import Github from "../public/github-outline.svg"
import Email from "../public/mail-05.svg"
import HandWave from "./HandWave";
import JsonLd from '@/app/JsonLd';
import {absoluteUrl} from '@/app/lib/site';

export default function Home() {
    return (
        <div className={styles.container}>
            <JsonLd data={{
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Ryan Smith',
                url: absoluteUrl('/'),
                image: absoluteUrl('/profile-pic.webp'),
                jobTitle: 'Software Engineer',
                sameAs: [
                    'https://www.linkedin.com/in/ryan--smith/',
                    'https://github.com/rpsmith77',
                ],
            }}/>
            <main id="main-content" tabIndex={-1}>
                <div className={styles.heroSection}>
                    <div className={styles.heroText}>
                        <p className={styles.welcome}><HandWave/> Welcome!</p>
                        <h1 className={styles.heroGradientText}>
                            <span className={styles.heroNormalText}>I&apos;m </span>
                            Ryan Smith
                            <span className={styles.heroNormalText}>.<br/>I make </span>
                            Cool Stuff
                            <span className={styles.heroNormalText}>.</span>
                        </h1>
                        <div className={styles.contact} aria-label="Contact links">
                            <a href="https://www.linkedin.com/in/ryan--smith/" target="_blank" rel="noopener noreferrer" aria-label="Ryan Smith on LinkedIn">
                                <Image src={LinkedIn} alt="" aria-hidden="true" width={30} height={30}/>
                            </a>
                            <a href="https://github.com/rpsmith77" target="_blank" rel="noopener noreferrer" aria-label="Ryan Smith on GitHub">
                                <Image src={Github} alt="" aria-hidden="true" width={30} height={30}/>
                            </a>
                            <a href="mailto:rpsmith77@gmail.com" aria-label="Email Ryan Smith">
                                <Image src={Email} alt="" aria-hidden="true" width={30} height={30}/>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

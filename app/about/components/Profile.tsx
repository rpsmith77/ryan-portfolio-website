import styles from "../page.module.css"
import Image from "next/image";
import ProfilePic from "@/public/profile-pic.webp";
import Link from "next/link";

export default function Profile() {
    return (
        <div className={styles.profile}>
            <h2 className={styles.profileHeader}>
                I&apos;m Ryan, a <span className={"colorAccent"}>Software Engineer</span>  with a passion for creating effective and engaging experiences.
            </h2>
            <div className={styles.profilePic}>
                <Image
                    src={ProfilePic}
                    alt={'Picture of Ryan Smith'}
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: 'auto',
                        maxWidth: '460px',
                    }}
                    width={460}
                    height={460}
                    priority
                />
            </div>
            <div className={styles.profileDesc}>
                <h3>
                My days at work are spent deep in embedded systems, working with languages like C++ and Python, and it&apos;s a great place to tackle complex challenges. But what really drives me is the creative side of building things.<br></br><br></br>
                Outside of my professional work, I&apos;m always tinkering with personal projects. I love the feeling of bringing an idea to life, whether it&apos;s a hardware project that integrates software, like my live subway map display, or a web application that solves a real-world problem. It&apos;s the challenge of figuring out how all the pieces fit together that keeps me hooked.<br></br><br></br>
                I find that my professinal work experience and my personal projects complement each other. The problem-solving skills I use at work translate directly to my personal projects, and the creativity I exercise in my personal projects keeps me energized for my work. It's a continuous cycle of learning and building.
                </h3>
                {/*<h3>Let&apos;s get started.</h3>*/}
            </div>
            <h2 className={styles.profileFooter}>Let&apos;s get started.</h2>
        </div>
    );
}
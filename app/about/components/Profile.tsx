import styles from "../page.module.css"
import Image from "next/image";
import ProfilePic from "@/public/profile-pic.webp";
import Link from "next/link";

export default function Profile() {
    return (
        <div className={styles.profile}>
            <h2 className={styles.profileHeader}>
                I&apos;m Ryan, a <span className={"colorAccent"}>Software Engineer</span> with a passion for
                helping others and creating incredible experiences.
            </h2>
            <div className={styles.profilePic}>
                <Image
                    src={ProfilePic}
                    alt={'Picture of Ryan Smith'}
                    width={460}
                    height={460}
                    priority
                />
            </div>
            <div className={styles.profileDesc}>
                <h3>
                    In 2022, I graduated from Florida Gulf Coast University with a B.S. in Software Engineering.
                    I&apos;ve had some really cool experiences, and I&apos;m proud of what I’ve accomplished.
                    <br/><br/>
                    I won the award for the&nbsp;
                    <a className={styles.profileDescLink}
                       href={'https://devpost.com/software/generative-art-z7swoc'}>
                        Most Impactful Hack at Hackabull 2021
                    </a>
                    . I gained valuable real-world experience through my internship, where I developed
                    a&nbsp;
                    <Link className={styles.profileDescLink} href={'/projects'}>
                        prototype system
                    </Link>
                    &nbsp;to assist veterans in
                    transitioning from military to civilian jobs. Then, as a learning assistant for both&nbsp;
                    <span className={styles.italics}>
                                Intro to Programming
                            </span> and&nbsp;
                    <span className={styles.italics}>
                                Object-Oriented Programming
                            </span>, I helped students debug their code,
                    troubleshoot technical issues, and understand complex programming concepts and techniques,
                    such as inheritance, polymorphism, and interfaces.<br/><br/>
                    Now, I&apos;m looking for new roles that allow me to use my skills to solve complex
                    issues with creative solutions and collaborate with teams to develop products that add real
                    impact.
                </h3>
                {/*<h3>Let&apos;s get started.</h3>*/}
            </div>
            <h2 className={styles.profileFooter}>Let&apos;s get started.</h2>
        </div>
    );
}
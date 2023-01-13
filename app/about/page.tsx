import styles from './page.module.css'
import Image from "next/image";
import ProfilePic from "../../public/profile-pic.webp"
import Link from "next/link";
import Loading from "../loading";
import Job from "./components/Job";

export default function About() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.profile}>
                    <div className={styles.profilePic}>
                        <Image
                            src={ProfilePic}
                            alt={'Picture of Ryan Smith'}
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className={styles.profileDesc}>
                        <h2>
                            I&apos;m Ryan, a <span className={"colorAccent"}>Software Engineer</span> with a passion for helping others and creating real impact.
                        </h2>
                        <p>
                            In 2022, I graduated from Florida Gulf Coast University with a B.S. in Software Engineering.
                            During my time there, I had some really cool experiences and accomplished a lot. I won the award for the&nbsp;
                            <a className={styles.profileDescLink} href={'https://devpost.com/software/generative-art-z7swoc'}>
                                Most Impactful Hack at Hackabull 2021
                            </a>
                            . I also had the opportunity to gain valuable real-world experience through my internship. I was able to use the skills I had learned in my classes to develop a
                            a&nbsp;
                            <Link className={styles.profileDescLink} href={'/projects'}>
                                prototype system
                            </Link>
                            &nbsp;to assist veterans in
                            transitioning from military to civilian jobs. Furthermore, as a learning assistant for both
                            Intro to Programming and Object-Oriented Programming, I was able to help students debug
                            their code, troubleshoot technical issues, and understand complex programming concepts and
                            techniques, such as inheritance, polymorphism, and interfaces.
                        </p>
                    </div>
                </div>
                <div className={styles.experience}>
                    <h1 id={'experience'}>Experience</h1>
                    <Job
                        title={'Software Engineer Intern'}
                        company={'Intevations LLC'}
                        date={'August 2021 - May 2022'}
                        description={[
                            'Develop a system to help veterans create resumes to transition from military to civilian jobs',
                            'Use Natural Language Processing to determine what skills are being sought after based on real job postings',
                            'Elicit Requirements from Sponsor',
                            'Participate in a modified SCRUM',
                            'Build Front End using Flask',
                            'Setup and maintain CI/CD Pipeline utilizing Github Actions and AWS ECR and ECS'
                        ]}
                    />
                    <Job
                        title={'Learning Assistant'}
                        company={'FGCU'}
                        date={'January 2020 - December 2021'}
                        description={[
                            'Collaborate with other learning assistants, the instructor, and support staff to ensure that the needs of all students are met and that they have the resources and support they need to succeed',
                            'Help students develop their critical thinking, communication, and interpersonal skills through group discussions',
                            'Help students debug their code, troubleshoot technical issues, and understand complex programming concepts and techniques, such as inheritance, polymorphism, and interfaces'
                        ]}
                    />


                </div>

            </main>

        </div>
    );
}
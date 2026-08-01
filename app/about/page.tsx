import styles from './page.module.css'
import Job from './components/Job'
import Profile from './components/Profile'
import Image from 'next/image'
import ResumeSVG from '../../public/resume.svg'
import Link from 'next/link'
import {jobs} from '@/app/data/portfolio'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Ryan Smith\'s software engineering experience, skills, and background.',
  alternates: {canonical: '/about'},
  openGraph: {
    title: 'About Ryan Smith',
    description: 'Software engineering experience spanning embedded systems, C++, Python, and cloud delivery.',
    url: '/about',
  },
}

export default function About () {
  return (
    <div className={styles.container}>
      <main id="main-content" tabIndex={-1} className={styles.main}>
        <Profile/>
        <section className={styles.experience} aria-labelledby="experience">
          <div className={styles.experienceTitle}>
            <h2 id="experience">Experience</h2>
            <Link href={'/RyanSmithResume.pdf'}
                  className={styles.resume}
                  aria-label="View Ryan Smith's resume as a PDF">
              <Image src={ResumeSVG}
                alt=""
                aria-hidden="true"
                     width={50}
                     height={50}
              />
              <span>Resume</span>
            </Link>

          </div>
          {jobs.map((job) =>
            <Job
              key={job.title + job.company + job.date}
              title={job.title}
              company={job.company}
              date={job.date}
              description={job.description}
            />)
          }
        </section>

      </main>

    </div>
  )
}
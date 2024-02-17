import styles from './page.module.css'
import Job from './components/Job'
import Profile from './components/Profile'
import Image from 'next/image'
import ResumeSVG from '../../public/resume.svg'
import Link from 'next/link'

export default function About () {
  const jobs = [
    {
      title: 'Software Engineer',
      company: 'Thales',
      date: 'May 2023 - Present',
      description: [
        'Utilize a diverse skill set encompassing C++, Python, Linux, shell scripting, and Docker to develop robust software solutions, streamline system processes, and automate tasks, facilitating efficient development workflows and enhancing overall productivity',
        'Lead debugging efforts and root cause analysis for system anomalies, implement robust solutions to mitigate risks, and ensure uninterrupted WiFi service during flight operations',
        'Actively participate in code reviews, knowledge sharing sessions, and mentorship activities, fostering a culture of collaboration, innovation, and professional growth within the engineering team',
        'Successfully lead the migration project, orchestrating seamless deployment and ensuring compatibility with existing hardware and software components while transitioning the embedded system\'s operating environment from CentOS 7 to AlmaLinux 9',
        'Engaged in Thales-led Graduate Program aimed at cultivating leadership abilities, where I actively participated in specialized training modules, mentorship sessions, and practical projects to develop strategic thinking, communication prowess, and effective team management skills'
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Intevations LLC',
      date: 'August 2021 - May 2022',
      description: [
        'Develop a system to help veterans create resumes to transition from military to civilian jobs',
        'Use Natural Language Processing to determine what skills are being sought after based on real job postings',
        'Elicit Requirements from Sponsor',
        'Participate in a modified SCRUM',
        'Build Front End using Flask',
        'Setup and maintain CI/CD Pipeline utilizing Github Actions and AWS ECR and ECS',
      ],
    },
    {
      title: 'Learning Assistant',
      company: 'FGCU',
      date: 'January 2020 - December 2021',
      description: [
        'Collaborate with other learning assistants, the instructor, and support staff to ensure that the needs of all students are met and that they have the resources and support they need to succeed',
        'Help students develop their critical thinking, communication, and interpersonal skills through group discussions',
        'Help students debug their code, troubleshoot technical issues, and understand complex programming concepts and techniques, such as inheritance, polymorphism, and interfaces',
      ],
    },
  ]
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Profile/>
        <div className={styles.experience}>
          <div className={styles.experienceTitle}>
            <h1 id={'experience'}>Experience</h1>
            <Link href={'/RyanSmithResume.pdf'}
                  className={styles.resume}>
              <Image src={ResumeSVG}
                     alt={'Resume'}
                     width={50}
                     height={50}
              />
              <h4>Resume</h4>
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
        </div>

      </main>

    </div>
  )
}
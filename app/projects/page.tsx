import styles from './page.module.css'
import Project from "./components/Project";
// import TypingEffect from "./components/TypingEffect";
import Image from "next/image";
import Github from "../../public/github-outline.svg";

export default function projects() {
    // template for featured project
    // {
    //     title: '',
    //         subtitle: '',
    //     description: '',
    //     builtWith: '',
    //     image: ''
    // }
    const featuredProjects = [
        {
            title: 'RedDictio',
            subtitle: 'Utilizing machine learning, to analyze subreddit comments for hate/toxicity',
            description: 'RedDictio is overall a test of our ability to create a webpage, hook it up to a hosted database, scrape data from reddit, and judge this data using a neural network. It connects to several fields in computing such as Database Design, Data Engineering, Data Science, Machine Learning, Cloud Computing, and Web Development.',
            builtWith: ['Python', 'Flask', 'API', 'Google Cloud', 'AWS', 'Docker', 'SQL', 'Keras'],
            image: '/reddit.svg',
            website: 'https://reddictio.com/'
        },
        {
            title: 'WDW Live Information',
            subtitle: 'React Web App that displays current wait times, next show time, and restaurant walk up availability for each Walt Disney World Theme Park.',
            description: 'Displays the wait time/status of every ride, the show status/next showing, and restaurant walk up availability at the main four Walt Disney World Themeparks by utilzing themepark.wiki\'s RESTful API.',
            builtWith: ['React', 'NodeJS', 'Javascript', 'RESTful API', 'GitHub Pages'],
            image: '/brand-disney.svg',
            website: 'https://rpsmith77.github.io/wait_times/'
        },
        {
            title: 'Military-to-Civilian Terminology Translation Tool: Analysis of Job Data in Technology',
            subtitle: 'Using real job postings to help veterans make resumes to transition from military to civilian jobs.',
            description: 'Part of my senior project, my teammates and I developed a system which scrapes indeed for job postings in tech related fields. We then use NLP to analyze this data. This data is then made available to be used in resume creation. The user is able to see the sources of each data post and even go to the original job posting, if they want to apply to that job.',
            builtWith: ['Python', 'Flask', 'AWS', 'NLP', 'mySQL', 'Github', 'Docker', 'Jira', 'Beautiful Soup'],
            image: '/resume-4.svg',
            website: 'https://seniorproject-355719-hez34gdyna-uc.a.run.app/'
        },
        {
            title: 'Accessible Generative Art',
            subtitle: 'Randomly generated art that intentionally uses a color-blind-friendly color palette.\n',
            description: 'Art should be accessible. Approximately 5% of the world has some form of color blindness. Often times, when something is being designed, color blindness is not something taken into consideration. The designers aren\'t being malicious, people don\'t always think about issues that don\'t affect them. My program makes a conscious effort to be inclusive to people with color blindness by using a color-blind-friendly color palette. The program randomly generates art and saves it in a .svg file. The background color, number of shapes, and types of shapes are all randomized. By using .svg files, the art has the ability to have lossless scalability.',
            builtWith: ['Python', 'Hackathon', 'Award-Wining', 'Pycairo', 'SVG', 'NumPy'],
            image: '/art-gallery.svg',
            website: 'https://devpost.com/software/generative-art-z7swoc'
        },
    ]

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.projectHeroContainer}>
                    {/*<h1>The <span className={'colorAccent'}>Cool Stuff</span> I make.</h1>*/}
                    {/*<h1>I&nbsp;<TypingEffect/></h1>*/}
                </div>
                <div className={styles.featuredProjects}>
                    {featuredProjects.map((project: any) =>
                        <Project title={project.title}
                                 key = {project.title}
                                 subtitle={project.subtitle}
                                 description={project.description}
                                 builtWith={project.builtWith}
                                 image={project.image ? project.image : null}
                                 website={project.website ? project.website : null}
                        />
                    )}
                </div>
                <div className={styles.moreProjectsContainer}>
                    <a className={styles.moreProjects}
                       href={'https://github.com/rpsmith77?tab=repositories'}
                       target={'_blank'} rel="noreferrer">
                        <h1>More Projects</h1>
                        <Image className={styles.github} src={Github} alt={'GitHub Link'} width={100} height={100}/>
                    </a>
                </div>
            </main>
        </div>
    );
}
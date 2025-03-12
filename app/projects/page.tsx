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
            title: 'Realtime NYC Subway Map Visualization',
            subtitle: 'Real-time LED visualization of NYC subway train locations using MTA data and an ESP32 microcontroller.',
            description: 'This project is a captivating real-time visualization of the NYC subway system, built using an ESP32 microcontroller and LED strips to dynamically display train locations on a physical map.  Leveraging live data from the MTA through a custom server, the visualization illuminates station LEDs in line-specific colors as trains arrive, creating an engaging and informative representation of the city\'s complex transit network.  This project showcases skills in hardware and software integration, real-time data processing, and physical computing, resulting in a visually striking and functional piece that bridges the digital and physical realms.',
            builtWith: ['C++', 'Docker', 'JSON', 'ESP32-S3 Microcontroller', 'Programmable LEDs', 'GTFS-Realtime data', 'PlatformIO', 'VSCode'],
            image: '/mta-svgrepo-com.svg',
            website: 'https://github.com/rpsmith77/nyc-subway-map'
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
            title: 'RedDictio',
            subtitle: 'Utilizing machine learning, to analyze subreddit comments for hate/toxicity',
            description: 'RedDictio is overall a test of our ability to create a webpage, hook it up to a hosted database, scrape data from reddit, and judge this data using a neural network. It connects to several fields in computing such as Database Design, Data Engineering, Data Science, Machine Learning, Cloud Computing, and Web Development.',
            builtWith: ['Python', 'Flask', 'API', 'Google Cloud', 'AWS', 'Docker', 'SQL', 'Keras'],
            image: '/reddit.svg',
            website: 'https://github.com/rpsmith77/RedDictio'
        },
        {
            title: 'Accessible Generative Art',
            subtitle: 'Randomly generated art that intentionally uses a color-blind-friendly color palette.\n',
            description: 'Art should be accessible. Approximately 5% of the world has some form of color blindness. Often times, when something is being designed, color blindness is not something taken into consideration. The designers aren\'t being malicious, people don\'t always think about issues that don\'t affect them. My program makes a conscious effort to be inclusive to people with color blindness by using a color-blind-friendly color palette. The program randomly generates art and saves it in a .svg file. The background color, number of shapes, and types of shapes are all randomized. By using .svg files, the art has the ability to have lossless scalability.',
            builtWith: ['Python', 'Hackathon', 'Award-Wining', 'Pycairo', 'SVG', 'NumPy'],
            image: '/art-gallery.svg',
            website: 'https://devpost.com/software/generative-art-z7swoc'
        },
    ];
    const otherProjects = [
        {
            title: 'Military-to-Civilian Terminology Translation Tool: Analysis of Job Data in Technology',
            subtitle: 'Using real job postings to help veterans make resumes to transition from military to civilian jobs.',
            description: 'Part of my senior project, my teammates and I developed a system which scrapes indeed for job postings in tech related fields. We then use NLP to analyze this data. This data is then made available to be used in resume creation. The user is able to see the sources of each data post and even go to the original job posting, if they want to apply to that job.',
            builtWith: ['Python', 'Flask', 'AWS', 'NLP', 'mySQL', 'Github', 'Docker', 'Jira', 'Beautiful Soup'],
            website: 'https://seniorproject-355719-hez34gdyna-uc.a.run.app/'
        },
        {
            title: 'Manufacturing Production Prototype',
            subtitle: 'Simulates the creation, production, and logging for a manufacturing plant.',
            description: 'This project is prototype for a manufacturing plant. It has a database which stores products that are producible and stores the record of the production, including the products serial number and date produced. This project was a semester long project for COP 3003, Object-Oriented Programming. The purpose of this project is to demonstrate a working knowledge of concepts like encapsulation, polymorphism, inheritance, and abstraction.',
            builtWith: ['Gradle', 'Java', "JavaFX", "SceneBuilder", "IntelliJ", "H2 DB", "OOP"],
            website: "https://github.com/rpsmith77/ProductionProject"
        },
        {
            title: 'Asteroids!',
            subtitle: 'Modified version of the classic arcade game Asteroids!',
            description: 'I have developed a modified version of the classic arcade game, Asteroids, using C++ and the libraries SFML and OpenGL. A simple physics engine based on vector math is also implemented to provide realistic motion for the spaceship as it navigates the asteroid field.',
            builtWith: ['C++', 'SFML', 'OpenGL', 'OOP', 'Xcode'],
            website: "https://github.com/rpsmith77/Asteroids"
        },
        {
            title: 'Traffic Light Simulator',
            subtitle: 'Prototype of Traffic Light with a crosswalk',
            description: 'This traffic light that I built, utilizes global interrupts, pointer arrays, and timers. These features allows the microcontroller to respond to external events in real-time, store and access data in a more organized and efficient way and keep track of time and trigger events at specific intervals. The traffic light was built using assembly language and hand wired by me.',
            builtWith: ['Assembly', 'Arduino', 'Atmel Studios'],
            website: 'https://github.com/rpsmith77/AssemblyTrafficLightSim'
        },
        {
            title: 'Pathfinding Visualizer',
            subtitle: 'KnightHacks 2020 Entry: Visualizes how the A* pathfinding algorithm works',
            description: 'The user can specify the starting and ending nodes, as well as place walls or obstacles on the grid. The program will then use a pathfinding algorithm, A* in this case, to find the shortest path from the starting node to the ending node. The program will also display a visual representation of the search process, highlighting the nodes that have been searched and the path that was ultimately found. This can be useful for understanding how different pathfinding algorithms work and how they might perform in different scenarios.',
            builtWith: ['Python', 'PyGame', 'A*', 'PyCharm'],
            website: 'https://github.com/rpsmith77/KnightHacks'
        },
    ]

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.projectHeroContainer}>
                    <h1>The <span className={'colorAccent'}>Cool Stuff</span> I make.</h1>
                    {/*<h1>I&nbsp;<TypingEffect/></h1>*/}
                </div>
                <div className={styles.featuredProjects}>
                    {featuredProjects.map((project: any) =>
                        <Project title={project.title}
                                 key={project.title}
                                 subtitle={project.subtitle}
                                 description={project.description}
                                 builtWith={project.builtWith}
                                 image={project.image ? project.image : null}
                                 website={project.website ? project.website : null}
                        />
                    )}
                </div>
                <div className={styles.moreProjectsContainer}>
                    <div className={styles.moreProjects}>

                        <h1 className={'colorAccent'}>More Projects</h1>
                        <div className={styles.otherProjects}>
                            {otherProjects.map((project: any) =>
                                <Project title={project.title}
                                         key={project.title}
                                         subtitle={project.subtitle}
                                         description={project.description}
                                         builtWith={project.builtWith}
                                         image={project.image ? project.image : null}
                                         website={project.website ? project.website : null}
                                />
                            )}
                        </div>
                        <h2>Even More Projects</h2>
                        <a href={'https://github.com/rpsmith77?tab=repositories'}
                           target={'_blank'} rel="noreferrer">
                            <Image className={styles.github} src={Github} alt={'GitHub Link'} width={100} height={100}/>
                        </a>

                    </div>
                </div>
            </main>
        </div>
    )
        ;
}
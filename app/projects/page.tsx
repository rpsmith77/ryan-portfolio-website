import styles from './page.module.css'
import Project from "./components/Project";
import Image from "next/image";
import Github from "../../public/github-outline.svg";
import {featuredProjects, otherProjects} from "@/app/data/portfolio";
import type {Metadata} from 'next';
import JsonLd from '@/app/JsonLd';
import {absoluteUrl} from '@/app/lib/site';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Explore Ryan Smith\'s software, embedded systems, data, and physical computing projects.',
    alternates: {canonical: '/projects'},
    openGraph: {
        title: 'Projects by Ryan Smith',
        description: 'Software, embedded systems, data, and physical computing projects.',
        url: '/projects',
    },
};

export default function Projects() {
    const projects = [...featuredProjects, ...otherProjects];

    return (
        <div className={styles.container}>
            <JsonLd data={{
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                name: 'Projects by Ryan Smith',
                url: absoluteUrl('/projects'),
                itemListElement: projects.map((project, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    item: {
                        '@type': 'CreativeWork',
                        name: project.title,
                        description: project.subtitle,
                        url: project.website,
                        author: {
                            '@type': 'Person',
                            name: 'Ryan Smith',
                            url: absoluteUrl('/'),
                        },
                    },
                })),
            }}/>
            <main id="main-content" tabIndex={-1} className={styles.main}>
                <div className={styles.projectHeroContainer}>
                    <h1>The <span className={'colorAccent'}>Cool Stuff</span> I make.</h1>
                </div>
                <div className={styles.featuredProjects}>
                    {featuredProjects.map((project) =>
                        <Project key={project.title} {...project}/>
                    )}
                </div>
                <div className={styles.moreProjectsContainer}>
                    <div className={styles.moreProjects}>

                        <h2 className={'colorAccent'}>More Projects</h2>
                        <div className={styles.otherProjects}>
                            {otherProjects.map((project) =>
                                <Project key={project.title} {...project}/>
                            )}
                        </div>
                        <h2>Even More Projects</h2>
                                <a href="https://github.com/rpsmith77?tab=repositories"
                                    target="_blank" rel="noopener noreferrer" aria-label="View more projects on Ryan Smith's GitHub">
                                     <Image className={styles.github} src={Github} alt="" aria-hidden="true" width={100} height={100}/>
                        </a>

                    </div>
                </div>
            </main>
        </div>
    )
        ;
}
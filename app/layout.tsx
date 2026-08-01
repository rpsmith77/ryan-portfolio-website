import './globals.css'
import NavBar from "./NavBar";
import type {Metadata} from "next";
import type {ReactNode} from "react";
import {AnalyticsWrapper} from './Analytics';
import {siteUrl} from '@/app/lib/site';

export const metadata: Metadata = {
    metadataBase: siteUrl,
    title: {
        default: "Ryan Smith",
        template: "%s | Ryan Smith",
    },
    description: "Ryan Smith's software engineering portfolio and projects.",
    authors: [{name: 'Ryan Smith'}],
    creator: 'Ryan Smith',
    keywords: ['Ryan Smith', 'software engineer', 'embedded systems', 'C++', 'Python', 'portfolio'],
    alternates: {
        canonical: '/',
    },
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        type: "website",
        url: '/',
        siteName: 'Ryan Smith Portfolio',
        title: "Ryan Smith",
        description: "Ryan Smith's software engineering portfolio and projects.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ryan Smith",
        description: "Ryan Smith's software engineering portfolio and projects.",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
        <body>
        <a className="skipLink" href="#main-content">Skip to main content</a>
        <NavBar/>
        {children}
        <AnalyticsWrapper/>
        </body>
        </html>
    )
}

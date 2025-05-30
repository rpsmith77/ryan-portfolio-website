import './globals.css'
import NavBar from "./NavBar";
import React from "react";
import {AnalyticsWrapper} from './Analytics';


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>

        <body>
        <NavBar/>
        {children}
        <AnalyticsWrapper/>
        </body>
        </html>
    )
}

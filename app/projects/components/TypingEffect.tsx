'use client'

// used this link https://www.youtube.com/watch?v=N4899I-tAW4 as a guide for making this

import styles from "../page.module.css"
import {useEffect, useState} from "react";

export default function TypingEffect(){
    const thingsIDoText = [
        'make software',
        'build websites',
        'create data visualizations',
        'develop tools that help overcome obstacles and solve problems',
        'make cool stuff'
    ];

    const [text, setText] = useState('');
    useEffect(()=>{
        const nextText = thingsIDoText[0].slice(0, text.length + 1);

        if (nextText === text) return

        const typeTime = setTimeout(()=>{
            setText(thingsIDoText[0].slice(0, text.length + 1));
        }, 2000);
        return () => clearTimeout(typeTime);
    },[text, thingsIDoText]);

    return(
        <span className={styles.typingText}>{text}</span>
    );
}
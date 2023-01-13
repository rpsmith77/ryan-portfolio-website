'use client'
import styles from './page.module.css'
import {useEffect, useState} from "react";

export default function HandWave(){
    const [index, setIndex] = useState(0);
    const hand = ['👋🏻','👋🏼','👋🏽','👋🏾','👋🏿'];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index => (index + 1) % hand.length);
        }, 1800);
        return () => clearInterval(interval);
    }, []);

    return(
        <span className={styles.wave}>{hand[index]}</span>
    );
}
'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useRef, useState} from "react";

export default function NavBar() {
    const [visible, setVisible] = useState(true);
    const previousScrollPosition = useRef(0);

    useEffect(() => {
        let animationFrame: number | null = null;

        const handleScroll = () => {
            if (animationFrame !== null) {
                return;
            }

            animationFrame = window.requestAnimationFrame(() => {
                const currentScrollPosition = window.scrollY;
                setVisible(currentScrollPosition < previousScrollPosition.current || currentScrollPosition < 16);
                previousScrollPosition.current = currentScrollPosition;
                animationFrame = null;
            });
        };

        previousScrollPosition.current = window.scrollY;
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationFrame !== null) {
                window.cancelAnimationFrame(animationFrame);
            }
        };

    }, []);

    const pathname = usePathname();
    return (
        <nav aria-label="Primary navigation" className={visible ? 'visible' : 'hidden'}>
            <Link href="/" className="navLink" aria-current={pathname === '/' ? 'page' : undefined}>
                Home
            </Link>
            <Link href="/projects" className="navLink" aria-current={pathname === '/projects' ? 'page' : undefined}>
                Projects
            </Link>
            <Link href="/about" className="navLink" aria-current={pathname === '/about' ? 'page' : undefined}>
                About
            </Link>
        </nav>
    );
}
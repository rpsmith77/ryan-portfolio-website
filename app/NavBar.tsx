'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

export default function NavBar() {
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    useEffect(()=>{
        setPrevScrollPosition(window.scrollY);
    },[])
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const visible = prevScrollPosition > window.scrollY

            setPrevScrollPosition(window.scrollY);
            setVisible(visible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [prevScrollPosition]);

    const pathname = usePathname();
    return (
        <nav className={visible ? 'visible' : 'hidden'}>
            <Link href={'/'}>
                <h3 className={pathname === '/' ? 'active' : ''}>Home</h3>
            </Link>
            <Link href={'/projects'}>
                <h3 className={pathname === '/projects' ? 'active' : ''}>Projects</h3>
            </Link>
            <Link href={'/about'}>
                <h3 className={pathname === '/about' ? 'active' : ''}>About</h3>
            </Link>
        </nav>
    );
}
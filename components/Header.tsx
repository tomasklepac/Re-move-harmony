'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const isHomepage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Hide navbar on homepage until scrolled
    const shouldHideNavbar = isHomepage && !isScrolled;

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${shouldHideNavbar ? 'hidden' : ''}`} role="banner">
            <div className="container nav-container">
                <Link href="/" className="logo" aria-label="Re-Move Harmony logo" onClick={closeMenu}>
                    <img
                        src="/assets/img/logo/logo_clear_modre.png"
                        alt="Re-Move Harmony Logo"
                        loading="eager"
                        decoding="async"
                    />
                </Link>
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} aria-label="Hlavní navigace">
                    <Link href="/" className={isActive('/') && pathname === '/' ? 'active' : ''} onClick={closeMenu}>
                        Domů
                    </Link>
                    <Link href="/sluzby" className={isActive('/sluzby') ? 'active' : ''} onClick={closeMenu}>
                        Služby
                    </Link>
                    <Link href="/tym" className={isActive('/tym') ? 'active' : ''} onClick={closeMenu}>
                        Tým
                    </Link>
                    <Link href="/fotogalerie" className={isActive('/fotogalerie') ? 'active' : ''} onClick={closeMenu}>
                        Fotogalerie
                    </Link>
                    <Link href="/rezervace" className={isActive('/rezervace') ? 'active' : ''} onClick={closeMenu}>
                        Rezervace
                    </Link>
                    <Link href="/kontakt" className={isActive('/kontakt') ? 'active' : ''} onClick={closeMenu}>
                        Kontakt
                    </Link>
                </nav>
                <button
                    className={`burger ${isMenuOpen ? 'active' : ''}`}
                    id="burger"
                    aria-label="Menu"
                    type="button"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}

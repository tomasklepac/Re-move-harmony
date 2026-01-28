import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="footer-minimal">
                <div className="container footer-grid">
                    <div className="footer-links">
                        <h4>Rychlé odkazy</h4>
                        <Link href="/">Domů</Link>
                        <Link href="/rezervace">Rezervace</Link>
                        <Link href="/sluzby">Služby</Link>
                        <Link href="/fotogalerie">Fotogalerie</Link>
                        <Link href="/kontakt">Kontakt</Link>
                    </div>
                    <div className="footer-meta">
                        <h4>Kontakt</h4>
                        <a href="tel:+420732912705">+420 732 912 705</a>
                        <a href="mailto:info@re-moveharmony.cz">info@re-moveharmony.cz</a>
                        <a href="https://www.instagram.com/re_move_harmony/" target="_blank" rel="noopener">
                            Instagram
                        </a>
                        <p className="legal-note">Zásady ochrany osobních údajů jsou k dispozici na vyžádání.</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Re-Move Harmony</p>
                    <p className="author-credit">Vytvořil Tomáš Klepáč</p>
                </div>
            </footer>
        </>
    );
}

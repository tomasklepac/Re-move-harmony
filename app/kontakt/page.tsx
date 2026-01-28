import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kontakt | Re-Move Harmony',
    description: 'Jsme v Plzni na Tylově. Ozvěte se a domluvme, co potřebujete.',
    openGraph: {
        title: 'Kontakt | Re-Move Harmony',
        description: 'Jsme v Plzni na Tylově. Ozvěte se a domluvme, co potřebujete.',
        url: 'https://re-moveharmony.cz/kontakt/',
        images: [{ url: 'https://re-moveharmony.cz/assets/img/gallery/interier_7.jpeg' }],
        locale: 'cs_CZ',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kontakt | Re-Move Harmony',
        description: 'Jsme v Plzni na Tylově. Ozvěte se a domluvme, co potřebujete.',
        images: ['/assets/img/gallery/interier_7.jpeg'],
    },
    alternates: {
        canonical: 'https://re-moveharmony.cz/kontakt/',
    },
};

export default function ContactPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Kontakt</h1>
                    <p>Jsme v Plzni na Tylově. Ozvěte se a domluvme, co potřebujete.</p>
                </div>
            </section>

            <section className="contact-section">
                <div className="container contact-grid">
                    <div className="contact-info">
                        <h2>Kde nás najdete</h2>
                        <p>
                            Studio je v klidné části Plzně, Tylova ulice, kousek od centra. Snadno se k nám dostanete autem i MHD.
                            Parkování je naproti vchodu nebo na parkovišti u autobusového nádraží. Z MHD se hodí trolejbus č. 12 nebo tramvaj č. 2.
                        </p>

                        <div className="contact-actions">
                            <a href="tel:+420732912705" className="contact-btn">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M6.62 10.79a15.72 15.72 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 12.35 12.35 0 003.87.62 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.44a1 1 0 011 1 12.35 12.35 0 00.62 3.87 1 1 0 01-.24 1.01z" />
                                </svg>
                                +420 732 912 705
                            </a>
                            <a href="mailto:info@re-moveharmony.cz" className="contact-btn">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zm0 2v.2l8 5 8-5V7H4zm16 10V9.8l-7.4 4.62a1 1 0 01-1.2 0L4 9.8V17h16z" />
                                </svg>
                                info@re-moveharmony.cz
                            </a>
                            <a href="https://www.instagram.com/re_move_harmony/" target="_blank" className="contact-btn" rel="noopener">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M7 4c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3V7c0-1.65-1.35-3-3-3H7zm0-2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.25-3.5a1 1 0 110 2 1 1 0 010-2z" />
                                </svg>
                                Instagram
                            </a>
                            <a href="https://www.reservio.cz/b/re-move-harmony" target="_blank" className="contact-btn" rel="noopener">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M7 3a1 1 0 011 1v1h8V4a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h1V4a1 1 0 011-1zm12 6H5v9h14zm-3 3v2h-4v-2z" />
                                </svg>
                                Rezervace přes Reservio
                            </a>
                        </div>

                        <div className="contact-extra">
                            <div className="address">
                                <div>
                                    <strong>Adresa</strong><br />
                                    Tylova 2814/68, Plzeň
                                </div>
                            </div>

                            <div className="hours">
                                <strong>Otevírací doba</strong><br />
                                Po-Pá: 8:00-22:00<br />
                                So-Ne: zavřeno
                            </div>
                        </div>
                    </div>

                    <div className="contact-map">
                        <iframe
                            title="Mapa Re-Move Harmony, Tylova 68, Plzeň"
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1532.9679532561343!2d13.358797058758!3d49.74591276528011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTylova%202814%2F68%2C%20Plze%C5%88!5e0!3m2!1scs!2scz!4v1761433037333!5m2!1scs!2scz"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

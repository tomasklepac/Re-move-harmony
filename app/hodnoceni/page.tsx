import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Hodnocení klientů | Re-Move Harmony',
    description: 'Ověřené recenze sbíráme na Reserviu po každé návštěvě.',
    openGraph: {
        title: 'Hodnocení klientů | Re-Move Harmony',
        description: 'Ověřené recenze sbíráme na Reserviu po každé návštěvě.',
        url: 'https://re-moveharmony.cz/hodnoceni/',
        images: [{ url: 'https://re-moveharmony.cz/assets/img/gallery/procedura_relaxacni-sportovni_masaz_1.jpeg' }],
        locale: 'cs_CZ',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hodnocení klientů | Re-Move Harmony',
        description: 'Ověřené recenze sbíráme na Reserviu po každé návštěvě.',
        images: ['/assets/img/gallery/procedura_relaxacni-sportovni_masaz_1.jpeg'],
    },
    alternates: {
        canonical: 'https://re-moveharmony.cz/hodnoceni/',
    },
};

export default function ReviewsPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Hodnocení klientů</h1>
                    <p>Recenze sbíráme na Reserviu po každé návštěvě. Podívejte se, co o nás klienti píší.</p>
                </div>
            </section>

            <section className="reviews-page">
                <div className="container reviews-copy">
                    <p>Upřednostňujeme ověřené recenze přímo v rezervačním systému. Díky tomu jsou hodnocení spojená s konkrétní návštěvou a od reálných klientů.</p>
                    <div className="cta-actions">
                        <a className="btn-primary" href="https://www.reservio.cz/b/re-move-harmony" target="_blank" rel="noopener">
                            Otevřít recenze na Reserviu
                        </a>
                        <Link className="btn-outline" href="/rezervace">
                            Zpět na rezervace
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Rezervace | Re-Move Harmony',
    description: 'Objednejte si termín pohodlně online přes Reservio.',
    openGraph: {
        title: 'Rezervace | Re-Move Harmony',
        description: 'Objednejte si termín pohodlně online přes Reservio.',
        url: 'https://re-moveharmony.cz/rezervace/',
        images: [{ url: 'https://re-moveharmony.cz/assets/img/gallery/interier_3.jpeg' }],
        locale: 'cs_CZ',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rezervace | Re-Move Harmony',
        description: 'Objednejte si termín pohodlně online přes Reservio.',
        images: ['/assets/img/gallery/interier_3.jpeg'],
    },
    alternates: {
        canonical: 'https://re-moveharmony.cz/rezervace/',
    },
};

export default function ReservationPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Rezervace</h1>
                    <p>Objednejte si termín pohodlně online přes Reservio.</p>
                </div>
            </section>

            <section className="reservation-info">
                <div className="container reservation-grid">
                    <div className="reservation-text">
                        <h2>Jak si rezervovat termín</h2>
                        <p>
                            Rezervace probíhají přes náš online systém Reservio. Vyberete službu, datum a čas, který vám nejlépe vyhovuje. Potvrzení obdržíte e-mailem.
                        </p>
                        <p>
                            Platbu můžete provést <strong>v hotovosti na místě</strong> nebo <strong>QR platbou</strong>. Pokud budete mít jakékoli dotazy, zavolejte nebo napište.
                        </p>
                        <a href="https://www.reservio.cz/b/re-move-harmony" target="_blank" className="btn-primary" rel="noopener">
                            Rezervovat termín
                        </a>
                    </div>

                    <div className="reservation-photo">
                        <img src="/assets/img/gallery/interier_3.jpeg" alt="Interiér Re-Move Harmony" loading="lazy" decoding="async" />
                    </div>
                </div>
            </section>
        </>
    );
}

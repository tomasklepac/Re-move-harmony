import type { Metadata } from 'next';
import Link from 'next/link';
import ServicesFilter from '@/components/ServicesFilter';

export const metadata: Metadata = {
    title: 'Naše služby | Re-Move Harmony',
    description: 'Masáže, relaxační a pohybové terapie pro úlevu, regeneraci i prevenci.',
    openGraph: {
        title: 'Naše služby | Re-Move Harmony',
        description: 'Masáže, relaxační a pohybové terapie pro úlevu, regeneraci i prevenci.',
        url: 'https://re-moveharmony.cz/sluzby/',
        images: [{ url: 'https://re-moveharmony.cz/assets/img/services/procedura_relaxacni-sportovni_masaz_7.jpeg' }],
        locale: 'cs_CZ',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Naše služby | Re-Move Harmony',
        description: 'Masáže, relaxační a pohybové terapie pro úlevu, regeneraci i prevenci.',
        images: ['/assets/img/services/procedura_relaxacni-sportovni_masaz_7.jpeg'],
    },
    alternates: {
        canonical: 'https://re-moveharmony.cz/sluzby/',
    },
};

export default function ServicesPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Naše služby</h1>
                    <p>Masáže, relaxační a pohybové terapie pro úlevu, regeneraci i prevenci.</p>
                </div>
            </section>

            <section className="services">
                <div className="container">
                    <ServicesFilter />

                    <div className="services-cta">
                        <div>
                            <p className="section-label">Termíny</p>
                            <h3>Rezervujte si svůj čas na ošetření</h3>
                            <p>Objednávky probíhají přes Reservio. Vyberte si službu, datum a čas, který vám vyhovuje, a potvrzení vám přijde e-mailem.</p>
                        </div>
                        <div className="cta-actions">
                            <a href="https://www.reservio.cz/b/re-move-harmony" className="btn-primary" target="_blank" rel="noopener">
                                Rezervovat přes Reservio
                            </a>
                            <Link href="/kontakt" className="btn-outline">
                                Potřebuji poradit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

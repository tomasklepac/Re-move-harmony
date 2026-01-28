import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
    title: 'Fotogalerie | Re-Move Harmony',
    description: 'Jedna útulná místnost pro všechny procedury. Podívejte se, jak to u nás vypadá a jak pracujeme.',
    openGraph: {
        title: 'Fotogalerie | Re-Move Harmony',
        description: 'Jedna útulná místnost pro všechny procedury. Podívejte se, jak to u nás vypadá a jak pracujeme.',
        url: 'https://re-moveharmony.cz/fotogalerie/',
        images: [{ url: 'https://re-moveharmony.cz/assets/img/gallery/interier_7.jpeg' }],
        locale: 'cs_CZ',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fotogalerie | Re-Move Harmony',
        description: 'Jedna útulná místnost pro všechny procedury. Podívejte se, jak to u nás vypadá a jak pracujeme.',
        images: ['/assets/img/gallery/interier_7.jpeg'],
    },
    alternates: {
        canonical: 'https://re-moveharmony.cz/fotogalerie/',
    },
};

export default function GalleryPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Fotogalerie</h1>
                    <p>Jedna útulná místnost pro všechny procedury. Podívejte se, jak to u nás vypadá a jak pracujeme.</p>
                </div>
            </section>

            <section className="gallery">
                <div className="container">
                    <Gallery />
                </div>
            </section>
        </>
    );
}

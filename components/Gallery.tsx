'use client';

import { useState, useEffect } from 'react';

interface GalleryItem {
    src: string;
    alt: string;
    caption: string;
}

const galleryItems: GalleryItem[] = [
    { src: '/assets/img/gallery/interier_7.jpeg', alt: 'Interiér', caption: 'Interiér' },
    { src: '/assets/img/gallery/karticky_2.jpeg', alt: 'Věrnostní karty', caption: 'Věrnostní karty' },
    { src: '/assets/img/gallery/interier_3.jpeg', alt: 'Interiér', caption: 'Interiér' },
    { src: '/assets/img/gallery/interier_6.jpeg', alt: 'Pomůcky', caption: 'Pomůcky' },
    { src: '/assets/img/gallery/gumy.jpeg', alt: 'Gumy na cvičení', caption: 'Gumy na cvičení' },
    { src: '/assets/img/gallery/maseri_vyska.jpeg', alt: 'Tým', caption: 'Tým' },
    { src: '/assets/img/gallery/procedura_relaxacni-sportovni_masaz_1.jpeg', alt: 'Relaxační masáž zad', caption: 'Relaxační masáž zad' },
    { src: '/assets/img/gallery/procedura_celkova_masaz_1.jpeg', alt: 'Celková masáž', caption: 'Celková masáž' },
    { src: '/assets/img/gallery/procedura_masaz_nohou_1.jpeg', alt: 'Masáž nohou', caption: 'Masáž nohou' },
    { src: '/assets/img/gallery/procdura_masaz_rukou_1.jpeg', alt: 'Masáž rukou', caption: 'Masáž rukou' },
    { src: '/assets/img/gallery/procedura_masaz_obliceje_1.jpeg', alt: 'Masáž obličeje a dekoltu', caption: 'Masáž obličeje a dekoltu' },
    { src: '/assets/img/gallery/procedura_bankovani_1.jpeg', alt: 'Baňkování', caption: 'Baňkování' },
    { src: '/assets/img/gallery/procedura_tejpovani_1.jpeg', alt: 'Tejpování', caption: 'Tejpování' },
    { src: '/assets/img/gallery/procedura_pohybova_terapie.jpeg', alt: 'Cvičení s klientem', caption: 'Cvičení s klientem' },
    { src: '/assets/img/gallery/oleje_1.jpeg', alt: 'Masážní oleje', caption: 'Masážní oleje' },
    { src: '/assets/img/gallery/vizitky_4.jpeg', alt: 'Vizitky', caption: 'Vizitky' },
    { src: '/assets/img/gallery/procedura_tejpovani_2.jpeg', alt: 'Tejpování', caption: 'Tejpování' },
];

export default function Gallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const showNext = () => {
        setCurrentIndex((currentIndex + 1) % galleryItems.length);
    };

    const showPrev = () => {
        setCurrentIndex((currentIndex - 1 + galleryItems.length) % galleryItems.length);
    };

    useEffect(() => {
        if (lightboxOpen) {
            document.body.classList.add('lightbox-open');
        } else {
            document.body.classList.remove('lightbox-open');
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, currentIndex]);

    return (
        <>
            <div className="gallery-grid">
                {galleryItems.map((item, index) => (
                    <figure key={index} className="gallery-card" onClick={() => openLightbox(index)}>
                        <img loading="lazy" decoding="async" src={item.src} alt={item.alt} />
                        <figcaption>{item.caption}</figcaption>
                    </figure>
                ))}
            </div>

            {lightboxOpen && (
                <div className={`lightbox ${lightboxOpen ? 'active' : ''}`} onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            className="lightbox-img"
                            src={galleryItems[currentIndex].src}
                            alt={galleryItems[currentIndex].alt}
                        />
                        <div className="lightbox-caption">{galleryItems[currentIndex].caption}</div>
                        <div className="lightbox-nav">
                            <button className="lightbox-prev" aria-label="Predchozi" onClick={showPrev}>
                                &lt;
                            </button>
                            <button className="lightbox-next" aria-label="Dalsi" onClick={showNext}>
                                &gt;
                            </button>
                        </div>
                        <button className="lightbox-close" aria-label="Zavrit" onClick={closeLightbox}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

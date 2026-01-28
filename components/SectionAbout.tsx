'use client';

import { useEffect, useRef } from 'react';

interface SectionAboutProps {
    direction: 'left' | 'right';
    label: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
}

export default function SectionAbout({
    direction,
    label,
    title,
    description,
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
}: SectionAboutProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={`section-about alt-${direction}`}>
            <div className="text">
                <p className="section-label">{label}</p>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="image">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    loading="lazy"
                />
            </div>
        </section>
    );
}

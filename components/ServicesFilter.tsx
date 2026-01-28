'use client';

import { useState } from 'react';

type ServiceCategory = 'all' | 'masaze' | 'rehab' | 'tejpy';

interface Service {
    category: ServiceCategory;
    image: string;
    title: string;
    description: string;
    price: string;
}

const services: Service[] = [
    {
        category: 'masaze',
        image: '/assets/img/services/procedura_relaxacni-sportovni_masaz_5.jpeg',
        title: 'Relaxační masáž (30 min)',
        description: 'Rychlá, ale intenzivní masáž zaměřená na uvolnění zad a šíje. Jemné techniky odbourají stres a vrátí energii během dne.',
        price: '400 Kč',
    },
    {
        category: 'masaze',
        image: '/assets/img/services/procedura_relaxacni-sportovni_masaz_7.jpeg',
        title: 'Relaxační masáž (60 min)',
        description: 'Cílená masáž pro úlevu od napětí a únavy. Uvolňuje ztuhlé svaly zad, šíje a beder, podporuje regeneraci a navozuje klid.',
        price: '700 Kč',
    },
    {
        category: 'masaze',
        image: '/assets/img/services/procedura_sportovni_masaz_1.jpeg',
        title: 'Sportovní masáž (30 min)',
        description: 'Intenzivní masáž pro rychlé uvolnění svalů před nebo po výkonu. Zlepšuje prokrvení, regeneraci a pomáhá snížit riziko přetížení.',
        price: '400 Kč',
    },
    {
        category: 'masaze',
        image: '/assets/img/services/procedura_celkova_masaz_5.jpeg',
        title: 'Celková masáž (60 min)',
        description: 'Komplexní masáž pro uvolnění celého těla. Uvolňuje svalové napětí, zlepšuje prokrvení a pomáhá odbourat stres i únavu.',
        price: '700 Kč',
    },
    {
        category: 'masaze',
        image: '/assets/img/services/procedura_masaz_nohou_2.jpeg',
        title: 'Masáž nohou (30 min)',
        description: 'Cílená masáž pro uvolnění chodidel, lýtek a kotníků. Zlepšuje krevní oběh, ulevuje unaveným nohám a pomáhá při patní ostruze či plochých nohách.',
        price: '300 Kč',
    },
    {
        category: 'masaze',
        image: '/assets/img/services/procdura_masaz_rukou_3.jpeg',
        title: 'Masáž rukou (30 min)',
        description: 'Uvolnění svalů předloktí, zápěstí a dlaní. Pomáhá při bolesti, přetížení i syndromu karpálního tunelu a zlepšuje pohyblivost.',
        price: '300 Kč',
    },
    {
        category: 'masaze',
        image: '/assets/img/services/procedura_masaz_obliceje_4.jpeg',
        title: 'Masáž obličeje (30 min)',
        description: 'Jemná relaxační masáž obličeje, krku a dekoltu. Zlepšuje prokrvení, rozjasňuje pleť a zmírňuje napětí.',
        price: '300 Kč',
    },
    {
        category: 'masaze',
        image: '/assets/img/services/procedura_lavove_kameny_1.jpeg',
        title: 'Masáž lávovými kameny (60 min)',
        description: 'Hluboce relaxační terapie s nahřátými kameny. Teplo proniká do svalů, uvolňuje napětí, zlepšuje prokrvení a přináší pocit harmonie.',
        price: '800 Kč',
    },
    {
        category: 'masaze',
        image: '/assets/img/services/procedura_bankovani_2.jpeg',
        title: 'Baňkování (30 min)',
        description: 'Tradiční technika s využitím podtlaku pro hluboké uvolnění svalů. Zlepšuje krevní i lymfatický oběh a pomáhá při bolestech zad.',
        price: '300 Kč',
    },
    {
        category: 'rehab',
        image: '/assets/img/services/procedura_pohybova_terapie.jpeg',
        title: 'Pohybová terapie (30 min)',
        description: 'Obnovení správných pohybových vzorců a odstranění bolesti. Kombinujeme manuální techniky s individuálním cvičením a dechovou prací.',
        price: '500 Kč',
    },
    {
        category: 'rehab',
        image: '/assets/img/services/procedura_terapie_pro_kazdodenni_cinnosti_2.jpeg',
        title: 'Terapie pro každodenní činnosti (25 min)',
        description: 'Podpora soběstačnosti po úrazu či nemoci. Učíme efektivní pohyb, práci s pomůckami a jistotu při každodenních aktivitách.',
        price: '350 Kč',
    },
    {
        category: 'tejpy',
        image: '/assets/img/services/procedura_tejpovani_1.jpeg',
        title: 'Kinezio tejpování',
        description: 'Stabilizace kloubů a svalů bez omezení pohybu. Pomáhá zmírnit bolest, podpořit regeneraci a zlepšit krevní i lymfatický oběh.',
        price: '250 Kč',
    },
    {
        category: 'tejpy',
        image: '/assets/img/services/procedura_pevne_tejpovani_1_kopie.jpeg',
        title: 'Pevné tejpování',
        description: 'Silná stabilizace kloubů a svalů po úrazech nebo při přetížení. Poskytuje pevnou oporu a chrání před dalším zraněním.',
        price: '250 Kč',
    },
];

export default function ServicesFilter() {
    const [activeFilter, setActiveFilter] = useState<ServiceCategory>('all');

    const filteredServices = services.filter(
        (service) => activeFilter === 'all' || service.category === activeFilter
    );

    return (
        <>
            <div className="services-filter">
                <button
                    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('all')}
                >
                    Vše
                </button>
                <button
                    className={`filter-btn ${activeFilter === 'masaze' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('masaze')}
                >
                    Masáže
                </button>
                <button
                    className={`filter-btn ${activeFilter === 'rehab' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('rehab')}
                >
                    Rehabilitace
                </button>
                <button
                    className={`filter-btn ${activeFilter === 'tejpy' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('tejpy')}
                >
                    Tejpování
                </button>
            </div>

            <div className="services-grid">
                {filteredServices.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.image} alt={service.title} loading="lazy" decoding="async" />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <span className="price">{service.price}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

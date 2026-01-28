import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tým | Re-Move Harmony',
    description: 'Poznejte lidi, kteří se postarají o vaši péči v Re-Move Harmony.',
    openGraph: {
        title: 'Tým | Re-Move Harmony',
        description: 'Poznejte lidi, kteří se postarají o vaši péči v Re-Move Harmony.',
        url: 'https://re-moveharmony.cz/tym/',
        images: [{ url: 'https://re-moveharmony.cz/assets/img/gallery/maseri_vyska.jpeg' }],
        locale: 'cs_CZ',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tým | Re-Move Harmony',
        description: 'Poznejte lidi, kteří se postarají o vaši péči v Re-Move Harmony.',
        images: ['/assets/img/gallery/maseri_vyska.jpeg'],
    },
    alternates: {
        canonical: 'https://re-moveharmony.cz/tym/',
    },
};

export default function TeamPage() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>Náš tým</h1>
                    <p>Potkejte se s lidmi, kteří se postarají o vaši péči.</p>
                </div>
            </section>

            <section className="team-detail">
                <div className="container">
                    <div className="team-member-detail" id="max">
                        <img
                            src="/assets/img/gallery/Maxmilian_Hostalek_opt.jpg"
                            alt="Portrét maséra Maxmiliána Hošťálka"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="info">
                            <h2>Maxmilián Hošťálek</h2>
                            <p className="tagline">Student fyzioterapie · sportovní regenerace a prevence</p>
                            <p>Jmenuji se Maxmilián Hošťálek a jsem student fyzioterapie s vášní pro aktivní život a komplexní regeneraci. Ve svých 22 letech se neustále vzdělávám v oblasti lidského pohybu a kvalitní masérské péče, abych vám mohl nabídnout to nejlepší.</p>
                            <p><strong>Profesionální praxe z FC Viktoria Plzeň:</strong> Své teoretické znalosti uplatňuji v praxi jako fyzioterapeut u mládeže FC Viktoria Plzeň. Tato zkušenost mi dává hluboký vhled do problematiky svalové zátěže, rychlé regenerace a prevence úrazů, což promítám do každé masáže.</p>
                            <p><strong>Odborný a spolehlivý přístup:</strong> Kombinuji klasické masérské techniky s poznatky z fyzioterapie. Nezaměřuji se jen na relaxaci, ale i na identifikaci příčin vašeho napětí a ztuhlosti.</p>
                            <p><strong>Energie a pozitivita:</strong> K masážím přistupuji vždy s úsměvem, pozitivním naladěním a pracovitostí. Mým cílem je, abyste po odchodu z masérny cítili fyzickou úlevu i psychické povzbuzení.</p>
                            <p>Jsem spolehlivý a pracovitý. Ke každému klientovi přistupuji individuálně a s plným nasazením. Těším se, až vám pomohu najít vaši pohybovou harmonii a zmírnit každodenní zátěž. Přijďte se přesvědčit, jakou sílu má dotek podložený hlubokými znalostmi pohybu!</p>
                        </div>
                    </div>

                    <div className="team-member-detail" id="barbora">
                        <img
                            src="/assets/img/gallery/Barbora_Kuttanova_opt.jpg"
                            alt="Portrét masérky Barbory Kuttanové"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="info">
                            <h2>Barbora Kuttanová</h2>
                            <p className="tagline">Masérka a studentka ergoterapie · empatický přístup</p>
                            <p>Jsem Barbora Kuttanová, vystudovaná masérka a v současnosti studentka ergoterapie. Ve svých 21 letech propojuji pevné masérské základy s komplexním pohledem na lidské tělo a jeho každodenní funkce.</p>
                            <p><strong>Praxe z lázní:</strong> Své masérské dovednosti jsem zdokonalila v praxi, mimo jiné jako masérka v lázních Purkmistr. Díky tomu mám bohaté zkušenosti s širokým spektrem klientů a potřeb - od hloubkové regenerace po čistou relaxaci.</p>
                            <p><strong>Ergoterapie v praxi:</strong> Studium ergoterapie mi umožňuje nahlížet na vaše tělo s ohledem na každodenní činnosti. Nejenže uvolním napětí, ale pomohu vám pochopit, jak zlepšit držení těla a návyky, které vedou k chronickým bolestem.</p>
                            <p><strong>Empatie a energie:</strong> Jsem usměvavá, skvěle naladěná, pracovitá a energická sportovkyně. K masáži přistupuji empaticky a s plným nasazením. Každou terapii vnímám jako chvíli, kdy mohu pomocí zkušených rukou obnovit vaši energii a pohodu.</p>
                            <p>Jsem připravena vám poskytnout nejen úlevu, ale i pocit, že je o vás komplexně postaráno. Těším se na vás a na to, až společně najdeme cestu k vaší tělesné harmonii!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

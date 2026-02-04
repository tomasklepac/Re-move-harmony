import type { Metadata } from 'next';
import Link from 'next/link';
import SectionAbout from '@/components/SectionAbout';
import TrustBadge from '@/components/TrustBadge';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Re-Move Harmony | Masáže, relaxační a pohybové terapie Plzeň',
  description: 'Masáže, relaxační a pohybové terapie. Pomůžeme vám vrátit tělu i mysli lehkost a klid.',
  openGraph: {
    title: 'Re-Move Harmony | Masáže, relaxační a pohybové terapie Plzeň',
    description: 'Masáže, relaxační a pohybové terapie. Pomůžeme vám vrátit tělu i mysli lehkost a klid.',
    url: 'https://re-moveharmony.cz/',
    images: [{ url: 'https://re-moveharmony.cz/assets/img/hero/interier_2.jpeg' }],
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Re-Move Harmony | Masáže, relaxační a pohybové terapie Plzeň',
    description: 'Masáže, relaxační a pohybové terapie. Pomůžeme vám vrátit tělu i mysli lehkost a klid.',
    images: ['/assets/img/hero/interier_2.jpeg'],
  },
  alternates: {
    canonical: 'https://re-moveharmony.cz/',
  },
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <img
          className="hero-media"
          src="/assets/img/hero/interier_1.jpeg"
          alt=""
          width={1600}
          height={1066}
          loading="eager"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="eyebrow">Plzeň · Tylova 68</p>
          <h1>Masáže a terapie Plzeň<br /><span className="text-white/90 text-4xl block mt-2">Re-Move Harmony</span></h1>
          <p>Masáže, relaxační a pohybové terapie. Pomůžeme vám vrátit tělu i mysli lehkost a klid.</p>
          <div className="hero-actions">
            <a href="https://www.reservio.cz/b/re-move-harmony" className="btn-primary" target="_blank" rel="noopener">
              Rezervovat termín
            </a>
            <Link href="/kontakt" className="btn-outline">
              Kontakt
            </Link>
          </div>
          <div className="hero-badges">
            <span>Masáže &amp; terapie</span>
            <span>Individuální plán</span>
            <span>Respekt k vašemu tempu</span>
          </div>
          <TrustBadge />
        </div>
      </section>

      <section className="intro">
        <div className="container intro-grid">
          <h2 className="sr-only">Co řešíme</h2>
          <div className="intro-card">
            <h3>Co řešíme</h3>
            <p>Bolesti zad a krční páteře, přetížené svaly, regenerace po sportu, stres i dlouhodobé napětí.</p>
          </div>
          <div className="intro-card">
            <h3>Jak pracujeme</h3>
            <p>Kombinujeme masáže, tejpování a pohybovou terapii. Každý plán stavíme na vašich cílech.</p>
          </div>
          <div className="intro-card">
            <h3>Pro koho</h3>
            <p>Sportovci, sedavé profese, rodiče i lidé po úrazu. Přijďte kdykoliv potřebujete zvolnit a zregenerovat.</p>
          </div>
        </div>
      </section>

      <Testimonials />

      <SectionAbout
        direction="left"
        label="O studiu"
        title="Vracíme tělu i mysli rovnováhu"
        description="V Re-Move Harmony propojujeme masáže, relaxační a pohybové terapie. Ulevíme od bolesti, naučíme vás, jak se hýbat bez obav, a nastavíme postup, který dává smysl vašemu životnímu rytmu."
        imageSrc="/assets/img/logo/logo_clear.png"
        imageAlt="Re-Move Harmony logo"
        imageWidth={1287}
        imageHeight={1287}
      />

      <SectionAbout
        direction="right"
        label="Masáže & tejpování"
        title="Regenerace, uvolnění a podpora hojení"
        description="Relaxační i sportovní masáže, baňkování a tejpy pro rychlejší regeneraci a stabilitu. Vše děláme citlivě, aby se tělo uvolnilo a mohlo se bezpečně vrátit k pohybu."
        imageSrc="/assets/img/services/procedura_bankovani_6_opt.jpg"
        imageAlt="Masážní místnost"
        imageWidth={1200}
        imageHeight={800}
      />

      <SectionAbout
        direction="left"
        label="Pohybová terapie"
        title="Praktické návody, které zvládnete doma"
        description="Ukážeme vám jednoduché cviky a návyky, které zmírní bolest a posílí stabilitu. Soustředíme se na funkční pohyb, dech a postupné kroky, které můžete zapojit do běžného dne."
        imageSrc="/assets/img/services/procedura_pohybova_terapie_opt.jpg"
        imageAlt="Terapie s klientem"
        imageWidth={1200}
        imageHeight={800}
      />

      <section className="team-preview">
        <div className="container">
          <h2 className="team-title">Náš tým</h2>
          <div className="team-grid">
            <div className="team-member">
              <Link href="/tym#max">
                <img
                  src="/assets/img/gallery/Maxmilian_Hostalek_opt.jpg"
                  alt="Portrét maséra Maxmiliána Hošťálka"
                  width={1200}
                  height={1600}
                  loading="lazy"
                />
                <h3>Maxmilián Hošťálek</h3>
              </Link>
            </div>
            <div className="team-member">
              <Link href="/tym#barbora">
                <img
                  src="/assets/img/gallery/Barbora_Kuttanova_opt.jpg"
                  alt="Portrét masérky Barbory Kuttanové"
                  width={1200}
                  height={1600}
                  loading="lazy"
                />
                <h3>Barbora Kuttanová</h3>
              </Link>
            </div>
          </div>

          <div className="cta-inline">
            <Link href="/tym" className="btn-primary">
              Zobrazit celý tým
            </Link>
            <a href="https://www.reservio.cz/b/re-move-harmony" className="btn-outline" target="_blank" rel="noopener">
              Rezervovat přes Reservio
            </a>
          </div>
        </div>
      </section>

      <section className="cta-band secondary">
        <div className="container cta-band-content">
          <div>
            <p className="section-label">Hodnocení</p>
            <h3>Vaše zpětná vazba nás posouvá dál</h3>
            <p>Recenze sbíráme na Google i Reserviu. Budeme moc rádi, když nám po návštěvě zanecháte hodnocení - každá vaše zkušenost nám pomáhá zlepšovat naše služby.</p>
          </div>
          <div className="cta-actions">
            <a className="btn-primary" href="https://www.google.com/search?q=Re-Move+Harmony+Plzeň+recenze" target="_blank" rel="noopener">
              Napsat recenzi na Google
            </a>
            <a className="btn-outline" href="https://www.reservio.cz/b/re-move-harmony" target="_blank" rel="noopener">
              Recenze na Reservio
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

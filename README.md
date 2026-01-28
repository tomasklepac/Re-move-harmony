# Re-Move Harmony

Modern, static website for a massage and therapy studio in Plzeň, built with **Next.js 16** and **TypeScript**.

The website presents services, team members, photo gallery, and allows clients to book appointments via Reservio. It is designed to be fully static for easy deployment on varied hosting platforms (currently deployed on Hostinger).

![Re-Move Harmony Preview](public/assets/img/hero/interier_1.jpeg)

## 🚀 Key Features

*   **Modern Tech Stack**: Built on Next.js 16 (App Router) & React 19.
*   **Static Export**: Configured for `output: 'export'` to generate pure HTML/CSS/JS for any static hosting.
*   **Fully Responsive**: Custom CSS ensuring perfect display on mobile, tablet, and desktop.
*   **SEO Optimized**: Uses Next.js Metadata API for dynamic titles, descriptions, and Open Graph tags.
*   **Interactive Components**:
    *   **Custom Lightbox Gallery**: Keyboard navigation and touch support.
    *   **Services Filter**: Instant client-side filtering of procedures.
    *   **Smart Navbar**: Hides on homepage until scroll for immersive hero experience.
*   **Performance**: Optimized images and code splitting.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 16](https://nextjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: Custom CSS (Modules & Global styles), no heavy UI frameworks.
*   **Icons**: SVG Icons
*   **Deployment**: Static HTML Export

## 📂 Project Structure

```bash
re-move-harmony/
├── app/
│   ├── layout.tsx          # Root layout with metadata and fonts
│   ├── page.tsx            # Homepage
│   ├── sluzby/             # Services page
│   ├── tym/                # Team page
│   ├── fotogalerie/        # Gallery page
│   ├── kontakt/            # Contact page
│   ├── rezervace/          # Reservation page
│   └── styles/             # Global and component styles
├── components/
│   ├── Header.tsx          # Navigation bar
│   ├── Footer.tsx          # Site footer
│   ├── Gallery.tsx         # Interactive photo gallery
│   ├── ServicesFilter.tsx  # Filtering logic for services
│   └── TrustBadge.tsx      # Social proof component
├── public/
│   └── assets/             # Static images and fonts
└── next.config.ts          # Static export configuration
```

## 🏁 Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Building for Production

To create the static export for deployment:

```bash
npm run build
```

This command will generate an **`out/`** directory containing the static HTML/CSS/JS files.

## 🚀 Deployment (Hostinger)

This project is configured for **Static Site Generation (SSG)**.

1.  Run `npm run build`.
2.  Locate the generated `out/` folder.
3.  Upload the **contents** of the `out/` folder to the `public_html` directory of your hosting provider via FTP or File Manager.

_Note: No Node.js server is required for hosting._

## 📄 License

Private project for Re-Move Harmony.

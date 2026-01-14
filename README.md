# SSA Hunter Valley - Tennis Academy Landing Page

A modern, fully responsive landing page for **Signature Slam Academy (SSA) Hunter Valley** - Australia's premier tennis academy.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## Live Demo

**[View Live Site](https://landing-page-five-gilt-38.vercel.app/)**

## Features

- **Mobile-First Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI** - SaaS-style floating pill navbar with blur effect
- **Performance Optimized** - Next.js Image optimization, lazy loading
- **SEO Ready** - Meta tags, Open Graph, Twitter cards, Schema.org structured data
- **API Integration Ready** - Contact form API route with validation patterns

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React Framework (App Router) |
| TypeScript | Type Safety |
| Tailwind CSS | Utility-first Styling |
| CSS (vw units) | Mobile-first Responsive Design |
| Axios | HTTP Client |

## Sections

| Section | Description |
|---------|-------------|
| Hero | Full-screen banner with weather widget |
| About Us | Tabs, stats (20 courts, 12 coaches, 17 years, 10 clubs) |
| Quote | Chairman testimonial |
| Key Features | Two-column feature list |
| Gallery | Glimpse of Excellence |
| Programs | Academy, Camps, Performance cards |
| Marquee | ADOPT • NURTURE • DELIVER animated banner |
| Location | SSA Connectivity with nearby landmarks |
| Professionals | Team members showcase |
| Facilities | Tennis, Accommodation, Fitness, Recovery |
| Coaches & Events | Split cards section |
| Footer | Navigation, contact info, social links |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/s6287/landing-page.git

# Navigate to project
cd landing-page

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/contact/      # Contact form API endpoint
│   ├── globals.css       # All styles (mobile-first, vw units)
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main page
├── components/
│   ├── Header.tsx        # Floating pill navbar
│   ├── Hero.tsx          # Hero section with overlay
│   ├── About.tsx         # About with tabs & stats
│   ├── Quote.tsx         # Testimonial section
│   ├── Features.tsx      # Key features grid
│   ├── Gallery.tsx       # Image gallery
│   ├── Programs.tsx      # Program cards
│   ├── Marquee.tsx       # Scrolling text banner
│   ├── Location.tsx      # Location & connectivity
│   ├── Professionals.tsx # Team section
│   ├── Facilities.tsx    # Facilities grid
│   ├── CoachesEvents.tsx # Split cards
│   └── Footer.tsx        # Footer with links
└── lib/
    └── api.ts            # API utilities (Axios, fetch patterns)
```

## API Integration

The project includes API integration patterns for:

- **Contact Form** - `/api/contact` endpoint with validation
- **Salesforce (SFDC)** - Lead creation patterns
- **Weather API** - Integration example

## Deployment

Deployed on **Vercel** - [https://landing-page-five-gilt-38.vercel.app/](https://landing-page-five-gilt-38.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/s6287/landing-page)

## License

MIT License

---

**Signature Slam Academy** - ADOPT • NURTURE • DELIVER

# Ignara AI — Official Website

Production-ready website for [ignara.ai](https://ignara.ai), built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Features, Mission, Vision teaser, Founder, CTA |
| `/about` | Company story, values, founder profile |
| `/vision` | Vision statement, guiding principles, roadmap |
| `/research` | Active and exploratory research areas |
| `/contact` | Contact form with interest categorization |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `404` | Custom not-found page |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment (Vercel)

This project is pre-configured for Vercel deployment.

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual deploy

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — no configuration needed
4. Click **Deploy**

### Environment Variables

No environment variables are required for the base deployment.

If you add backend integrations (e.g., contact form email sending), add:

```
RESEND_API_KEY=your_key_here
CONTACT_EMAIL=contact@ignara.ai
```

## Project Structure

```
ignara-ai/
├── app/
│   ├── layout.tsx          # Root layout with Navbar + Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + CSS variables
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.txt          # robots.txt
│   ├── not-found.tsx       # 404 page
│   ├── about/page.tsx
│   ├── vision/page.tsx
│   ├── research/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── Navbar.tsx          # Sticky responsive navigation
│   ├── Footer.tsx          # Footer with links + social
│   ├── Button.tsx          # Reusable button component
│   ├── Card.tsx            # Reusable animated card
│   └── AnimatedBackground.tsx  # Canvas particle animation
└── public/
    └── (static assets)
```

## Design System

| Token | Value |
|-------|-------|
| Background | `#0B1220` |
| Primary | `#2563EB` |
| Accent | `#06B6D4` |
| Glass | `rgba(255,255,255,0.04)` |
| Border | `rgba(255,255,255,0.08)` |

## SEO

- Full OpenGraph and Twitter Card metadata
- Structured sitemap at `/sitemap.xml`
- robots.txt at `/robots.txt`
- Semantic HTML throughout
- Accessible keyboard navigation

## Contact

- General: contact@ignara.ai
- Founder: jagan@ignara.ai
- Website: https://ignara.ai

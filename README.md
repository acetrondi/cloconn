# Cloconn Careers Website

A professional career counselling and overseas education consultancy website built with Next.js 15, Tailwind CSS v4, and GSAP animations.

## Overview

**Website Name:** Cloconn Careers  
**Founder:** Mohini Majithia  
**Purpose:** Career counselling and overseas education consultancy for students and parents

## Tech Stack

- **Framework:** Next.js 15 (App Router, Server Components)
- **Styling:** Tailwind CSS v4 with custom brand utilities
- **UI Components:** Minimal ShadCN UI (button, toast)
- **Animations:** GSAP with ScrollTrigger
- **Typography:** Raleway (headings) + Inter (body)
- **Language:** TypeScript

## Features

### Pages

- **Home:** Hero, About, Features, Services, Testimonials, Social Links, Contact Form
- **Blogs:** Dynamic blog listing with category filters
- **Certificates:** Achievement gallery with modal lightbox
- **About:** Detailed founder story and company values

### Key Highlights

- ✅ Mobile-first responsive design
- ✅ Accessibility-compliant (WCAG)
- ✅ SEO-optimized with proper metadata
- ✅ GSAP scroll animations
- ✅ Contact form with validation
- ✅ Custom brand color system
- ✅ Professional, handcrafted aesthetic

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── about/              # About page
│   ├── blogs/              # Blog listing and individual posts
│   ├── certificates/       # Certificate gallery
│   ├── api/contact/        # Contact form API route
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & brand utilities
├── components/
│   ├── ui/                 # ShadCN UI components
│   ├── Hero.tsx
│   ├── AboutSummary.tsx
│   ├── WhyChooseUs.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── BentoLinks.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── CertificateModal.tsx
├── data/
│   ├── blogs.json          # Blog post data
│   └── testimonials.json   # Testimonial data
└── lib/
    ├── utils.ts            # Utility functions
    └── animations.ts       # GSAP animation hooks

public/
├── Hero/                   # Hero section images
├── certificates/           # Certificate images
├── blogs/                  # Blog thumbnails (placeholder)
└── avatars/                # Testimonial avatars (placeholder)
```

## Brand Design System

### Color Palette

| Role      | Color          | Hex       | Usage                   |
| --------- | -------------- | --------- | ----------------------- |
| Primary   | Golden Yellow  | `#D4AF37` | CTAs, highlights, icons |
| Secondary | Deep Navy Blue | `#1E2D50` | Headings, hero text     |
| Dark      | Charcoal Gray  | `#5A5A5A` | Body text               |
| Light     | Soft Off-White | `#F8F9FA` | Section backgrounds     |
| Beige     | Warm Beige     | `#E5D6A0` | Accents                 |
| Pale Gold | Pale Gold      | `#F2E4B6` | Hover backgrounds       |

### Custom Utility Classes

```css
.brand-primary          /* Golden yellow text */
/* Golden yellow text */
.bg-brand-primary       /* Golden yellow background */
.brand-secondary        /* Navy blue text */
.bg-brand-secondary     /* Navy blue background */
.text-heading           /* Navy headings */
.text-body              /* Gray body text */
.shadow-soft            /* Subtle shadow */
.shadow-soft-hover; /* Hover shadow */
```

## Contact Information

- **Email:** writetomohini@cloconncareers.com
- **Phone:** +91 93240 77931
- **Address:** 1, Sambhav Darshan, Plot No. 42, Sector 28, Vashi, Navi Mumbai – 400703

## Development Notes

### Forms

- Contact form includes client-side validation
- API route at `/api/contact` (currently mock, ready for email integration)
- Toast notifications for user feedback

### Animations

- Hero entrance animations
- Scroll-triggered fade-in effects
- Staggered element animations
- Custom GSAP hooks in `lib/animations.ts`

### Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Focus-visible states
- Keyboard navigation support
- Dialog/modal accessibility

## Future Enhancements

- [ ] Integrate with a CMS for blog content (Contentful, Sanity, Strapi)
- [ ] Add email service for contact form (SendGrid, Resend, Nodemailer)
- [ ] Implement blog search and filtering
- [ ] Add more interactive animations
- [ ] Create an admin dashboard
- [ ] Add analytics (Google Analytics, Plausible)

## License

© 2025 Cloconn Careers. All rights reserved.

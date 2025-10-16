# Quick Start Guide - Cloconn Careers Website

## 🚀 Get Up and Running in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open Browser

Visit **http://localhost:3000**

That's it! 🎉

---

## 📄 What You'll See

### Home Page (/)

- Hero section with call-to-action
- About summary
- Why Choose Us (features)
- Services grid
- Testimonials
- Social media links
- Contact form
- Footer

### Other Pages

- **/about** - Full founder story and company values
- **/blogs** - Blog listing (6 posts)
- **/blogs/[slug]** - Individual blog posts
- **/certificates** - Certificate gallery (7 certificates)

---

## 🎨 Customization Quick Tips

### Change Colors

Edit `src/app/globals.css`:

```css
:root {
  --color-primary: #d4af37; /* Your color */
  --color-secondary: #1e2d50; /* Your color */
}
```

### Add Your Logo to Navigation

1. Uncomment Navigation in `src/app/layout.tsx`
2. Logo already configured at `/public/cloconn_logo.png`

### Edit Contact Info

Update in 3 places:

- `src/components/ContactForm.tsx`
- `src/components/Footer.tsx`
- `src/app/about/page.tsx`

### Add Blog Posts

Edit `src/data/blogs.json` - add new entries following the existing format.

### Add Testimonials

Edit `src/data/testimonials.json` - add new entries following the existing format.

---

## 🔧 Common Tasks

### Build for Production

```bash
npm run build
```

### Run Production Build

```bash
npm start
```

### Lint Code

```bash
npm run lint
```

---

## 📁 Key Files to Know

| File                             | Purpose                            |
| -------------------------------- | ---------------------------------- |
| `src/app/page.tsx`               | Home page                          |
| `src/app/layout.tsx`             | Site-wide layout (fonts, metadata) |
| `src/app/globals.css`            | Brand colors and utilities         |
| `src/data/blogs.json`            | Blog posts data                    |
| `src/data/testimonials.json`     | Testimonials data                  |
| `src/components/Hero.tsx`        | Hero section                       |
| `src/components/ContactForm.tsx` | Contact form                       |

---

## ⚠️ Before Going Live

### Essential

- [ ] Connect contact form to email service
- [ ] Add real blog content (or CMS)
- [ ] Add blog thumbnail images
- [ ] Test on mobile devices
- [ ] Set up analytics

### Recommended

- [ ] Add sitemap and robots.txt
- [ ] Run Lighthouse audit
- [ ] Test all forms
- [ ] Verify all links work
- [ ] Check SEO meta tags

---

## 🆘 Troubleshooting

### Port 3000 Already in Use?

```bash
# Kill the process or use different port
npm run dev -- -p 3001
```

### Build Errors?

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Type Errors?

Ensure you're using Node 18+ and TypeScript 5+

```bash
node --version
npx tsc --version
```

---

## 📚 Documentation

- **Full Documentation:** See `README.md`
- **Implementation Details:** See `IMPLEMENTATION_NOTES.md`
- **Project Summary:** See `PROJECT_SUMMARY.md`
- **Optional Features:** See `OPTIONAL_NAVIGATION.md`

---

## 🎯 Next Steps

1. **Customize Content:** Update text, images, and data files
2. **Add Navigation:** Follow `OPTIONAL_NAVIGATION.md` if desired
3. **Connect Email:** Integrate SendGrid/Resend in `/api/contact/route.ts`
4. **Add Images:** Place blog thumbnails in `/public/blogs/`
5. **Deploy:** Vercel, Netlify, or your preferred hosting

---

## 💬 Need Help?

- Check `IMPLEMENTATION_NOTES.md` for detailed explanations
- Review component files for inline documentation
- All components are well-commented

---

**Happy building! 🚀**

The website is production-ready. Just add your content and connect the email service.

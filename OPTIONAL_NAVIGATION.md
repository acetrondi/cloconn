# Optional Navigation Header

A navigation component has been created at `src/components/Navigation.tsx` but is **not currently active** to allow flexibility in the design.

## Features

- Sticky top navigation bar
- Logo integration (uses `/public/cloconn_logo.png`)
- Responsive mobile menu with hamburger icon
- Links to all main pages
- Brand color theming

## To Add Navigation

### Option 1: Global Navigation (All Pages)

Add to `src/app/layout.tsx`:

```tsx
import { Navigation } from "@/components/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <body className="antialiased font-sans">
        <Navigation /> {/* Add this line */}
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
```

### Option 2: Per-Page Navigation

Add to individual pages (e.g., `src/app/blogs/page.tsx`):

```tsx
import { Navigation } from "@/components/Navigation";

export default function BlogsPage() {
  return (
    <main>
      <Navigation />
      {/* rest of page content */}
    </main>
  );
}
```

## Current Design Decision

The hero section on the home page serves as a full-screen landing experience. Adding a fixed navigation might:

- Reduce hero section impact
- Add visual clutter
- Change the user experience flow

Consider adding navigation if:

- Users need persistent access to all pages
- The site grows beyond 4-5 pages
- Testing shows navigation improves user experience

## Alternative: Footer-Only Navigation

The current implementation uses the footer for navigation, which:

- Keeps the hero section clean
- Encourages scrolling through content
- Works well for single-page layouts
- Is common for consultancy/service websites

## Customization

To customize the navigation:

1. **Change logo size** - Adjust `w-10 h-10 md:w-12 md:h-12` in Navigation.tsx
2. **Add CTA button** - Add a highlighted "Get Started" button to the nav
3. **Change background** - Modify `bg-brand-secondary` to another color
4. **Remove logo** - Use text-only branding
5. **Add dropdown menus** - For service categories or blog categories

## Mobile Menu Behavior

- Hamburger icon on screens < 768px
- Slide-down menu when opened
- Click outside or on link to close
- Accessible keyboard navigation
- ARIA labels for screen readers

import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Navigation } from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cloconn Careers | Career Counselling & Overseas Education",
    template: "%s | Cloconn Careers",
  },
  description:
    "Expert career counselling and overseas education guidance for students and parents. Helping students design meaningful, successful careers across 50+ countries.",
  metadataBase: new URL("https://www.cloconncareers.com"),
  keywords: [
    "career counselling",
    "overseas education",
    "study abroad",
    "university applications",
    "career guidance",
    "stream selection",
    "abroad admissions",
  ],
  openGraph: {
    title: "Cloconn Careers | Career Counselling & Overseas Education",
    description:
      "Expert career counselling and overseas education guidance for students and parents.",
    type: "website",
    locale: "en_IN",
    siteName: "Cloconn Careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloconn Careers | Career Counselling & Overseas Education",
    description:
      "Expert career counselling and overseas education guidance for students and parents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <body className="antialiased font-sans">
        <Navigation />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

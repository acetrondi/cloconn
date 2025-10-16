"use client";

import Link from "next/link";
import { useFadeInUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export function AboutSummary() {
    const containerRef = useFadeInUp(0.15);

    return (
        <section
            id="about"
            ref={containerRef as React.RefObject<HTMLElement>}
            className="py-12 md:py-16 lg:py-24 bg-brand-light"
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2
                        data-animate
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading"
                    >
                        About Cloconn Careers
                    </h2>
                    <div data-animate className="space-y-4 text-body text-base md:text-lg leading-relaxed">
                        <p>
                            Hi everyone, I&rsquo;m <span className="font-semibold">Mohini Majithia</span> Founder
                            and CEO of Cloconn Careers and an Executive Board Member of the
                            Association of Professional Counsellors (APCCI).
                        </p>
                        <p>
                            By qualification, I&rsquo;m an Instrumentation Engineer with a
                            postgraduate degree in Industrial Packaging, CDAC certification,
                            and specialised training in career counselling, overseas
                            admissions, and profile building from UCLA.
                        </p>
                        <p>
                            I&rsquo;m passionate about helping students design meaningful,
                            successful careers. Over the years, I&rsquo;ve guided students to top
                            institutions across the US, UK, Australia, Japan, Singapore, New
                            Zealand, Algeria, Oman, Germany, and Dubai, as well as Indian
                            institutes like IIMs, IITs, and ICT.
                        </p>
                        <p className="brand-secondary font-semibold text-xl">
                            I believe in a creative, human-centric approach to counselling
                            because every student&rsquo;s journey is unique.
                        </p>
                    </div>
                    <div data-animate>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 brand-primary hover:underline text-lg font-semibold group"
                        >
                            Read Full Story
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}


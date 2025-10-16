"use client";

import { useFadeInUp } from "@/lib/animations";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

export function BentoLinks() {
    const containerRef = useFadeInUp(0.12);

    const socialLinks = [
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://instagram.com/cloconncareers",
            color: "hover:bg-pink-50 hover:border-pink-300",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://linkedin.com/company/cloconncareers",
            color: "hover:bg-blue-50 hover:border-blue-300",
        },
        {
            name: "YouTube",
            icon: Youtube,
            href: "https://youtube.com/@cloconncareers",
            color: "hover:bg-red-50 hover:border-red-300",
        },
        {
            name: "Facebook",
            icon: Facebook,
            href: "https://facebook.com/cloconncareers",
            color: "hover:bg-blue-50 hover:border-blue-400",
        },
    ];

    return (
        <section
            ref={containerRef as React.RefObject<HTMLElement>}
            className="py-12 md:py-16 lg:py-24 bg-brand-light"
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2
                        data-animate
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4"
                    >
                        Join Our Community
                    </h2>
                    <p data-animate className="text-body text-lg max-w-2xl mx-auto">
                        Follow us on social media for career tips, success stories, and
                        overseas education insights.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-animate
                                className={`bg-white rounded-lg p-8 md:p-10 border-2 border-gray-200 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 ${social.color}`}
                            >
                                <Icon className="w-10 h-10 md:w-12 md:h-12 brand-primary" />
                                <span className="text-heading font-semibold text-sm md:text-base">
                                    {social.name}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


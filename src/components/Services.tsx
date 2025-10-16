"use client";

import { useFadeInUp } from "@/lib/animations";
import { ServiceCard } from "./ServiceCard";
import {
    GraduationCap,
    FileText,
    Plane,
    DollarSign,
    Banknote,
    Target,
} from "lucide-react";

export function Services() {
    const containerRef = useFadeInUp(0.1);

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
                        Everything You Need
                    </h2>
                    <p data-animate className="text-body text-lg max-w-2xl mx-auto">
                        Comprehensive services to support your journey from career planning
                        to university enrollment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <ServiceCard
                        icon={GraduationCap}
                        title="Study Abroad Applications"
                        description="End-to-end support for university applications across 50+ countries with personalized strategy."
                    />
                    <ServiceCard
                        icon={FileText}
                        title="SOP, LOR & Essays"
                        description="Expert help crafting compelling Statements of Purpose, Letters of Recommendation, and application essays."
                    />
                    <ServiceCard
                        icon={Plane}
                        title="Visa Assistance"
                        description="Comprehensive visa guidance, documentation support, and interview preparation for a smooth process."
                    />
                    <ServiceCard
                        icon={DollarSign}
                        title="Scholarships & Funding"
                        description="Identify scholarship opportunities and maximize your chances of securing financial aid."
                    />
                    <ServiceCard
                        icon={Banknote}
                        title="Money Transfer & Forex"
                        description="Hassle-free forex and international money transfer support for your overseas education."
                    />
                    <ServiceCard
                        icon={Target}
                        title="Career Assessment"
                        description="Psychometric testing and personalized career counselling to discover your ideal path."
                    />
                </div>
            </div>
        </section>
    );
}


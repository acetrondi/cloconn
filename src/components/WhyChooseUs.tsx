"use client";

import { useFadeInUp } from "@/lib/animations";
import { FeatureCard } from "./FeatureCard";
import { Users, Award, Globe, Heart } from "lucide-react";

export function WhyChooseUs() {
    const containerRef = useFadeInUp(0.15);

    return (
        <section
            ref={containerRef as React.RefObject<HTMLElement>}
            className="py-12 md:py-16 lg:py-24 bg-white"
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2
                        data-animate
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4"
                    >
                        Why Choose Us
                    </h2>
                    <p data-animate className="text-body text-lg max-w-2xl mx-auto">
                        Trusted by thousands of students and parents for expert guidance
                        and proven results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <FeatureCard
                        icon={<Users className="w-12 h-12" />}
                        title="10K+ Students"
                        description="Guided over 10,000 students to their dream institutions worldwide."
                    />
                    <FeatureCard
                        icon={<Award className="w-12 h-12" />}
                        title="Award Winning"
                        description="Recognized by APCCI and industry leaders for excellence in counselling."
                    />
                    <FeatureCard
                        icon={<Globe className="w-12 h-12" />}
                        title="50+ Countries"
                        description="Helping students get admits across top universities in 50+ countries."
                    />
                    <FeatureCard
                        icon={<Heart className="w-12 h-12" />}
                        title="99% Satisfaction"
                        description="Trusted by parents and students for personalized, caring guidance."
                    />
                </div>
            </div>
        </section>
    );
}


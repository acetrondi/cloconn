"use client";

import { useFadeInUp } from "@/lib/animations";
import { TestimonialCard } from "./TestimonialCard";
import testimonialsData from "@/data/testimonials.json";

export function Testimonials() {
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
                        What Our Students Say
                    </h2>
                    <p data-animate className="text-body text-lg max-w-2xl mx-auto">
                        Real stories from students and parents who trusted us with their
                        future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonialsData.slice(0, 3).map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            relation={testimonial.relation}
                            quote={testimonial.quote}
                            university={testimonial.university}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}


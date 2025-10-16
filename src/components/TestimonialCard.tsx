"use client";

import { Quote } from "lucide-react";

interface TestimonialCardProps {
    name: string;
    relation: string;
    quote: string;
    university: string;
}

export function TestimonialCard({
    name,
    relation,
    quote,
    university,
}: TestimonialCardProps) {
    return (
        <div
            data-animate
            className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 shadow-soft hover:shadow-soft-hover transition-all duration-300"
        >
            <div className="brand-primary mb-4">
                <Quote className="w-10 h-10" fill="currentColor" />
            </div>
            <p className="text-body text-base md:text-lg leading-relaxed mb-6 italic">
                &ldquo;{quote}&rdquo;
            </p>
            <div className="border-t border-gray-200 pt-4">
                <p className="text-heading font-semibold text-lg">{name}</p>
                <p className="text-body text-sm">
                    {relation} • {university}
                </p>
            </div>
        </div>
    );
}


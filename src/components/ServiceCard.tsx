"use client";

import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    return (
        <div
            data-animate
            className="bg-white rounded-lg p-6 border border-gray-200 shadow-soft transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 group"
        >
            <div className="bg-brand-pale-gold/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
                <Icon className="w-7 h-7 brand-primary" />
            </div>
            <h3 className="text-heading text-lg md:text-xl font-semibold mb-2">
                {title}
            </h3>
            <p className="text-body text-sm md:text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
}


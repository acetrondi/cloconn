"use client";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div
            data-animate
            className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1"
        >
            <div className="brand-primary mb-4 flex justify-center">{icon}</div>
            <h3 className="text-heading text-xl md:text-2xl font-semibold mb-3 text-center">
                {title}
            </h3>
            <p className="text-body text-center text-sm md:text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
}


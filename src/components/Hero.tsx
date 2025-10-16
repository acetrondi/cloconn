"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useHeroAnimation } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const containerRef = useHeroAnimation();

    return (
        <section
            ref={containerRef as React.RefObject<HTMLDivElement>}
            className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero/hero-background-image-1.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-50"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-white space-y-6">
                        <h1
                            data-hero-heading
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        >
                            Design Your{" "}
                            <span className="brand-primary">Dream Career</span>
                        </h1>
                        <p
                            data-hero-subtext
                            className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl"
                        >
                            Expert career counselling and overseas education guidance for
                            students and parents. Because every student&rsquo;s journey is
                            unique.
                        </p>
                        <div data-hero-cta className="flex flex-col  sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto mt-8 sm:mt-0">
                            <Link href="/#contact" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-brand-secondary font-semibold px-8 sm:px-8 py-7 sm:py-6 text-xl sm:text-lg group h-auto min-h-[64px] sm:h-auto sm:min-h-0"
                                >
                                    Talk to a Counsellor
                                    <ArrowRight className="ml-2 w-6 h-6 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link
                                href="https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/Mjg0NQ=="
                                className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 border-2 border-white rounded-lg px-8 py-5 text-white hover:text-brand-primary font-semibold text-lg transition-all min-h-[64px] flex items-center justify-center sm:bg-transparent sm:border-0 sm:hover:bg-transparent sm:min-h-0 sm:py-0 sm:text-base sm:hover:underline"
                            >
                                Take a Free Career Test
                            </Link>

                        </div>
                    </div>

                    {/* Layout Image */}
                    <div className="hidden lg:block">
                        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/hero/hero-layout-image.jpg"
                                alt="Students pursuing their dreams"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


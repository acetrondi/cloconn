import { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Award, Users, Globe, Heart } from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Mohini Majithia, Founder & CEO of Cloconn Careers, and our mission to help students design meaningful careers.",
};

export default function AboutPage() {
    return (
        <main>
            {/* Header Section */}
            <section className="bg-brand-secondary text-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            About <span className="brand-primary">Cloconn Careers</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200">
                            Helping students design meaningful, successful careers with a
                            human-centric approach.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Story */}
            <section className="py-12 md:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-soft">
                                <div className="bg-brand-beige/30 w-full h-full flex items-center justify-center">
                                    <Image src="/mohini-majithia.jpg" alt="Mohini Majithia" className="object-cover" fill />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-heading">
                                    Meet Mohini Majithia
                                </h2>
                                <p className="text-body text-lg leading-relaxed">
                                    Founder and CEO of Cloconn Careers and an Executive Board
                                    Member of the Association of Professional Counsellors (APCCI).
                                </p>
                                <p className="text-body leading-relaxed">
                                    By qualification, I&rsquo;m an Instrumentation Engineer with a
                                    postgraduate degree in Industrial Packaging, CDAC
                                    certification, and specialised training in career counselling,
                                    overseas admissions, and profile building from UCLA.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6 text-body text-lg leading-relaxed">
                            <p>
                                I&rsquo;m passionate about helping students design meaningful,
                                successful careers. Over the years, I&rsquo;ve guided students to top
                                institutions across the <strong>US, UK, Australia, Japan, Singapore,
                                    New Zealand, Algeria, Oman, Germany, and Dubai</strong>, as well as
                                Indian institutes like <strong>IIMs, IITs, and ICT</strong>.
                            </p>
                            <p>
                                What sets Cloconn Careers apart is our{" "}
                                <strong className="brand-primary">
                                    creative, human-centric approach
                                </strong>{" "}
                                to counselling. We don&rsquo;t believe in one-size-fits-all
                                solutions. Every student has unique aspirations, strengths, and
                                challenges and we take the time to understand each one.
                            </p>
                            <p>
                                From career assessments and stream selection to university
                                applications, SOP writing, visa assistance, and scholarship
                                guidance, we provide comprehensive support at every step of the
                                journey.
                            </p>
                            <p className="text-heading font-semibold text-xl">
                                Because every student&rsquo;s journey is unique.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-12 md:py-16 lg:py-24 bg-brand-light">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-12">
                            Our Core Values
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-lg p-8 shadow-soft">
                                <Users className="w-12 h-12 brand-primary mb-4" />
                                <h3 className="text-heading text-2xl font-semibold mb-3">
                                    Student-Centric
                                </h3>
                                <p className="text-body leading-relaxed">
                                    Every decision we make is centered around what&rsquo;s best for the
                                    student. We listen, understand, and guide with empathy and
                                    expertise.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg p-8 shadow-soft">
                                <Award className="w-12 h-12 brand-primary mb-4" />
                                <h3 className="text-heading text-2xl font-semibold mb-3">
                                    Excellence
                                </h3>
                                <p className="text-body leading-relaxed">
                                    We maintain the highest standards in counselling, research,
                                    and support to ensure our students achieve their goals.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg p-8 shadow-soft">
                                <Globe className="w-12 h-12 brand-primary mb-4" />
                                <h3 className="text-heading text-2xl font-semibold mb-3">
                                    Global Perspective
                                </h3>
                                <p className="text-body leading-relaxed">
                                    With expertise across 50+ countries, we bring a truly global
                                    perspective to career planning and university selection.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg p-8 shadow-soft">
                                <Heart className="w-12 h-12 brand-primary mb-4" />
                                <h3 className="text-heading text-2xl font-semibold mb-3">
                                    Genuine Care
                                </h3>
                                <p className="text-body leading-relaxed">
                                    We treat every student like family. Your success is our
                                    success, and we&rsquo;re with you every step of the way.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Overview */}
            <section className="py-12 md:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8">
                            How We Help
                        </h2>
                        <p className="text-body text-lg leading-relaxed mb-8">
                            Cloconn Careers helps students find clarity in their career paths.
                            Our services include:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 text-left">
                            <ul className="space-y-3 text-body">
                                <li className="flex items-start gap-2">
                                    <span className="brand-primary mt-1">✓</span>
                                    <span>Career Counselling</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="brand-primary mt-1">✓</span>
                                    <span>Psychometric Assessments</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="brand-primary mt-1">✓</span>
                                    <span>Stream Selection</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="brand-primary mt-1">✓</span>
                                    <span>Admission Guidance (India & Abroad)</span>
                                </li>
                            </ul>
                            <ul className="space-y-3 text-body">
                                <li className="flex items-start gap-2">
                                    <span className="brand-primary mt-1">✓</span>
                                    <span>University Applications</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="brand-primary mt-1">✓</span>
                                    <span>SOP & Essay Support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="brand-primary mt-1">✓</span>
                                    <span>Scholarship Assistance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="brand-primary mt-1">✓</span>
                                    <span>Visa Assistance & Profile Building</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}


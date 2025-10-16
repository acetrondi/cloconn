"use client";

import { useState } from "react";
import { Footer } from "@/components/Footer";
import { CertificateModal } from "@/components/CertificateModal";
import { Award } from "lucide-react";

// Certificate data - in production this could come from a CMS or database
const certificates = [
    {
        id: 1,
        title: "Professional Certification",
        description:
            "Official certification in career counselling and student guidance.",
        image: "/certificates/Mohini Piyush Majithia_certificate image.jpg",
    },
    {
        id: 2,
        title: "APCCI Life Member Badge",
        description:
            "Life Member Badge from the Association of Professional Counsellors (APCCI).",
        image: "/certificates/Badge_Life_Member_jpg.jpg",
    },
    {
        id: 3,
        title: "Professional Credentials",
        description:
            "Verified professional credentials for career counselling expertise.",
        image: "/certificates/Mohini Piyush Majithia.jpg",
    },
    {
        id: 4,
        title: "Career Guidance Recognition",
        description:
            "Recognition for excellence in career guidance and student counselling.",
        image: "/certificates/Screenshot_20230623_132228_Samsung Notes.jpg",
    },
    {
        id: 5,
        title: "Educational Excellence Certificate",
        description:
            "Certificate recognizing contribution to educational excellence.",
        image: "/certificates/Screenshot_20230915_193417_Gmail.jpg",
    },
    {
        id: 6,
        title: "Professional Achievement Award",
        description:
            "Award for outstanding achievement in career counselling.",
        image: "/certificates/Screenshot_20240518_120806_Microsoft 365 (Office).jpg",
    },
    {
        id: 7,
        title: "Industry Recognition",
        description:
            "Recognition from industry leaders for professional excellence.",
        image: "/certificates/Screenshot_20240817_063713_Photos.jpg",
    },
];

export default function CertificatesPage() {
    const [selectedCertificate, setSelectedCertificate] = useState<
        (typeof certificates)[0] | null
    >(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (certificate: (typeof certificates)[0]) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedCertificate(null), 200);
    };

    return (
        <main>
            {/* Header Section */}
            <section className="bg-brand-secondary text-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Certifications &{" "}
                            <span className="brand-primary">Achievements</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200">
                            Professional qualifications and recognitions from leading
                            institutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Certificates Grid */}
            <section className="py-12 md:py-16 lg:py-24 bg-brand-light">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {certificates.map((certificate) => (
                            <button
                                key={certificate.id}
                                onClick={() => openModal(certificate)}
                                className="bg-white rounded-lg p-6 border border-gray-200 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1 text-left group"
                            >
                                <div className="bg-brand-pale-gold/30 h-48 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-primary/10 transition-colors">
                                    <Award className="w-16 h-16 brand-primary" />
                                </div>
                                <h3 className="text-heading text-lg md:text-xl font-semibold mb-2">
                                    {certificate.title}
                                </h3>
                                <p className="text-body text-sm md:text-base">
                                    {certificate.description}
                                </p>
                                <p className="brand-primary text-sm font-semibold mt-4 group-hover:underline">
                                    Click to view
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <CertificateModal
                isOpen={isModalOpen}
                onClose={closeModal}
                certificate={selectedCertificate}
            />

            <Footer />
        </main>
    );
}


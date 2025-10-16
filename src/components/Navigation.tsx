"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/blogs", label: "Blogs" },
        { href: "/certificates", label: "Certificates" },
        { href: "/#contact", label: "Contact" },
    ];

    const handleLinkClick = (href: string) => {
        setIsMobileMenuOpen(false);

        // Handle anchor links on home page
        if (href === "/#contact") {
            if (window.location.pathname === "/") {
                // Already on home page, just scroll to section
                setTimeout(() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    };

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-10 h-10 md:w-12 md:h-12">
                            <Image
                                src="/cloconn_logo.png"
                                alt="Cloconn Careers"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-bold text-lg md:text-xl text-heading">
                            Cloconn <span className="brand-primary">Careers</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className="text-body hover:text-brand-primary transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors text-heading"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className="text-body hover:text-brand-primary transition-colors font-medium py-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

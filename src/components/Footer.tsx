import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-brand-secondary text-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold brand-primary mb-4">
                            Cloconn Careers
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Expert career counselling and overseas education guidance helping
                            students design meaningful, successful careers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-300 hover:text-brand-primary transition-colors text-sm"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-300 hover:text-brand-primary transition-colors text-sm"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blogs"
                                    className="text-gray-300 hover:text-brand-primary transition-colors text-sm"
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/certificates"
                                    className="text-gray-300 hover:text-brand-primary transition-colors text-sm"
                                >
                                    Certificates
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contact"
                                    className="text-gray-300 hover:text-brand-primary transition-colors text-sm"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>Career Counselling</li>
                            <li>Study Abroad Applications</li>
                            <li>SOP & Essay Writing</li>
                            <li>Visa Assistance</li>
                            <li>Scholarship Guidance</li>
                            <li>Career Assessment</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-gray-300 text-sm">
                                <Mail className="w-5 h-5 brand-primary flex-shrink-0 mt-0.5" />
                                <a
                                    href="mailto:writetomohini@cloconncareers.com"
                                    className="hover:text-brand-primary transition-colors"
                                >
                                    writetomohini@cloconncareers.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-gray-300 text-sm">
                                <Phone className="w-5 h-5 brand-primary flex-shrink-0 mt-0.5" />
                                <a
                                    href="tel:+919324077931"
                                    className="hover:text-brand-primary transition-colors"
                                >
                                    +91 93240 77931
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-gray-300 text-sm">
                                <MapPin className="w-5 h-5 brand-primary flex-shrink-0 mt-0.5" />
                                <span>
                                    1, Sambhav Darshan, Plot No. 42,
                                    <br />
                                    Sector 28, Vashi,
                                    <br />
                                    Navi Mumbai – 400703
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-600 mt-12 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Cloconn Careers. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}


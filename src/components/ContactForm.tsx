"use client";

import { useState, FormEvent } from "react";
import { useFadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send } from "lucide-react";

export function ContactForm() {
    const containerRef = useFadeInUp(0.1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const validateForm = () => {
        const newErrors = {
            name: "",
            email: "",
            message: "",
        };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error("Please fix the errors in the form");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.ok) {
                toast.success("Message sent successfully! We'll get back to you soon.");
                setFormData({ name: "", email: "", message: "" });
                setErrors({ name: "", email: "", message: "" });
            } else {
                toast.error(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Contact form error:", error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <section
            id="contact"
            ref={containerRef as React.RefObject<HTMLElement>}
            className="py-12 md:py-16 lg:py-24 bg-white"
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2
                            data-animate
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4"
                        >
                            Get in Touch
                        </h2>
                        <p data-animate className="text-body text-lg">
                            Have questions? We&rsquo;re here to help you find your path.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" data-animate>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-heading font-semibold mb-2"
                            >
                                Your Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? "name-error" : undefined}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                                placeholder="Enter your full name"
                            />
                            {errors.name && (
                                <p id="name-error" className="text-red-600 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-heading font-semibold mb-2"
                            >
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? "email-error" : undefined}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                                placeholder="your.email@example.com"
                            />
                            {errors.email && (
                                <p id="email-error" className="text-red-600 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-heading font-semibold mb-2"
                            >
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? "message-error" : undefined}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
                                placeholder="Tell us about your goals and how we can help..."
                            />
                            {errors.message && (
                                <p id="message-error" className="text-red-600 text-sm mt-1">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-brand-primary hover:bg-brand-primary/90 text-brand-secondary font-semibold py-6 text-lg"
                            size="lg"
                        >
                            {isSubmitting ? (
                                "Sending..."
                            ) : (
                                <>
                                    Send Message
                                    <Send className="ml-2 w-5 h-5" />
                                </>
                            )}
                        </Button>
                    </form>

                    <div data-animate className="mt-12 pt-8 border-t border-gray-200 text-center space-y-4">
                        <p className="text-body">
                            <span className="font-semibold text-heading">Email:</span>{" "}
                            <a
                                href="mailto:writetomohini@cloconncareers.com"
                                className="brand-primary hover:underline"
                            >
                                writetomohini@cloconncareers.com
                            </a>
                        </p>
                        <p className="text-body">
                            <span className="font-semibold text-heading">Phone:</span>{" "}
                            <a href="tel:+919324077931" className="brand-primary hover:underline">
                                +91 93240 77931
                            </a>
                        </p>
                        <p className="text-body text-sm">
                            <span className="font-semibold text-heading">Address:</span> 1,
                            Sambhav Darshan, Plot No. 42, Sector 28, Vashi, Navi Mumbai –
                            400703
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


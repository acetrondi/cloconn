import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import blogsData from "@/data/blogs.json";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Blogs",
    description:
        "Career guidance tips, study abroad insights, and overseas education advice from Cloconn Careers experts.",
};

export default function BlogsPage() {
    return (
        <main>
            {/* Header Section */}
            <section className="bg-brand-secondary text-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Insights & <span className="brand-primary">Guidance</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200">
                            Expert tips on career planning, overseas education, and building a
                            successful future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blogs Grid */}
            <section className="py-12 md:py-16 lg:py-24 bg-brand-light">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {blogsData.map((blog) => (
                            <article
                                key={blog.slug}
                                className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
                            >
                                {/* Thumbnail */}
                                <div className="relative bg-brand-beige/30 h-48 flex items-center justify-center overflow-hidden">
                                    {blog.thumbnail ? (
                                        <Image
                                            src={blog.thumbnail}
                                            alt={blog.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <span className="text-brand-secondary/30 text-6xl font-bold">
                                            {blog.title.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-body mb-3">
                                        <span className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            {blog.author}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(blog.date).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>

                                    <h2 className="text-heading text-xl md:text-2xl font-bold mb-3">
                                        {blog.title}
                                    </h2>

                                    <p className="text-body text-sm md:text-base leading-relaxed mb-4 flex-1">
                                        {blog.summary}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                        <span className="text-xs brand-primary font-semibold px-3 py-1 bg-brand-pale-gold/20 rounded-full">
                                            {blog.category}
                                        </span>
                                        <Link
                                            href={`/blogs/${blog.slug}`}
                                            className="brand-primary hover:underline font-semibold text-sm flex items-center gap-1 group"
                                        >
                                            Read More
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}


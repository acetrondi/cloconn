import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import blogsData from "@/data/blogs.json";
import { Calendar, User, ArrowLeft } from "lucide-react";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: "Blog Not Found",
        };
    }

    return {
        title: blog.title,
        description: blog.summary,
    };
}

export async function generateStaticParams() {
    return blogsData.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <main>
            {/* Header */}
            <section className="bg-brand-secondary text-white py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-brand-primary mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Blogs
                    </Link>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                            <span className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {blog.author}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(blog.date).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </span>
                            <span className="brand-primary font-semibold px-3 py-1 bg-brand-primary/20 rounded-full text-xs">
                                {blog.category}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            {blog.title}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="py-12 md:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        {/* Thumbnail */}
                        <div className="relative bg-brand-beige/30 h-64 md:h-96 rounded-lg flex items-center justify-center mb-12 overflow-hidden">
                            {blog.thumbnail ? (
                                <Image
                                    src={blog.thumbnail}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <span className="text-brand-secondary/30 text-9xl font-bold">
                                    {blog.title.charAt(0)}
                                </span>
                            )}
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-body leading-relaxed mb-6">
                                {blog.summary}
                            </p>

                            {/* Placeholder content - In production, this would come from a CMS or markdown */}
                            <h2 className="text-heading text-2xl font-bold mt-8 mb-4">
                                Introduction
                            </h2>
                            <p className="text-body leading-relaxed mb-6">
                                This is a placeholder blog post. In a production environment,
                                you would integrate with a CMS (like Contentful, Sanity, or
                                Strapi) or use MDX files to store and render full blog content.
                                The current implementation demonstrates the structure and design
                                for individual blog posts.
                            </p>

                            <h2 className="text-heading text-2xl font-bold mt-8 mb-4">
                                Key Takeaways
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-body mb-6">
                                <li>Career planning requires careful consideration and expert guidance</li>
                                <li>Understanding your strengths is crucial for success</li>
                                <li>Professional counselling can make a significant difference</li>
                                <li>Every student&rsquo;s journey is unique and deserves personalized attention</li>
                            </ul>

                            <h2 className="text-heading text-2xl font-bold mt-8 mb-4">
                                Next Steps
                            </h2>
                            <p className="text-body leading-relaxed mb-6">
                                Ready to take the next step in your career journey? Get in touch
                                with Cloconn Careers for personalized guidance tailored to your
                                unique goals and aspirations.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="bg-brand-light rounded-lg p-8 mt-12 text-center">
                            <h3 className="text-heading text-2xl font-bold mb-4">
                                Need Career Guidance?
                            </h3>
                            <p className="text-body mb-6">
                                Let&rsquo;s discuss your goals and create a personalized plan for your
                                success.
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-brand-secondary font-semibold px-8 py-3 rounded-lg transition-colors"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}


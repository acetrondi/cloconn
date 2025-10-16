import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom hook for fade-in-up animation on scroll
 * Elements with [data-animate] attribute will be animated
 */
export function useFadeInUp(stagger = 0.12, delay = 0) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll("[data-animate]");
      if (!elements || elements.length === 0) return;

      gsap.fromTo(
        elements,
        {
          autoAlpha: 0,
          y: 24,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [stagger, delay]);

  return containerRef;
}

/**
 * Custom hook for simple fade-in animation
 */
export function useFadeIn(delay = 0) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.8,
          delay,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay]);

  return containerRef;
}

/**
 * Custom hook for hero entrance animation
 */
export function useHeroAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const heading = containerRef.current?.querySelector(
        "[data-hero-heading]"
      );
      const subtext = containerRef.current?.querySelector(
        "[data-hero-subtext]"
      );
      const cta = containerRef.current?.querySelector("[data-hero-cta]");

      const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

      if (heading) {
        timeline.fromTo(
          heading,
          { autoAlpha: 0, y: 32 },
          { autoAlpha: 1, y: 0, duration: 0.8 }
        );
      }

      if (subtext) {
        timeline.fromTo(
          subtext,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.4"
        );
      }

      if (cta) {
        timeline.fromTo(
          cta,
          { autoAlpha: 0, scale: 0.95 },
          { autoAlpha: 1, scale: 1, duration: 0.5 },
          "-=0.3"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}

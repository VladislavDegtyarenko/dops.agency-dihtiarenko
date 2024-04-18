"use client";

// Core
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, ReactNode } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { letterByLetterReveal } from "@/gsap-animations/letterByLetterReveal";

const HeroTitle = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!headingRef.current) return;

    const headingWords = headingRef.current.querySelectorAll(".word");
    const dot = headingRef.current.querySelector(".dot");

    Array.from(headingWords).forEach((word) => {
      letterByLetterReveal(word as HTMLElement, {
        opacity: 1,
        duration: 0.01,
        stagger: {
          each: 0.2,
          ease: "power1.out",
        },
      });
    });

    gsap.to(dot, { opacity: 1, duration: 0.01 });
  }, [headingRef]);

  return (
    <h1
      className="text-accent relative z-[1] inline-block text-[72px]"
      ref={headingRef}
    >
      <span className="word" style={{ opacity: 0 }}>
        Respect
      </span>
      <span
        className="word absolute left-2 top-full block origin-[25%_40%] rotate-90"
        style={{ opacity: 0 }}
      >
        Studio
      </span>
      <span
        className="dot after:bg-accent after:absolute after:left-[2px] after:top-[95%] after:block after:h-2 after:w-2 after:content-['']"
        style={{ opacity: 0 }}
      />
    </h1>
  );
};

export default HeroTitle;

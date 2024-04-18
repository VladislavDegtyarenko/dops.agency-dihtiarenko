"use client";

// Core
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, ReactNode } from "react";

// ScrollTrigger doesn't work
// if registered inside React Server Components
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Utils
import splitStringUsingRegex from "@/utils/splitStringUsingRegex";
import { letterByLetterReveal } from "@/gsap-animations/letterByLetterReveal";

const SectionHeading = ({ children }: { children: ReactNode }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!headingRef.current) return;

    letterByLetterReveal(headingRef.current);
  }, [headingRef]);

  return (
    <h2
      className="whitespace-pre-line text-[64px] leading-none lg:text-[82px]"
      style={{ opacity: 0 }}
      ref={headingRef}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;

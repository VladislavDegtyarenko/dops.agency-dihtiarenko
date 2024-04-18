"use client";

// Core
import { useGSAP } from "@gsap/react";
import { useRef, ReactNode } from "react";
import { letterByLetterReveal } from "@/gsap-animations/letterByLetterReveal";

const GrowingTitle = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    letterByLetterReveal(ref.current as HTMLHeadingElement, {
      opacity: 1,
      duration: 0.01,
      stagger: {
        each: 0.04,
      },
    });
  }, [ref]);

  return (
    <h2
      className="mt-[64px] whitespace-pre-wrap text-right text-[48px] leading-none text-black sm:text-[86px] lg:text-[135px]"
      ref={ref}
    >
      {children}
    </h2>
  );
};

export default GrowingTitle;

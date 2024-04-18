"use client";

// Core
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, ReactNode } from "react";

const Paragraph = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const paragraphElement = ref.current;
    if (!paragraphElement) return;

    gsap.to(paragraphElement, {
      opacity: 1,
      duration: 0.7,
      ease: "power1.in",
      scrollTrigger: paragraphElement,
    });
  }, [ref]);

  return (
    <p
      className={`whitespace-pre-line text-[22px] leading-tight ${className}`}
      ref={ref}
      style={{ opacity: 0 }}
    >
      {children}
    </p>
  );
};

export default Paragraph;

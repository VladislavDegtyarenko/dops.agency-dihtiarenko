"use client";

// Core
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, ReactNode } from "react";

import Image from "next/image";
import HeroPhoto from "/public/hero-bg.jpg";

const HeroBg = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 100,
        clipPath: "inset(100% 0 0px 0)",
      },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0 0 0)",
        duration: 2.2,
        delay: 0.7,
        ease: "power2.inOut",
        scrollTrigger: ref.current,
      },
    );
  }, [ref]);

  return (
    <div
      className="absolute left-0 top-0 h-full w-full"
      style={{ opacity: 0 }}
      ref={ref}
    >
      <Image
        src={HeroPhoto}
        alt=""
        fill
        priority
        sizes="(max-width: 1200px) 1200px, 1920px"
        className="pointer-events-none select-none object-cover"
      />
      <h2 className="text-accent absolute right-5 top-5 z-[1] whitespace-pre drop-shadow-[0_4px_4px_#00000077]">{`Digital Marketing\nAgency`}</h2>
    </div>
  );
};

export default HeroBg;

"use client";

// Core
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, ReactNode } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

// UI
import Container from "../../layout/Container";
import HeroTitle from "./HeroTitle";
import HeroBg from "./HeroBg";

const HeroScreen = ({ isLoadingFinished }: { isLoadingFinished: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 1 },
      {
        opacity: 0.5,
        scrollTrigger: {
          trigger: ref.current,
          start: "5%",
          end: "100%",
          // markers: true,
          scrub: true,
        },
      },
    );
  }, [ref]);

  return (
    <>
      <section
        className="-z-1 sticky top-0 h-[calc(100vh-87px)] w-full shadow-md"
        ref={ref}
      >
        <Container>
          {isLoadingFinished && (
            <>
              <HeroTitle />
              <HeroBg />
            </>
          )}
        </Container>
      </section>
    </>
  );
};

export default HeroScreen;

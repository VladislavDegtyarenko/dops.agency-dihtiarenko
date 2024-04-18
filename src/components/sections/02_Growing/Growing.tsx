"use client";

// UI
import Container from "@/components/layout/Container";
import GrowingTitle from "./GrowingTitle";
import Header from "@/components/layout/Header";
import Paragraph from "@/components/Typography/Paragraph";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Growing = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.2,
        delay: 1.7 + 0.7,
        ease: "power2.inOut",
      },
    );
  }, [ref]);

  return (
    <section className="bg-accent relative pb-8" ref={ref}>
      <Header />
      <Container>
        <div>
          <GrowingTitle>{`Growing\nbusinesses by\nbuilding\nrelationships`}</GrowingTitle>
          <Paragraph className="mt-[201px] max-w-[318px]">
            B2B Marketing & LinkedIn Lead Generation agency
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};

export default Growing;

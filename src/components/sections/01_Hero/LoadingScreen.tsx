"use client";

// Core imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const loadingNumbers = [4, 19, 23, 74, 88, 98];

const LoadingScreen = ({ loaded }: { loaded: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(async () => {
    if (!ref.current) return;

    typeof window !== "undefined" && window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    const numberElement = ref.current.children[0]!;

    const counterPromises = loadingNumbers.map((number, index) => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          numberElement.textContent = String(number);
          resolve();
        }, index * 400);
      });
    });

    await Promise.all(counterPromises);

    loaded();
    document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [ref]);

  return (
    <div
      className="bg-deepBlue fixed left-0 top-0 z-10 flex h-full w-full items-end justify-end p-8"
      ref={ref}
    >
      <div className="text-accent text-[240px] leading-none">
        {loadingNumbers[0]}
      </div>
    </div>
  );
};

export default LoadingScreen;

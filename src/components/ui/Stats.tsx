"use client";

// Core imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

/* 
  Я зробив цей компонент гнучким так,
  що якщо навіть додати більше 4 ліній зі статистикою,
  то реакт буде повторювати паттерн рендеру цих ліній,
  згідно з макетом фігми 
*/

type Stat = {
  number: number;
  label: string;
};

const lineClasses = [
  "justify-end",
  "justify-center left-[20%] w-[80%]",
  "justify-start",
  "justify-center left-[40%] w-[60%]",
];

const Line = ({ number, label, index }: Stat & { index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const lineElement = ref.current;
    if (!lineElement) return;

    const background = lineElement.querySelector(".background");
    const text = lineElement.querySelector(".info");

    // Animate background reveal using clip-path property
    gsap.to(background, {
      clipPath: "inset(0 0% 0 0)",
      duration: 0.85,
      delay: index * 0.1,
      ease: "power1.out",
      scrollTrigger: lineElement,
    });

    // Animate text reveal effect
    gsap.fromTo(
      text,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.15 + index * 0.1,
        ease: "power1.out",
        scrollTrigger: lineElement,
      },
    );
  }, [ref]);

  return (
    <div
      className={`text-accent relative mt-2 flex px-12 py-4 ${lineClasses[index]}`}
      ref={ref}
    >
      <span
        className="background bg-deepBlue absolute left-0 top-0 h-full w-full"
        style={{ clipPath: "inset(0 100% 0 0);" }}
      ></span>
      <span className="info relative flex space-x-4" style={{ opacity: 0 }}>
        <span className="relative top-2 whitespace-pre text-right text-[22px] leading-tight">
          {label}
        </span>
        <span className="text-8xl leading-none">{number}</span>
      </span>
    </div>
  );
};

const Stats = ({ stats }: { stats: Stat[] }) => {
  return (
    <div className="space-y-[1px]">
      {/* Тут теж можемо використовувати index для key у статичних елементах */}
      {stats.map((stats, index) => (
        <Line key={index} index={index} {...stats} />
      ))}
    </div>
  );
};

export default Stats;

"use client";

// Core imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, forwardRef } from "react";
import { ReactNode } from "react";

// Utils
import { getMaxNumber } from "@/utils/getMaxNumber";

type BarProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  label: number;
};
type ChartProps = {
  width: number;
  height: number;
  children: ReactNode;
};
type BarChartProps = { bars: number[] };

const CHART_WIDTH = 1880;
const CHART_HEIGHT = 682;
const LABEL_SIZE = 40;

const Bar = ({ label, x, y, height, width }: BarProps) => {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} className="fill-accent" />
      <text
        // x={x + width / 2}
        // y={y + height + labelSize}
        textAnchor="middle"
        className="fill-accent hidden leading-none lg:block"
        fontSize={LABEL_SIZE / 2}
        x={x + width / 2}
        y={CHART_HEIGHT - height}
        dy={-5}
      >
        {label}
      </text>
    </g>
  );
};

const Chart = forwardRef<SVGSVGElement, ChartProps>(
  ({ width, height, children }, ref) => {
    return (
      <svg
        /* -30 to have a little top padding */
        viewBox={`0 -30 ${width} ${height}`}
        width={width}
        height={height}
        className="flex h-auto w-full items-end"
        ref={ref}
      >
        {children}
      </svg>
    );
  },
);
Chart.displayName = "Chart";

const BarChart = ({ bars }: BarChartProps) => {
  const barMargin = 1;
  const barWidth = (CHART_WIDTH - (barMargin * bars.length - 1)) / bars.length;

  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const barElements = svgRef.current.querySelectorAll("rect");
    const labelElements = svgRef.current.querySelectorAll("text");

    const animationOptions: gsap.TweenVars = {
      duration: 0.7,
      delay: 0.1,
      scrollTrigger: svgElement,
      stagger: 0.05,
      ease: "power1.out",
    };

    // Reveal bars
    gsap.from(barElements, {
      height: 0,
      ...animationOptions,
    });

    gsap.from(barElements, {
      y: CHART_HEIGHT,
      ...animationOptions,
    });

    // Reveal bar labels
    gsap.from(labelElements, {
      y: CHART_HEIGHT,
      ...animationOptions,
    });
  }, [svgRef]);

  // Тут можна використовувати індекси для key prop
  // тому що не передбачено зміну порядку рендера
  // <span> елементів, тобто наш Chart статичний
  return (
    <Chart width={CHART_WIDTH} height={CHART_HEIGHT} ref={svgRef}>
      {bars.map((value, index) => {
        const barHeight = (value * CHART_HEIGHT) / getMaxNumber(bars);

        return (
          <Bar
            key={index}
            x={index * (barWidth + barMargin)}
            y={CHART_HEIGHT - barHeight}
            width={barWidth}
            height={barHeight}
            label={value}
          ></Bar>
        );
      })}
    </Chart>
  );
};

export default BarChart;

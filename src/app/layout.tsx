import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Initialize GSAP
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

// Local fonts
const suisseIntl = localFont({
  src: "../fonts/SuisseIntl-Regular.woff2",
  display: "swap",
  variable: "--font-suisseIntl",
});

export const metadata: Metadata = {
  title: "Respect Studio",
  description:
    "Test task for DOPS.AGENCY developed by Vladyslav Dihtiarenko. Portfolio: https://vddeveloper.online/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${suisseIntl.variable} bg-deepBlue font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

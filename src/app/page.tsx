"use client";

// ScrollTrigger doesn't work
// if registered inside React Server Components
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// UI Home Page Sections
import Hero from "@/components/sections/01_Hero/Hero";
import Growing from "@/components/sections/02_Growing/Growing";
import ConsistentLeads from "@/components/sections/03_Leads/ConsistentLeads";

export default function Home() {
  return (
    <>
      <Hero />
      <Growing />
      <ConsistentLeads />
    </>
  );
}

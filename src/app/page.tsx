"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Card from "./components/Card";
import { ThemeProvider } from "./theme-provider";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Card2 from "./components/Card2";
import Footer from "./components/Footer";

export default function Home() {
  const [cardHeight, setCardHeight] = useState("100vh");
  const headerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  // Calculate and update the card height based on content
  useEffect(() => {
    const calculateHeight = () => {
      // Wait for DOM to be fully rendered
      setTimeout(() => {
        if (
          headerRef.current &&
          heroRef.current &&
          projectsRef.current &&
          workRef.current
        ) {
          // Get the top position of header
          const headerTop =
            headerRef.current.getBoundingClientRect().top + window.scrollY;

          // Get the bottom position of work section
          const workBottom =
            workRef.current.getBoundingClientRect().bottom + window.scrollY;

          // Calculate the total height from header to work section
          const totalHeight = workBottom - headerTop;

          // Set the card height
          setCardHeight(`${totalHeight + 30}px`);
        }
      }, 100);
    };

    // Calculate on initial render
    calculateHeight();

    // Recalculate on window resize
    window.addEventListener("resize", calculateHeight);

    // Cleanup
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="dakshi-theme">
      <div className="min-h-screen p-0 font-[family-name:var(--font-geist-sans)]">
        <div
          className="card-wrapper mr-10 hidden lg:block"
          style={{ height: cardHeight, position: "absolute", top: 0, right: 0 }}
        >
          {/* <Card /> */}
          <Card2 />
        </div>

        <div className="relative">
          <header className="relative z-20 " ref={headerRef}>
            <Header />
          </header>

          <div className="hero-section relative z-0" ref={heroRef} id="hero">
            <Hero />
          </div>
          <hr className="border-t relative w-screen left-[50%] right-[50%] -translate-x-[50%] my-8" />

          <div
            className="relative min-h-[50vh] w-full z-0"
            ref={projectsRef}
            id="projects"
          >
            <Projects />
          </div>

          <hr className="border-t relative w-screen left-[50%] right-[50%] -translate-x-[50%] my-8" />
          <div
            className="relative min-h-[50vh] w-full z-0"
            ref={workRef}
            id="work"
          >
            <Work />
          </div>
          <hr className="border-t relative w-screen left-[50%] right-[50%] -translate-x-[50%] my-8" />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

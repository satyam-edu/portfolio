"use client";

import * as React from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = React.createContext<React.RefObject<Lenis | null> | null>(
  null,
);

export function useLenis() {
  return React.useContext(LenisContext);
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = React.useRef<Lenis | null>(null);

  React.useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });
    lenisRef.current = instance;

    // Keep GSAP's ScrollTrigger in sync with Lenis's smoothed scroll position,
    // and drive Lenis off GSAP's ticker instead of a separate rAF loop so both
    // stay on the same clock.
    instance.on("scroll", ScrollTrigger.update);

    function update(time: number) {
      instance.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      instance.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}

"use client";

import * as React from "react";
import Lenis from "lenis";

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

    let frameId: number;
    function raf(time: number) {
      instance.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      instance.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}

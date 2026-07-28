"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { useScrollTo } from "@/hooks/use-scroll-to";

const HeroCanvas = dynamic(
  () => import("@/components/three/hero-canvas").then((mod) => mod.HeroCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-muted/30 to-transparent" />
    ),
  },
);

export function Hero() {
  const scrollTo = useScrollTo();
  const [showCanvas, setShowCanvas] = React.useState(false);

  React.useEffect(() => {
    // The particle canvas is decorative and its JS chunk is heavy (three.js +
    // R3F) — deferring it until the browser is idle keeps it from competing
    // with the hero copy for main-thread time during first paint.
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(() => setShowCanvas(true), {
        timeout: 1500,
      });
      return () => window.cancelIdleCallback(id);
    }

    const id = window.setTimeout(() => setShowCanvas(true), 200);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {showCanvas && <HeroCanvas />}

      <div className="relative z-10 flex flex-col items-center gap-6">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {profile.title}
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
          {profile.name}
        </h1>
        <p className="max-w-xl text-balance text-muted-foreground sm:text-lg">
          {profile.summary}
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            onClick={(event) => {
              event.preventDefault();
              scrollTo("#projects");
            }}
          >
            View Projects
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={(event) => {
              event.preventDefault();
              scrollTo("#contact");
            }}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}

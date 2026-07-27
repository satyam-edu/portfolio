"use client";

import * as React from "react";

import { useLenis } from "@/components/smooth-scroll-provider";

export function useScrollTo() {
  const lenisRef = useLenis();

  return React.useCallback(
    (href: string, options?: { offset?: number }) => {
      if (!href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

      const lenis = lenisRef?.current;
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, {
          offset: options?.offset ?? -72,
        });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenisRef],
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLenis } from "@/components/smooth-scroll-provider";
import { navItems, type NavItem } from "@/lib/nav-items";
import { profile } from "@/data/profile";

export function Navbar() {
  const lenisRef = useLenis();
  const [open, setOpen] = React.useState(false);

  function handleNavClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    setOpen(false);

    if (!href.startsWith("#")) return;

    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const lenis = lenisRef?.current;
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -72 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="text-lg font-semibold tracking-tight"
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavAnchor
              key={item.href}
              item={item}
              onNavigate={handleNavClick}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            />
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 px-4">
                {navItems.map((item) => (
                  <NavAnchor
                    key={item.href}
                    item={item}
                    onNavigate={handleNavClick}
                    className="text-base font-medium"
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function NavAnchor({
  item,
  onNavigate,
  className,
}: {
  item: NavItem;
  onNavigate: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  className?: string;
}) {
  if (item.href.startsWith("#")) {
    return (
      <a
        href={item.href}
        onClick={(event) => onNavigate(event, item.href)}
        className={className}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={(event) => onNavigate(event, item.href)}
      className={className}
    >
      {item.label}
    </Link>
  );
}

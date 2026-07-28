"use client";

import * as React from "react";
import { useActionState } from "react";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMessage, type ContactFormState } from "@/actions/contact";
import { profile } from "@/data/profile";

const initialState: ContactFormState = { status: "idle", message: "" };

export function Contact() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState,
  );
  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24">
      <div className="rounded-xl border border-border bg-card p-8 sm:p-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Form
        </h2>
        <p className="mt-3 text-muted-foreground">
          Please contact me directly at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-foreground underline underline-offset-4"
          >
            {profile.email}
          </a>{" "}
          or drop your info here.
        </p>

        <form ref={formRef} action={formAction} className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" placeholder="Your Name" required />
              {state.fieldErrors?.name && (
                <p className="text-sm text-destructive">
                  {state.fieldErrors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              {state.fieldErrors?.email && (
                <p className="text-sm text-destructive">
                  {state.fieldErrors.email}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              required
            />
            {state.fieldErrors?.message && (
              <p className="text-sm text-destructive">
                {state.fieldErrors.message}
              </p>
            )}
          </div>

          <p className="text-sm text-muted-foreground">
            I&apos;ll never share your data with anyone else. Pinky promise!
          </p>

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Sending..." : "Send Message"}
            <ChevronRight className="size-4" />
          </Button>

          {state.status !== "idle" && (
            <p
              className={
                state.status === "success"
                  ? "text-sm text-emerald-600 dark:text-emerald-400"
                  : "text-sm text-destructive"
              }
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

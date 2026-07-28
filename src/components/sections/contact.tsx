"use client";

import * as React from "react";
import { useActionState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

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
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Get in touch
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact
        </h2>
        <p className="max-w-md text-balance text-muted-foreground">
          Have a project in mind or just want to say hi? My inbox is open.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4 shrink-0" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="size-4 shrink-0" />
            {profile.phone}
          </a>
          <p className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0" />
            {profile.location}
          </p>
        </div>

        <form ref={formRef} action={formAction} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
            {state.fieldErrors?.name && (
              <p className="text-sm text-destructive">
                {state.fieldErrors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
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

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="What's on your mind?"
              required
            />
            {state.fieldErrors?.message && (
              <p className="text-sm text-destructive">
                {state.fieldErrors.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
            {isPending ? "Sending..." : "Send Message"}
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

import type { Metadata } from "next";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: `Download or preview ${profile.name}'s resume.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-6 py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Resume
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {profile.name}&apos;s Resume
        </h1>
        <Button asChild>
          <a href={profile.resumeUrl} download>
            <Download className="size-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="overflow-hidden rounded-lg border border-border">
        <object
          data={profile.resumeUrl}
          type="application/pdf"
          className="h-[80vh] w-full"
        >
          <p className="p-6 text-center text-sm text-muted-foreground">
            Your browser doesn&apos;t support embedded PDFs.{" "}
            <a href={profile.resumeUrl} className="underline underline-offset-4">
              Download the resume
            </a>{" "}
            instead.
          </p>
        </object>
      </div>
    </div>
  );
}

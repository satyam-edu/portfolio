export default function Home() {
  return (
    <main
      id="home"
      className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Portfolio in progress
      </p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        Satyam
      </h1>
      <p className="max-w-md text-balance text-muted-foreground">
        Full stack developer building fast, production-ready web applications
        with React, Next.js, and TypeScript.
      </p>
    </main>
  );
}

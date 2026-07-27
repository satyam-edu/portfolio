import type { ProjectItem } from "@/types/project";

export const projects: ProjectItem[] = [
  {
    name: "UniTrack – AI Powered Attendance Tracking PWA",
    status: "Live",
    // TODO(Satyam): add live URL
    link: "",
    description: [
      "Built a responsive Progressive Web App with 13+ mobile and desktop screens for attendance management, emphasizing intuitive navigation, responsive layouts, optimistic UI updates, and accessible user experience.",
      "Implemented authentication, attendance workflows, reusable UI components, and AI-assisted features using modern full-stack technologies.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Google Gemini",
    ],
  },
  {
    name: "TripMate – Travel Companion Platform",
    status: "Live",
    // TODO(Satyam): add live URL
    link: "",
    description: [
      "Designed and developed a responsive travel platform with intuitive user journeys for trip discovery, authentication, host dashboards, and trip management.",
      "Built reusable React components and integrated backend services for a scalable and maintainable architecture.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL"],
  },
  {
    name: "Binance Futures Testnet Trading Bot – Python REST API CLI",
    status: "GitHub",
    // TODO(Satyam): add GitHub repo URL
    link: "",
    description: [
      "Built a command-line trading client for Binance Futures USDT-M Testnet using direct REST API integration.",
      "Implemented HMAC-SHA256 request signing, structured logging, configurable order execution, and complete audit trails for trading operations.",
    ],
    stack: ["Python", "REST APIs", "HMAC-SHA256", "argparse", "Logging"],
  },
];

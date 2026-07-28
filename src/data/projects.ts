import type { ProjectItem } from "@/types/project";

export const projects: ProjectItem[] = [
  {
    name: "UniTrack – AI Powered Attendance Tracking PWA",
    status: "Live",
    link: "https://unitrack.dev",
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
    link: "https://tripmate-gamma-two.vercel.app",
    description: [
      "Designed and developed a responsive travel platform with intuitive user journeys for trip discovery, authentication, host dashboards, and trip management.",
      "Built reusable React components and integrated backend services for a scalable and maintainable architecture.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL"],
  },
  {
    name: "Binance Futures Testnet Trading Bot – Python REST API CLI",
    status: "GitHub",
    link: "https://github.com/satyam-edu/Binance-futures-trading-bot.git",
    description: [
      "Built a command-line trading client for Binance Futures USDT-M Testnet using direct REST API integration.",
      "Implemented HMAC-SHA256 request signing, structured logging, configurable order execution, and complete audit trails for trading operations.",
    ],
    stack: ["Python", "REST APIs", "HMAC-SHA256", "argparse", "Logging"],
  },
  {
    name: "Hotel Kamala Inn Grand – Booking Website",
    status: "Live",
    link: "https://www.kamalainngrand.com",
    description: [
      "Built a premium, dark-themed booking website for Hotel Kamala Inn Grand featuring a conversion-optimized guest portal and dynamic media gallery.",
      "Implemented an intelligent room allocation calculator with smooth WhatsApp redirection, using a modular frontend structured for real-time cloud backends.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "North Peak Digital",
    status: "Live",
    link: "https://north-peak-digital-beige.vercel.app/",
    description: [
      "A marketing site for North Peak Digital, a fictional web design & development studio, built as the Web Development submission for the Digital Heroes internship task.",
      "Built with React 19 and Vite, using Motion for scroll-linked reveals and micro-interactions and Lenis for smooth inertia scrolling.",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Motion", "Lenis"],
  },
  {
    name: "Youth Global HQ – Landing Page Prototype",
    status: "Live",
    link: "https://youth-global-hq.vercel.app/",
    description: [
      "A high-fidelity, interactive landing page prototype for Youth Global HQ, India's youth-driven media and creator ecosystem spanning live events, shows, music, and courses.",
      "Built as a client-facing design pitch with working navigation, a filterable events grid, animated stats, and a newsletter form — entirely framework-free, static HTML/CSS/JS.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

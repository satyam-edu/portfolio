import type { ExperienceItem } from "@/types/experience";

export const experience: ExperienceItem[] = [
  {
    company: "Hotel Kamala Inn Grand",
    role: "Freelance Full Stack Developer",
    duration: "Jul 2026",
    // TODO(Satyam): add the hotel site URL
    link: "",
    bullets: [
      "Built a production-ready hotel booking website and admin dashboard covering reservations, room inventory, guest inquiries, and role-based staff administration.",
      "Developed responsive front-end interfaces using React, TypeScript, Supabase Authentication, and PostgreSQL for secure and scalable data management.",
      "Collaborated directly with the client throughout the development lifecycle, gathering requirements, iterating on feedback, and delivering production-ready features.",
    ],
  },
  {
    company: "URLyte",
    role: "Full Stack Developer",
    duration: "Apr 2026 – Jun 2026",
    // TODO(Satyam): add URLyte's site URL
    link: "",
    bullets: [
      "Designed reusable and responsive React.js components, improving UI consistency and reducing development effort across multiple product screens.",
      "Built and integrated REST APIs connecting frontend applications with backend services to enable reliable end-to-end data flow.",
      "Worked with PostgreSQL databases, writing optimized SQL queries and improving application performance.",
      "Implemented JWT authentication, role-based access control (RBAC), code reviews, testing, and bug fixes to maintain application stability.",
    ],
  },
];

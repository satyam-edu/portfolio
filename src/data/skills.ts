import type { SkillCategory } from "@/types/skill";

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C++", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Prisma ORM", "Supabase"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Vercel", "Cloudflare", "Postman", "Render", "Figma"],
  },
  {
    category: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

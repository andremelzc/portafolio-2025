import { defineType, defineField } from "sanity";

export default defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "frontend",
      title: "Frontend",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          "React", "Next.js", "Vue.js", "Angular", "Svelte", "Nuxt.js",
          "JavaScript", "TypeScript", "HTML", "HTML5", "CSS", "CSS3", "Tailwind CSS", "TailwindCSS", "Bootstrap", "Sass", "SCSS", "Styled Components",
        ],
      },
    }),
    defineField({
      name: "backend",
      title: "Backend y DB",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          "Node.js", "Express", "Express.js", "NestJS", "Django", "FastAPI", "Flask", "Spring Boot", "Laravel", "Ruby on Rails",
          "Python", "C++", "PHP", "Rust", "Go", "Swift", "Kotlin",
          "MongoDB", "PostgreSQL", "MySQL", "Redis", "SQLite", "Firebase", "Supabase", "Prisma",
          "GraphQL", "Apollo", "Socket.io",
        ],
      },
    }),
    defineField({
      name: "tools",
      title: "Herramientas y Gestión",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          "Git", "GitHub", "GitLab", "Docker", "Kubernetes", "Jenkins", "GitHub Actions",
          "Webpack", "Vite", "esbuild",
          "Vercel", "Netlify", "AWS", "Google Cloud", "GCP", "Heroku", "DigitalOcean",
          "Jest", "Cypress", "Vitest",
          "Redux", "MobX",
          "Flutter", "Ionic",
          "npm", "Yarn", "pnpm",
          "IntelliJ IDEA", "WebStorm",
          "macOS", "Linux", "Ubuntu",
          "Figma", "Postman", "Notion", "Slack", "Discord",
        ],
      },
    }),
  ],
});
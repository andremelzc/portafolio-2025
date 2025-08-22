import { Project } from "@/app/types/projects";

export const sampleProjects: Project[] = [
  // Proyectos Featured
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description:
      "Dashboard completo para gestión de tienda online con análisis en tiempo real, gestión de inventario y sistema de órdenes. Incluye gráficos interactivos y notificaciones push.",
    primaryImage: "/projects/dashboard-main.jpg",
    secondaryImage: "/projects/dashboard-mobile.jpg",
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Chart.js",
    ],
    demoUrl: "https://dashboard-demo.com",
    codeUrl: "https://github.com/andremelzc/ecommerce-dashboard",
    category: "Full Stack",
    role: "Full Stack",
    teamSize: "Solo",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con colaboración en tiempo real, sistema de notificaciones, drag & drop y integración con calendario. Diseñada para equipos remotos.",
    primaryImage: "/projects/taskapp-desktop.jpg",
    secondaryImage: "/projects/taskapp-kanban.jpg",
    featured: true,
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "Material-UI",
    ],
    demoUrl: "https://taskapp-demo.com",
    codeUrl: "https://github.com/andremelzc/task-manager",
    category: "Full Stack",
  },

  // Proyectos Regulares
  {
    id: "3",
    title: "Weather App",
    description:
      "Aplicación del clima con pronóstico de 7 días, mapas interactivos y alertas meteorológicas.",
    primaryImage: "/projects/weather-app.jpg",
    featured: false,
    technologies: ["React", "OpenWeather API", "CSS Modules"],
    demoUrl: "https://weather-app-demo.com",
    codeUrl: "https://github.com/andremelzc/weather-app",
    category: "Frontend",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "Portfolio personal desarrollado con Next.js 14, sistema de temas y animaciones suaves.",
    primaryImage: "/projects/portfolio.jpg",
    featured: false,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://andremelez.dev",
    codeUrl: "https://github.com/andremelzc/portfolio",
    category: "Frontend",
  },
  {
    id: "5",
    title: "Blog API",
    description:
      "API REST para blog con autenticación JWT, sistema de comentarios y tags.",
    primaryImage: "/projects/api-docs.jpg",
    featured: false,
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    codeUrl: "https://github.com/andremelzc/blog-api",
    category: "Backend",
  },
  {
    id: "6",
    title: "Calculator App",
    description: "Calculadora científica con historial y modo oscuro/claro.",
    primaryImage: "/projects/calculator.jpg",
    featured: false,
    technologies: ["JavaScript", "CSS Grid", "Local Storage"],
    demoUrl: "https://calculator-demo.com",
    codeUrl: "https://github.com/andremelzc/calculator",
    category: "Frontend",
  },
];

// Funciones helper para filtrar proyectos
export const getFeaturedProjects = () =>
  sampleProjects.filter((project) => project.featured);

export const getRegularProjects = () =>
  sampleProjects.filter((project) => !project.featured);

export const getProjectsByCategory = (category: string) =>
  sampleProjects.filter((project) => project.category === category);

export const getProjectById = (id: string) =>
  sampleProjects.find((project) => project.id === id);

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Project } from "@/app/types/projects";

// Query para obtener todos los proyectos
const projectsQuery = groq`
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    description,
    "primaryImage": primaryImage.asset->url,
    "secondaryImage": secondaryImage.asset->url,
    featured,
    technologies,
    demoUrl,
    codeUrl,
    category,
    role,
    teamSize,
    publishedAt
  }
`;

// Query para obtener proyectos destacados
const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    description,
    "primaryImage": primaryImage.asset->url,
    "secondaryImage": secondaryImage.asset->url,
    featured,
    technologies,
    demoUrl,
    codeUrl,
    category,
    role,
    teamSize,
    publishedAt
  }
`;

// Query para obtener proyectos por categoría
const projectsByCategoryQuery = groq`
  *[_type == "project" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    description,
    "primaryImage": primaryImage.asset->url,
    "secondaryImage": secondaryImage.asset->url,
    featured,
    technologies,
    demoUrl,
    codeUrl,
    category,
    role,
    teamSize,
    publishedAt
  }
`;

// Query para obtener un proyecto específico
const projectByIdQuery = groq`
  *[_type == "project" && _id == $id][0] {
    _id,
    title,
    description,
    "primaryImage": primaryImage.asset->url,
    "secondaryImage": secondaryImage.asset->url,
    featured,
    technologies,
    demoUrl,
    codeUrl,
    category,
    role,
    teamSize,
    publishedAt
  }
`;

// Query para obtener las skills (único documento)
const skillsQuery = `*[_type == "skills"][0]{
  frontend,
  backend,
  tools
}`;

// Función para transformar datos de Sanity al formato esperado
function transformSanityProject(sanityProject: any): Project {
  return {
    id: sanityProject._id,
    title: sanityProject.title,
    description: sanityProject.description,
    primaryImage: sanityProject.primaryImage || "/test.png",
    secondaryImage: sanityProject.secondaryImage || "/test.png",
    featured: sanityProject.featured || false,
    technologies: sanityProject.technologies || [],
    demoUrl: sanityProject.demoUrl,
    codeUrl: sanityProject.codeUrl,
    category: sanityProject.category,
    role: sanityProject.role,
    teamSize: sanityProject.teamSize,
  };
}

// Funciones principales para obtener datos
export async function getAllProjects(): Promise<Project[]> {
  try {
    const projects = await client.fetch(projectsQuery);
    return projects.map(transformSanityProject);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const projects = await client.fetch(featuredProjectsQuery);
    return projects.map(transformSanityProject);
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    return [];
  }
}

export async function getRegularProjects(): Promise<Project[]> {
  try {
    const allProjects = await getAllProjects();
    return allProjects.filter((project) => !project.featured);
  } catch (error) {
    console.error("Error fetching regular projects:", error);
    return [];
  }
}

export async function getProjectsByCategory(
  category: string
): Promise<Project[]> {
  try {
    const projects = await client.fetch(projectsByCategoryQuery, { category });
    return projects.map(transformSanityProject);
  } catch (error) {
    console.error("Error fetching projects by category:", error);
    return [];
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const project = await client.fetch(projectByIdQuery, { id });
    return project ? transformSanityProject(project) : null;
  } catch (error) {
    console.error("Error fetching project by id:", error);
    return null;
  }
}

// Función para obtener todas las categorías disponibles
export async function getAvailableCategories(): Promise<string[]> {
  try {
    const categoriesQuery = groq`
      *[_type == "project"] | order(category asc) {
        category
      }
    `;
    const result = await client.fetch(categoriesQuery);
    const categories = [
      ...new Set(result.map((item: any) => item.category).filter(Boolean)),
    ] as string[];
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getSkills() {
  try {
    return await client.fetch(skillsQuery);
  } catch (error) {
    console.error("Error fetching skills from Sanity:", error);
    return { frontend: [], backend: [], tools: [] };
  }
}

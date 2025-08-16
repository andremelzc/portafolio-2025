import { IconType } from 'react-icons'
import { 
  // Frontend Frameworks
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiNuxtdotjs,

  // Languages  
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiPhp,
  SiRust,
  SiGo,
  SiSwift,
  SiKotlin,

  // Backend Frameworks
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiSpringboot,
  SiLaravel,
  SiRubyonrails,

  // Databases
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiSqlite,
  SiFirebase,
  SiSupabase,
  SiPrisma,

  // CSS & Styling
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiStyledcomponents,
  SiCss3,
  SiHtml5,

  // Build Tools
  SiWebpack,
  SiVite,
  SiEsbuild,

  // Cloud & Deployment  
  SiVercel,
  SiNetlify,
  SiAmazon,
  SiGooglecloud,
  SiHeroku,
  SiDigitalocean,

  // Developer Tools
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,

  // Testing
  SiJest,
  SiCypress,
  SiVitest,

  // State Management
  SiRedux,
  SiMobx,

  // Mobile Development
  SiFlutter,
  SiIonic,

  // APIs & Communication
  SiGraphql,
  SiApollographql,
  SiSocketdotio,

  // Package Managers
  SiNpm,
  SiYarn,
  SiPnpm,

  // IDEs & Editors
  SiIntellijidea,
  SiWebstorm,

  // OS
  SiMacos,
  SiLinux,
  SiUbuntu,

  // Other Tools
  SiFigma,
  SiPostman,
  SiNotion,
  SiSlack,
  SiDiscord,
} from 'react-icons/si'

export const techIcons: Record<string, IconType> = {
  // Frontend Frameworks
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Vue.js': SiVuedotjs,
  'Vue': SiVuedotjs,
  'Angular': SiAngular,
  'Svelte': SiSvelte,
  'Nuxt.js': SiNuxtdotjs,

  // Languages
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Python': SiPython,
  'C++': SiCplusplus,
  'PHP': SiPhp,
  'Rust': SiRust,
  'Go': SiGo,
  'Swift': SiSwift,
  'Kotlin': SiKotlin,

  // Backend Frameworks
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'Express.js': SiExpress,
  'NestJS': SiNestjs,
  'Django': SiDjango,
  'FastAPI': SiFastapi,
  'Flask': SiFlask,
  'Spring Boot': SiSpringboot,
  'Laravel': SiLaravel,
  'Ruby on Rails': SiRubyonrails,

  // Databases
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'Redis': SiRedis,
  'SQLite': SiSqlite,
  'Firebase': SiFirebase,
  'Supabase': SiSupabase,
  'Prisma': SiPrisma,

  // CSS & Styling
  'Tailwind CSS': SiTailwindcss,
  'TailwindCSS': SiTailwindcss,
  'Bootstrap': SiBootstrap,
  'Sass': SiSass,
  'SCSS': SiSass,
  'Styled Components': SiStyledcomponents,
  'CSS': SiCss3,
  'CSS3': SiCss3,
  'HTML': SiHtml5,
  'HTML5': SiHtml5,

  // Build Tools
  'Webpack': SiWebpack,
  'Vite': SiVite,
  'esbuild': SiEsbuild,

  // Cloud & Deployment
  'Vercel': SiVercel,
  'Netlify': SiNetlify,
  'AWS': SiAmazon,
  'Google Cloud': SiGooglecloud,
  'GCP': SiGooglecloud,
  'Heroku': SiHeroku,
  'DigitalOcean': SiDigitalocean,

  // Developer Tools
  'Git': SiGit,
  'GitHub': SiGithub,
  'GitLab': SiGitlab,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Jenkins': SiJenkins,
  'GitHub Actions': SiGithubactions,

  // Testing
  'Jest': SiJest,
  'Cypress': SiCypress,
  'Vitest': SiVitest,

  // State Management
  'Redux': SiRedux,
  'MobX': SiMobx,

  // Mobile Development
  'Flutter': SiFlutter,
  'Ionic': SiIonic,

  // APIs & Communication
  'GraphQL': SiGraphql,
  'Apollo': SiApollographql,
  'Socket.io': SiSocketdotio,

  // Package Managers
  'npm': SiNpm,
  'Yarn': SiYarn,
  'pnpm': SiPnpm,

  // IDEs & Editors
  'IntelliJ IDEA': SiIntellijidea,
  'WebStorm': SiWebstorm,

  // OS
  'macOS': SiMacos,
  'Linux': SiLinux,
  'Ubuntu': SiUbuntu,

  // Other Tools
  'Figma': SiFigma,
  'Postman': SiPostman,
  'Notion': SiNotion,
  'Slack': SiSlack,
  'Discord': SiDiscord,
}

// Helper function para obtener ícono con fallback
export const getTechIcon = (tech: string): IconType | null => {
  return techIcons[tech] || null
}

// Helper para verificar si una tecnología tiene ícono
export const hasTechIcon = (tech: string): boolean => {
  return tech in techIcons
}

// Obtener todas las tecnologías disponibles
export const getAvailableTechs = (): string[] => {
  return Object.keys(techIcons)
}

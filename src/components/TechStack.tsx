import Title from "@/components/Title";
import {
  FaCss3,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaJava,
} from "react-icons/fa6";
import {
  RiBearSmileFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiAstro,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMui,
  SiNextdns,
  SiPostgresql,
  SiPrisma,
  SiPwa,
  SiRedux,
  SiShadcnui,
  SiStyledcomponents,
  SiSupabase,
  SiTurborepo,
  SiWeb3Dotjs,
} from "react-icons/si";
import { TbBrandTypescript, TbBrandVite } from "react-icons/tb";

export default function TechStack() {
  return (
    <div>
      <Title>What I work with</Title>
      <div>
        <ul className="list-disc">
          {techStack.map((cat) => {
            return (
              <li key={cat.title} className="my-10">
                <h3 className="text-muted-foreground">{cat.title}</h3>
                <ul className="flex gap-14 text-xl flex-wrap p-10 my-3 ">
                  {cat.technologies.map((tech) => (
                    <li key={tech.name} className="flex items-center gap-1 ">
                      <p className="text-5xl">{tech.icon}</p>
                      <p className="text-muted-foreground text-base lowercase">
                        {tech.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const techStack = [
  {
    title: "The Basics ",
    icon: "⚡",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3 /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <TbBrandTypescript /> },
      { name: "Web3 JS", icon: <SiWeb3Dotjs /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
  },
  {
    title: "Power Moves ",
    icon: "🔥",
    technologies: [
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "Astro", icon: <SiAstro /> },
      { name: "React", icon: <FaReact /> },
      { name: "Vite", icon: <TbBrandVite /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    title: "Cool Add-ons ",
    icon: "🎁",
    technologies: [
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "Styled Components", icon: <SiStyledcomponents /> },
      { name: "Material UI", icon: <SiMui /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "Shadcn", icon: <SiShadcnui /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "monorepos", icon: <SiTurborepo /> },
      { name: "NextAuth", icon: <SiNextdns /> },
      { name: "Zustand", icon: <RiBearSmileFill /> },
      { name: "Progressive Web App", icon: <SiPwa /> },
    ],
  },
];

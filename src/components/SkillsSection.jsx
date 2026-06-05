import { useState } from "react";
import { cn } from "@/lib/utils";

// Import your brand icons from FontAwesome (fa) bundles
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaJava, // Safer and cleaner export for the Java logo
} from "react-icons/fa";

// Import your brand icons from SimpleIcons (si) bundles
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

// Import Mobile/React Native icon alternatives
import { TbBrandReactNative } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

const skills = [
  // Languages & Core Backend
  {
    name: "Java",
    icon: <FaJava className="text-[#E44D26]" />, // Official Java red/orange accent
    category: "backend",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="text-[#6DB33F]" />,
    category: "backend",
  },

  // Frontend
  {
    name: "HTML/CSS",
    icon: <FaHtml5 className="text-[#E34F26]" />,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    category: "frontend",
  },
  {
    name: "React",
    icon: <FaReact className="text-[#61DAFB]" />,
    category: "frontend",
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative className="text-[#61DAFB]" />,
    category: "frontend", // Categorized under frontend/mobile display
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" />,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-foreground" />,
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#339933]" />,
    category: "backend",
  },
  {
    name: "Express",
    icon: <SiExpress className="text-foreground" />,
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248]" />,
    category: "backend",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-[#4479A1]" />,
    category: "backend",
  },

  // Tools
  {
    name: "Git/GitHub",
    icon: <FaGitAlt className="text-[#F05032]" />,
    category: "tools",
  },
  {
    name: "Docker",
    icon: <FaDocker className="text-[#2496ED]" />,
    category: "tools",
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-[#F24E1E]" />,
    category: "tools",
  },
  {
    name: "VS Code",
    icon: <VscCode className="text-[#007ACC]" />,
    category: "tools",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover border border-border/40 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-left">
                <div className="flex items-center gap-4">
                  <div className="text-3xl flex-shrink-0">{skill.icon}</div>
                  <h3 className="font-semibold text-lg"> {skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "I-Computers",
    description:
      "A complete e-commerce solution for computer hardware and accessories. (Solo Project)",
    image: "/Projects/Screenshot 2026-02-14 121120.png",
    tags: ["Node.js", "Express.js", "React", "TailwindCSS", "MongoDB"],
    demoUrl: "https://i-computers-frontend-seven-kappa.vercel.app/",
    githubUrl: "https://github.com/AnushkaWijerathna/i-computers-frontend.git",
  },
  {
    id: 2,
    title: "UniMerch",
    description:
      "full-stack e-commerce platform designed to deliver a seamless and scalable online shopping experience. (Group Project)",
    image: "/Projects/Screenshot 2026-06-05 223854.png",
    tags: ["Java", "Spring Boot", "React", "MongoDB"],
    githubUrl: "https://github.com/nimsala1234/UniMerch.git",
  },
  {
    id: 3,
    title: "Traveler",
    description:
      "This lets users organize travel details and visualize their destinations on an interactive 3D globe. (Solo Project)",
    image: "/Projects/Screenshot 2026-03-14 142542.png",
    tags: ["Next.js", "React", "Prisma ORM", "NextAuth.js", "Neon"],
    githubUrl: "https://github.com/AnushkaWijerathna/Traveler.git",
  },
  {
    id: 4,
    title: "BoardVista",
    description:
      "A platform to view, book or create boarding places for university students. (Group Project)",
    image: "/Projects/WhatsApp Image 2026-06-05 at 22.35.52.jpeg",
    tags: ["React Native", "JavaScript", "TypeScript", "MongoDB Atlas"],
    githubUrl: "https://github.com/Board-Vista/BoardVista.git",
  },
  {
    id: 5,
    title: "ArchiGen",
    description:
      "An AI-powered SaaS that automatically transforms 2D floor plans into photorealistic 3D architectural renders. (Solo Project)",
    image: "/Projects/Screenshot 2026-04-04 112120.png",
    tags: ["React", "TypeScript", "Puter.js", "KV DB", "Gemini API"],
    githubUrl: "https://github.com/AnushkaWijerathna/ArchiGen.git",
  },
  {
    id: 6,
    title: "Movie App",
    description:
      "A movie app to browse and search for movies, view details. (Solo Project)",
    image: "/Projects/Screenshot 2026-06-05 222057.png",
    tags: ["React Native", "Expo", "TypeScript", "Firebase"],
    githubUrl:
      "https://github.com/AnushkaWijerathna/movie-app-using-typescript-and-expo-react.git",
  },
];

// --- Currently Building Projects Array ---
const inProgressProjects = [
  {
    id: 1,
    title: "AI Interview Mocking Platform",
    description:
      "An interactive web app that simulates technical interviews using LLMs to provide real-time feedback and scoring.",
    tags: ["Next.js", "TailwindCSS", "OpenAI API", "PostgreSQL"],
    githubUrl: "https://github.com/AnushkaWijerathna/ai-mock-interview",
  },
  // Add more ongoing projects here...
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-xl overflow-hidden shadow-xs card-hover flex flex-col h-full border border-border/40"
            >
              <div className="h-48 overflow-hidden flex-shrink-0 relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium border border-border/50 rounded-full bg-secondary/50 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-3 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center space-x-5 mt-auto pt-6 border-t border-border/40">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-transform duration-300 hover:-translate-y-1"
                      title="Live Demo"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}

                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-transform duration-300 hover:-translate-y-1"
                      title="GitHub Repository"
                    >
                      <FaGithub size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Currently Building Section --- */}
        {inProgressProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              {/* Green Dimming/Pulsing Bullet Point */}
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-center">
                Currently <span className="text-emerald-500">Building</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {inProgressProjects.map((project, key) => (
                <div
                  key={key}
                  className="bg-card p-6 rounded-lg shadow-xs border border-emerald-500/30 hover:border-emerald-500/70 transition-colors duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium border border-border/50 rounded-full bg-secondary/50 text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border/50 flex justify-end">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground/80 hover:text-emerald-500 transition-colors duration-300"
                    >
                      <FaGithub size={18} /> View Repository
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-3 py-3 px-6 text-base"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AnushkaWijerathna"
          >
            Check My Github <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

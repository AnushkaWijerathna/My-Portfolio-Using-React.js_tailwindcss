import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center flex-col px-4"
    >
      <div className="container max-w-4xl mx-auto z-10 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-glow text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Anushka
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Wijerathna
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            {/* I am an aspiring Software Engineer in my final year of a
            <span className="text-primary font-bold text-glow">
              {" "}
              B.Sc. in IT
            </span>
            . I have a good foundational background in building end-to-end
            applications through university and personal projects, and a strong
            desire to learn. I am eager to transition into the industry, where I
            can learn from experienced professionals, adapt to new technologies,
            and contribute to meaningful projects while growing my skills. */}
            I am an aspiring Software Engineer looking to kickstart my career in
            the tech industry. As an entry-level developer, I am eager to join
            the industry to learn from professionals, adapt to new technologies,
            and develop my practical skills.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      {/* Decorative Elements --> Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="text-primary" />
      </div>
    </section>
  );
};

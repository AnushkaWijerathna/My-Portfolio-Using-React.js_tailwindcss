export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container max-w-5xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About
          <span className="text-glow text-primary"> Me</span>
        </h2>

        {/*Divide the section into 2 sections: First Section about me and the downloadable CV */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              Aspiring Software Engineer
            </h3>
            <p className="text-muted-foreground">
              I am a final-year B.Sc. in Information Technology student with a
              deep passion for building software and a desire to learn from the
              industry. Throughout my academic journey, I have developed a good
              foundational background in crafting end-to-end applications,
              working on both standalone personal passion projects and
              collaborative, team-driven university solutions.
            </p>

            <p className="text-muted-foreground">
              As an entry-level developer eager to expand my horizon, I am now
              looking for an internship opportunity where I can adapt to
              professional workflows, learn from experienced mentors, and
              contribute my skills to real-world development projects.
            </p>

            <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>

              <a
                href="/ADMS(T).pdf"
                download="Anushka_Wijerathna_CV.pdf"
                className="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary/30 transition-colors duration-300 "
              >
                download CV
              </a>
            </div>
          </div>
          {/*Divide the section into 2 sections: Second Section with Skills and Interests */}
        </div>
      </div>
    </section>
  );
};

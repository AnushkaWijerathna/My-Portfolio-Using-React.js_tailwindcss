import { GraduationCap, Award, Rocket, Briefcase } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="relative py-24 px-4 bg-secondary/10">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary text-glow">Qualifications</span>
        </h2>

        {/* Outer 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Section: Academic Path & Future Goals */}
          <div className="space-y-6">
            {/* Academic Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                    Current Study
                  </span>
                  <h4 className="font-semibold text-lg leading-snug">
                    B.Sc. in Information Technology
                  </h4>
                  <p className="text-sm font-medium text-foreground/80">
                    University of Vavuniya, Sri Lanka
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2021/22 - Present | Final Year Undergraduate
                  </p>
                </div>
              </div>
            </div>

            {/* Future Intents Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left space-y-3 w-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Future Roadmap
                  </span>

                  <h4 className="font-semibold text-lg">
                    Continuous Learning Goals
                  </h4>

                  {/* Bulleted Roadmap - Brief and on point */}
                  <ul className="space-y-3 text-muted-foreground text-sm pt-1">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 text-xs">◆</span>
                      <span>
                        <strong className="text-foreground font-medium">
                          Enterprise Java Ecosystem:
                        </strong>{" "}
                        Mastering Java Spring Boot to build robust backends,
                        paired with modern front-end frameworks like React and
                        Angular.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 text-xs">◆</span>
                      <span>
                        <strong className="text-foreground font-medium">
                          Modern Full-Stack Development:
                        </strong>{" "}
                        Continuously expanding web development skills by
                        exploring scalable frameworks and ecosystems like the
                        MERN stack and Next.js.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 text-xs">◆</span>
                      <span>
                        <strong className="text-foreground font-medium">
                          Cloud & DevOps:
                        </strong>{" "}
                        Transitioning into infrastructure design by learning
                        AWS,Azure, CI/CD pipelines, and containerization.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 text-xs">◆</span>
                      <span>
                        <strong className="text-foreground font-medium">
                          Industry Best Practices:
                        </strong>{" "}
                        Mastering scalable system architecture, clean coding
                        standards, and agile production workflows.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                    Experience
                  </span>
                  <ul className="space-y-4">
                    {/* Job 1 */}
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-xs flex-shrink-0">
                        ◆
                      </span>
                      <div className="text-left">
                        <h4 className="text-foreground font-medium text-base">
                          Pharmaceutical Representative
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Galle Drugs | May 2022 - August 2022
                        </p>
                      </div>
                    </li>

                    {/* Job 2 */}
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-xs flex-shrink-0">
                        ◆
                      </span>
                      <div className="text-left">
                        <h4 className="text-foreground font-medium text-base">
                          Restaurant Manager
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Golden Pearl Restaurant & Bar | September 2022 - July
                          2023
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Earned Certifications */}
          <div className="gradient-border p-6 card-hover h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-primary/10 p-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold">Certifications</h3>
                <p className="text-xs text-muted-foreground">
                  Verified academic milestones
                </p>
              </div>
            </div>

            {/* Vertical List stack for Certifications */}
            <div className="space-y-4 ">
              {/* Cert 1 */}
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/40 hover:border-primary/30 transition-all duration-300 flex items-start justify-between gap-4 text-left">
                <div className="space-y-1">
                  <h5 className="font-semibold text-base text-foreground leading-tight">
                    Full-Stack Web Development
                  </h5>
                  <p className="text-xs text-muted-foreground">
                    Skyrek Academy
                  </p>
                  {/* <a href="/Certificates/MERN.png" className="cosmic-button">
                    View Certificate
                  </a> */}
                </div>
                <span className="text-[10px] font-bold tracking-wide uppercase text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  Verified
                </span>
              </div>

              {/* Cert 2 */}
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/40 hover:border-primary/30 transition-all duration-300 flex items-start justify-between gap-4 text-left">
                <div className="space-y-1">
                  <h5 className="font-semibold text-base text-foreground leading-tight">
                    Introduction to SQL
                  </h5>
                  <p className="text-xs text-muted-foreground">SoloLearn</p>
                </div>
                <span className="text-[10px] font-bold tracking-wide uppercase text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  Verified
                </span>
              </div>

              {/* Cert 3 */}
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/40 hover:border-primary/30 transition-all duration-300 flex items-start justify-between gap-4 text-left">
                <div className="space-y-1">
                  <h5 className="font-semibold text-base text-foreground leading-tight">
                    JavaScript Intermediate
                  </h5>
                  <p className="text-xs text-muted-foreground">SoloLearn</p>
                </div>
                <span className="text-[10px] font-bold tracking-wide uppercase text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  Verified
                </span>
              </div>
              {/* Cert 4 */}
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/40 hover:border-primary/30 transition-all duration-300 flex items-start justify-between gap-4 text-left">
                <div className="space-y-1">
                  <h5 className="font-semibold text-base text-foreground leading-tight">
                    TypeScript Programming
                  </h5>
                  <p className="text-xs text-muted-foreground">
                    Scholarhat Academy
                  </p>
                </div>
                <span className="text-[10px] font-bold tracking-wide uppercase text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  Verified
                </span>
              </div>
              {/* Cert 5 */}
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/40 hover:border-primary/30 transition-all duration-300 flex items-start justify-between gap-4 text-left">
                <div className="space-y-1">
                  <h5 className="font-semibold text-base text-foreground leading-tight">
                    API beginner
                  </h5>
                  <p className="text-xs text-muted-foreground">
                    Postman Academy
                  </p>
                </div>
                <span className="text-[10px] font-bold tracking-wide uppercase text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  Verified
                </span>
              </div>

              {/* Cert 5 */}
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/40 hover:border-primary/30 transition-all duration-300 flex items-start justify-between gap-4 text-left">
                <div className="space-y-1">
                  <h5 className="font-semibold text-base text-foreground leading-tight">
                    Full Stack Java Development
                  </h5>
                  <p className="text-xs text-muted-foreground">
                    Simplilearn Academy
                  </p>
                </div>
                <span className="text-[10px] font-bold tracking-wide uppercase text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  Following
                </span>
              </div>

              {/* Cert 5 */}
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/40 hover:border-primary/30 transition-all duration-300 flex items-start justify-between gap-4 text-left">
                <div className="space-y-1">
                  <h5 className="font-semibold text-base text-foreground leading-tight">
                    Azure fundamentals
                  </h5>
                  <p className="text-xs text-muted-foreground">
                    Simplilearn Academy
                  </p>
                </div>
                <span className="text-[10px] font-bold tracking-wide uppercase text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  Following
                </span>
              </div>

              {/* Cert 5 */}
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/40 hover:border-primary/30 transition-all duration-300 flex items-start justify-between gap-4 text-left">
                <div className="space-y-1">
                  <h5 className="font-semibold text-base text-foreground leading-tight">
                    AWS Cloud Technical Essentials
                  </h5>
                  <p className="text-xs text-muted-foreground">Coursera</p>
                </div>
                <span className="text-[10px] font-bold tracking-wide uppercase text-red-500 bg-red-500/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  Planned
                </span>
              </div>
            </div>
            <div className="mt-10 mb-8">
              <a
                href="/Certificates.zip"
                download="Academic Certificates Anushka.zip"
                className="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary/30 transition-colors duration-300 "
              >
                View Certificates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Networking",
  "VPN",
  "Load Balancing",
  "Policy Based Route",
  "7 Layers Protocol",
  "Virtualization",
  "Configuration",
  "Bash/Shell",
  "Troubleshooting",
  "Operating System",
  "Linux",
  "Javascript",
  "PHP",
  "Laravel",
  "Filament",
  "Mysql",
  "HTML",
  "CSS",
  "Bootstrap",
  "Apache/Nginx",
  "Cloudflare",
  "Docker",
  "SSL/TLS",
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 px-6 bg-background text-foreground">
      <div className="max-w-screen-md mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          My Skills
        </Badge>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">My Skills</h2>
        <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">A collection of technologies and tools I work with daily</p>

        {/* Skills Grid */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <div key={index} className="rounded-lg bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

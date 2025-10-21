import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface CertificatetCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Certificatecard = ({ title, description, image, technologies, liveUrl, githubUrl }: CertificatetCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center">
        <Image src={image} alt={title} className="object-contain transition-transform duration-300 group-hover:scale-105 p-5 mt-2" fill />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Show Credentials
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" className="rounded-full shadow-none" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Certificate = () => {
  const certificate = [
    {
      title: "Technical Support Basics",
      description: "Learned core IT support skills including troubleshooting, system maintenance, and customer assistance.",
      image: "/images/certificated/google.jpg",
      technologies: ["Google", "Coursera"],
      liveUrl: "https://coursera.org/verify/K6K3V3QEE5NT",
    },
    {
      title: "Introduction to Technical Support",
      description: "Gained foundational knowledge of IT support principles and service management practices.",
      image: "/images/certificated/ibm.jpg",
      technologies: ["IBM", "Coursera"],
      liveUrl: "https://coursera.org/verify/4QWG2T2DD3BY",
    },
    {
      title: "Learn Computer Networks for Beginners",
      description: "Studied the fundamentals of computer networking, IP addressing, and data transmission.",
      image: "/images/certificated/dicoding.jpg",
      technologies: ["ID Camp", "Dicoding"],
      liveUrl: "https://www.dicoding.com/certificates/0LZ0QEW60Z65",
    },
    {
      title: "Learn DevOps Fundamentals",
      description: "Explored DevOps concepts, CI/CD pipelines, and automation for modern software deployment.",
      image: "/images/certificated/dicoding2.jpg",
      technologies: ["ID Camp", "Dicoding"],
      liveUrl: "https://www.dicoding.com/certificates/4EXG4O60DPRL",
    },
    {
      title: "Desktop IT Support Level 1 & 2 in Real Life",
      description: "Hands-on training in hardware troubleshooting, OS installation, and desktop support workflows.",
      image: "/images/certificated/udemy.jpg",
      technologies: ["Tareq Tech", "Udemy"],
      liveUrl: "https://www.udemy.com/certificate/UC-2e95edd4-f26c-4941-a9df-f5d79d86404e/",
    },
    {
      title: "Mastering Docker from Basics to Practice",
      description: "Learned Docker fundamentals, image management, and container deployment for development environments.",
      image: "/images/certificated/docker.jpg",
      technologies: ["Tri Wicaksono", "Buildwithangga"],
      liveUrl: "#",
    },
  ];

  return (
    <section id="certificate" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Certificates
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Certificate Finishup</h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">Showcasing some of my best certificate and growth achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificate.map((project, index) => (
            <Certificatecard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;

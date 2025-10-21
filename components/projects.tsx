import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) => {
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
                Live Demo
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

const Projects = () => {
  const projects = [
    {
      title: "Web App Landing page",
      description: "Creating a WebApp-Based Company Profile for NoFileExistsHere, with content accessible through an admin panel and customizable as needed.",
      image: "/images/project/page.png",
      technologies: ["PHP", "Laravel", "Filament", "Livewire", "Mysql", "Redis", "Tailwind", "Bootstrap"],
      liveUrl: "https://www.nofileexistshere.my.id/",
      // githubUrl: "https://github.com/username/ecommerce",
    },
    {
      title: "Pesonal portfolio",
      description: "Creating and updating a personal portfolio to be more modern and minimalist, with eye-catching animations.",
      image: "/images/project/about.png",
      technologies: ["React", "NextJS", "Tailwind", "NodeJS"],
      liveUrl: "https://about.wikiarlianm.com",
      githubUrl: "https://github.com/wikidotexe/portfolio-update",
    },
    {
      title: "Landing Page",
      description: "I created a responsive landing page for CV Berkah Teknik Mandiri, an engineering and construction services company.",
      image: "/images/project/cvberkah.png",
      technologies: ["PHP", "CSS", "Javascript", "Bootstrap", "Mysql"],
      liveUrl: "https://cv-teknikmandiri.vercel.app/",
      githubUrl: "https://github.com/wikidotexe/cv-teknikmandiri",
    },
    {
      title: "Cloud Computing",
      description: "Setting Up a Home Server self-hosted Using NextCloud with the Linux Ubuntu Server Operating System.",
      image: "/images/project/cloud.png",
      technologies: ["Nextcloud", "Docker", "Mysql", "Nginx", "Linux", "Cloudflare", "Redis"],
      liveUrl: "https://nextcloud.com/instant-trial/",
      // githubUrl: "https://github.com/nextcloud",
    },
    {
      title: "Setup New Device Server",
      description: "Deployed Mikrotik RB1100 HX2 at PT BON CAFE INDONESIA with 1Gbps speed and support for 50+ users, enabling smooth collaboration and file sharing.",
      image: "/images/project/cafe.png",
      technologies: ["Mikrotik", "Winbox", "Ruijie", "TP-Link", "Cisco Packet Tracer", "Windows Sever", "WHM", "Mail Server"],
      // liveUrl: "",
      // githubUrl: "",
    },
    {
      title: "Installation Device Server",
      description: "Deployed Mikrotik RB1100 HX2 at PT Smartec Teknologi Indonesia with 1Gbps speed, supporting 100+ users and seamless file sharing.",
      image: "/images/project/smartec.png",
      technologies: ["Mikrotik", "Winbox", "TP-Link", "Cisco Packet Tracer", "Wireshark"],
      // liveUrl: "",
      // githubUrl: "",
    },
    {
      title: "Grafana, Network & Server Monitoring",
      description: "Deployed Grafana with Prometheus, Node Exporter, and SNMP to monitor MikroTik networks and servers in real-time, ensuring optimal performance.",
      image: "/images/project/grafana.png",
      technologies: ["Mikrotik", "Winbox", "Docker", "Linux", "SNMP", "Synology", "Nginx Reverse Proxy", "Grafana", "Prometheus", "Node Exporter"],
      // liveUrl: "",
      // githubUrl: "",
    },
    {
      title: "Mikrotik Hotspot Monitoring",
      description: "Implemented and configured Synology NAS at PT Lizzie Parra Kreasi (BLP Beauty), delivering advanced storage solutions.",
      image: "/images/project/mikhmon.png",
      technologies: ["Mikrotik", "Winbox", "Rest-API", "Webserver", "Nginx Reverse Proxy", "SSL/TLS", "Certificate", "DHCP Server", "Port-forwarding"],
      liveUrl: "https://mikhmon.comonet.id/admin.php?id=login",
      githubUrl: "https://github.com/laksa19/mikhmonv3",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Featured Work</h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">Showcasing some of my best projects and technical achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

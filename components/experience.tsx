import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({ title, company, period, description, technologies }: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "IT Support & System",
      company: "Saff & Co.",
      period: "2025 - Present",
      description:
        "Managed network infrastructure, server configurations, and end-user systems across multiple locations. Deployed VPN and firewall solutions, maintained private cloud environments, and provided on-site and remote technical support for business operations.",
      technologies: ["Ubiquiti", "Synology", "Linux", "Rustdesk", "Network", "OpenVPN", "WSL", "Docker", "Shopify", "Cloudflare"],
    },
    {
      title: "IT Support",
      company: "BLP Beauty",
      period: "2021 - 2025",
      description:
        "Managed network infrastructure, server configurations, and end-user systems across multiple locations. Deployed VPN and firewall solutions, maintained private cloud environments, and provided on-site and remote technical support for business operations.",
      technologies: ["MikroTik", "Synology NAS", "Linux", "Rustdesk", "Network", "OpenVPN", "WSL", "Docker", "Shopify", "Cloudflare"],
    },

    {
      title: "IT Technician",
      company: "PT. Smartindo Integrasi System",
      period: "2020 - 2021",
      description: "Performed hardware and software troubleshooting, handled pre-shipment quality checks, configured operating systems, and ensured data integrity through backups and recovery operations.",
      technologies: ["Windows", "Linux", "Hardware", "Software", "Network"],
    },
    {
      title: "IT Support Technician",
      company: "Digital Alliance ID",
      period: "Nov 2018 - Dec 2018",
      description: "Troubleshooted and repaired computer hardware, diagnosed network issues, and ensured all refurbished devices met performance and quality standards.",
      technologies: ["Windows", "Mikrotik", "Remote Desktop", "Software", "Hardware"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Professional Journey</h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">A timeline of my professional growth and key achievements</p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

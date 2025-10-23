"use client";

import { Separator } from "@/components/ui/separator";
import { Logo } from "../components/navbar/logo";
import { GithubLogo, LinkedinLogo } from "./icons";

const footerLinks = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Certificate", href: "#certificate" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];

const Footer = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="mt-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section atas: Logo + link navigasi */}
        <div className="py-12 flex flex-col justify-start items-center text-center">
          <Logo />

          {/* Link navigasi footer */}
          <ul className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm sm:text-base">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <a href={href} onClick={(e) => handleScroll(e, href.replace("#", ""))} className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Section bawah: copyright + social */}
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-4 gap-y-5 text-center sm:text-left">
          <span className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} wikidotexe. All rights reserved.</span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com/wikidotexe" target="_blank" rel="noopener noreferrer">
              <GithubLogo className="h-5 w-5 hover:text-foreground transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/dwiki-arlian-maulana-852b14209/details/certifications/" target="_blank" rel="noopener noreferrer">
              <LinkedinLogo className="h-5 w-5 hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

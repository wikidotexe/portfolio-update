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
  // fungsi buat smooth scroll
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          <Logo />

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
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

        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">&copy; {new Date().getFullYear()} wikidotexe. All rights reserved.</span>

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

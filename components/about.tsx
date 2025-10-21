import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Delivering reliable and efficient IT systems</h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Hey, I’m Dwiki Arlian Maulana, an IT Support & System Engineer with 4 years of hands-on experience. I thrive on solving tough technical problems, managing servers, and designing networks that just work. Whether it’s optimizing
              infrastructure, automating processes, or securing systems — I make sure everything runs smooth and efficient.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Button asChild className="rounded-full">
                <a href="https://github.com/wikidotexe" target="_blank" rel="noopener noreferrer">
                  <GithubLogo className="mr-2" />
                  View Github
                </a>
              </Button>

              <Button asChild variant="outline" className="rounded-full">
                <a href="https://drive.wikiarlianm.com/d/s/156OVXXh6z7FeJ8qz3U4e9Gesn7C7M2i/p11ZwT3OxUclXGQU8QYAAKDplqqDtbkW-Sb7gB9s3mww" target="_blank">
                  <ExternalLink className="mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/images/profile/wiki2.jpg" alt="Dwiki Arlian Maulana" className="object-cover" fill priority />
    </div>
  </div>
);
export default About;

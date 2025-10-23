"use client";

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern numSquares={30} maxOpacity={0.1} duration={3} className={cn("mask-[radial-gradient(500px_circle_at_center,white,transparent)]", "inset-x-0 h-full skew-y-12")} />
      <div className="relative z-1 text-center max-w-3xl">
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          System Engineer
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2]! tracking-tight">Dwiki Arlian Maulana</h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Hey there! I&apos;m Dwiki Arlian Maulana, an IT Support &amp; System Engineer with 4 years of experience. I&apos;m passionate about keeping systems running smoothly, solving complex tech issues, and optimizing network performance.
          From troubleshooting to infrastructure management, I make sure everything just works — fast, secure, and reliable. Let&apos;s build something awesome together! 🚀
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full text-base"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See What I Do <CircleArrowDown className="ml-2 h-5.5! w-5.5!" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

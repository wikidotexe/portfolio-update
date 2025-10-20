import About from "@/components/about";
import Experience from "@/components/experience";
import Certificate from "@/components/certificate";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <About />
      <Experience />
      <Certificate />
      <Projects />
    </div>
  );
}

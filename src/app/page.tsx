import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { StackedProjects } from "@/components/sections/stacked-projects";
import { Skills } from "@/components/sections/skills";
import { Writing } from "@/components/sections/writing";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden">
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <StackedProjects />
      <Skills />
      <Writing />
      <Contact />
    </div>
  );
}

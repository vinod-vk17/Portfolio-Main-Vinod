import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { useProfile } from "@/hooks/use-portfolio";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { isLoading, error } = useProfile();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-red-500">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p>Failed to load profile data.</p>
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary/20 selection:text-primary-foreground">
      <Navbar />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}

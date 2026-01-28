import { Section } from "./Section";
import { useProfile } from "@/hooks/use-portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Coffee, Send } from "lucide-react";

export function Contact() {
  const { data: profile } = useProfile();

  if (!profile) return null;

  const socialLinks = profile.socialLinks as { 
    email?: string; 
    github?: string; 
    linkedin?: string; 
    buyMeACoffee?: string 
  };

  return (
    <Section id="contact" number="05" title="What's next?" className="bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating on ML/AI projects, LLM agents, or data science solutions? 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name *</label>
                <Input placeholder="Your first name" className="bg-card border-muted" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name *</label>
                <Input placeholder="Your last name" className="bg-card border-muted" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email *</label>
              <Input type="email" placeholder="your.email@example.com" className="bg-card border-muted" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject *</label>
              <Input placeholder="Project discussion" className="bg-card border-muted" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message *</label>
              <Textarea 
                placeholder="Tell me about your project..." 
                className="min-h-[150px] bg-card border-muted"
              />
              <p className="text-xs text-muted-foreground">Minimum 10 characters (0/10)</p>
            </div>
            <Button className="w-full bg-[#10b981] hover:bg-[#059669] text-white py-6 text-lg font-semibold">
              <Send className="mr-2 h-5 w-5" /> Send Message
            </Button>
          </div>

          {/* Right Column: Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently open to exciting opportunities in machine learning, AI, and data science. 
                Whether you need an LLM agent, a production ML system, or technical leadership for your project, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:vinodkumar.prakash17@gmail.com" className="block group">
                <Card className="bg-card border-muted group-hover:border-primary transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500/20">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">Email</p>
                      <p className="text-sm font-medium">vinodkumar.prakash17@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="https://github.com/vinod-vk17" target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="bg-card border-muted group-hover:border-primary transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20">
                      <Github className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">GitHub</p>
                      <p className="text-sm font-medium">github.com/vinod-vk17</p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="https://www.linkedin.com/in/vinod-kumar-prakash/" target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="bg-card border-muted group-hover:border-primary transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">LinkedIn</p>
                      <p className="text-sm font-medium">linkedin.com/in/vinod-kumar-prakash</p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="https://buymeacoffee.com/vinod.prakash17" target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="bg-card border-muted group-hover:border-primary transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-green-500/10 text-green-500 group-hover:bg-green-500/20">
                      <Coffee className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">Buy Me a Coffee</p>
                      <p className="text-sm font-medium">buymeacoffee.com/vinod.prakash17</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-muted py-8 text-center text-sm font-mono text-muted-foreground">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>
    </Section>
  );
}

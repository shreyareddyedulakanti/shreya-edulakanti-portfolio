import { Linkedin, Github, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const titles = [
  "Web Developer",
  "Full-Stack Developer",
  "Front-End Developer",
  "AI Enthusiast",
  "Curious Coder"
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-12 animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center shadow-2xl border-4 border-background overflow-hidden group-hover:scale-105 transition-transform duration-300">
              {/* Replace the content below with an actual image: <img src="your-image-url" alt="Shreya Edulakanti" className="w-full h-full object-cover" /> */}
              <div className="text-white text-5xl md:text-6xl font-bold">SE</div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-6">
            {/* Main Heading */}
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                  Shreya Edulakanti
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium min-h-[2rem] transition-all duration-500">
                {titles[currentTitleIndex]}
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all hover-scale group">
                <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                LinkedIn
              </Button>
              <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all hover-scale group">
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                GitHub
              </Button>
              <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all hover-scale group">
                <Twitter className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Twitter
              </Button>
              <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all hover-scale group">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

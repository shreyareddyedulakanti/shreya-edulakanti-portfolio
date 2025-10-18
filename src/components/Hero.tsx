import { Linkedin, Github, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
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
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-foreground mb-2">Hi, I'm a</span>
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Web Developer
            </span>
          </h1>

          {/* Social Media Links */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
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
    </section>
  );
};

export default Hero;

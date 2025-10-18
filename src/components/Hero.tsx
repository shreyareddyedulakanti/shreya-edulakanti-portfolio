import { Mail, Linkedin, MapPin, Download, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Available for opportunities</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-foreground">Hi, I'm a</span>
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                    Web Developer
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Full Stack Developer | React & Angular Specialist
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Crafting scalable web applications with 5+ years of experience. 
                  Specialized in building exceptional user experiences with modern 
                  technologies and clean, maintainable code.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Code2 className="w-4 h-4 mr-2" />
                  React
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Code2 className="w-4 h-4 mr-2" />
                  Angular
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Code2 className="w-4 h-4 mr-2" />
                  TypeScript
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-all hover-scale group">
                  <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  LinkedIn Profile
                </Button>
                <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all hover-scale group">
                  <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                  Download CV
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Fairfax, VA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>contact@email.com</span>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative order-1 lg:order-2 animate-scale-in">
              <div className="relative">
                {/* Main Circle */}
                <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
                  {/* Orbiting Rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-full border-2 border-accent/20 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <div className="absolute inset-8 rounded-full border-2 border-primary/10 animate-pulse" style={{ animationDelay: "1s" }}></div>
                  
                  {/* Center Element */}
                  <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center shadow-2xl group hover:scale-105 transition-transform duration-500">
                    <div className="text-white text-center">
                      <div className="text-7xl md:text-8xl font-bold mb-2">WD</div>
                      <div className="text-sm md:text-base opacity-90 font-medium">Web Developer</div>
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute -top-4 right-12 bg-background border-2 border-primary/20 rounded-full px-4 py-2 shadow-lg hover-scale">
                    <span className="text-sm font-semibold text-primary">5+ Years</span>
                  </div>
                  <div className="absolute bottom-8 -left-4 bg-background border-2 border-accent/20 rounded-full px-4 py-2 shadow-lg hover-scale">
                    <span className="text-sm font-semibold text-accent">React Expert</span>
                  </div>
                  <div className="absolute top-1/2 -right-8 bg-background border-2 border-primary/20 rounded-full px-4 py-2 shadow-lg hover-scale">
                    <span className="text-sm font-semibold text-primary">Full Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

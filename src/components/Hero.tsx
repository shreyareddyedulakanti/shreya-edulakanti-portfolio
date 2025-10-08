import { Mail, Linkedin, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative group animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center text-white text-6xl md:text-8xl font-bold shadow-2xl border-4 border-background">
              WD
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div>
              <p className="text-primary font-semibold mb-2 flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-12 h-0.5 bg-primary"></span>
                HELLO, I'M A
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Web Developer
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                Full Stack Developer | React & Angular Specialist
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                5+ years building scalable web applications with modern technologies.
                Passionate about creating exceptional user experiences and clean code.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm hover-scale">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Fairfax, VA</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm hover-scale">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@email.com</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover-scale group">
                <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                LinkedIn Profile
              </Button>
              <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all hover-scale group">
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

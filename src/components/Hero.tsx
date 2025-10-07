import { Mail, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-card border-b">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white text-5xl md:text-6xl font-bold shadow-lg">
            WD
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Web Developer</h1>
            <p className="text-xl text-muted-foreground mb-4">Full Stack Developer | React & Angular Specialist</p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Fairfax, VA</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>contact@email.com</span>
              </div>
            </div>

            <div className="flex gap-3 justify-center md:justify-start">
              <Button className="bg-primary hover:bg-primary/90">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </Button>
              <Button variant="outline">Contact Me</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

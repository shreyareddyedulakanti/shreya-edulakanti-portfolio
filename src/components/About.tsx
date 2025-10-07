import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4">
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-muted-foreground leading-relaxed">
              Web Developer with 5+ years of experience delivering scalable web applications using Angular and React. 
              Skilled in optimizing performance (25% faster load times), leading cross-functional teams, and deploying 
              cloud-native solutions with Docker, AWS, databases, and CI/CD pipelines. Passionate about creating 
              high-quality, accessible web experiences that drive business value.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;

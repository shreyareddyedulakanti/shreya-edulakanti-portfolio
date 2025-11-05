import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-12" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
          <CardContent className="pt-6">
            <h2 id="about-heading" className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a software engineer with 7+ years building scalable solutions across web, cloud, and AI—with equal focus on exceptional user experience and business value. I specialize in optimizing performance (achieving 25% faster load times), creating accessible interfaces, and deploying cloud-native solutions. My toolkit includes Angular, React, Node.js, Java, and Spring Boot, backed by Docker, AWS, and CI/CD pipelines. I thrive in collaborative environments where we challenge ideas and learn from each other. I stay current through workshops and tech talks, and I'm particularly excited about leveraging AI-powered tools to accelerate development and explore new possibilities. Outside of code, I recharge through travel, trying new things, and exploring different cultures. These experiences refresh my mind and bring the fresh thinking that drives better solutions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;

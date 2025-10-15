import { Card, CardContent } from "@/components/ui/card";
import { Code2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Interactive Portfolio Website",
    description: "Built a modern, responsive portfolio website with smooth scroll animations and dark mode support. Features a clean design system with reusable components and optimized performance.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"]
  },
  {
    title: "Student Survey Full Stack Application",
    description: "Designed and deployed a scalable survey platform on AWS using React and Spring Boot. Orchestrated backend services in Dockerized Kubernetes clusters and implemented optimized REST APIs with AWS RDS.",
    skills: ["AWS", "Spring Boot", "React", "PostgreSQL", "Docker"]
  },
  {
    title: "Department Survey Angular Application",
    description: "Built responsive Angular web apps deployed on AWS cloud with Spring Boot REST APIs and Oracle SQL integration for secure data handling.",
    skills: ["Spring Boot", "Angular", "Oracle SQL", "AWS", "Maven"]
  }
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="projects" className="py-12" ref={ref as any}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-8 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Code2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

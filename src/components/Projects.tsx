import { Card, CardContent } from "@/components/ui/card";
import { Code2, Calendar } from "lucide-react";

const projects = [
  {
    title: "Student Survey Full Stack Application",
    period: "Sep 2023 – Jan 2024",
    description: "Designed and deployed a scalable survey platform on AWS using React and Spring Boot",
    highlights: [
      "Orchestrated backend services in Dockerized Kubernetes clusters, reducing downtime by 30%",
      "Implemented optimized REST APIs with AWS RDS, cutting query response times by 40%",
      "Automated CI/CD pipelines via Jenkins for faster deployments"
    ],
    skills: ["AWS", "Spring Boot", "React", "PostgreSQL", "Docker", "Kubernetes", "Jenkins"]
  },
  {
    title: "Department Survey Angular Application",
    period: "Jan 2023 – May 2023",
    description: "Built responsive Angular web apps deployed on AWS cloud",
    highlights: [
      "Developed Spring Boot REST APIs and integrated Oracle SQL for secure data handling",
      "Streamlined backend/frontend communication for reliability and scalability",
      "Reduced infrastructure costs through optimized cloud deployment"
    ],
    skills: ["Spring Boot", "Maven", "Angular", "Oracle SQL", "AWS"]
  }
];

const Projects = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Code2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
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

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Angular", "TypeScript", "Tailwind CSS", "JavaScript"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "PHP"]
  },
  {
    category: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Jenkins", "CI/CD", "Kubernetes"]
  },
  {
    category: "Tools & Methodologies",
    skills: ["Git", "Agile/Scrum", "Jest", "Cypress", "WCAG"]
  }
];

const Skills = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.category} className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
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

export default Skills;

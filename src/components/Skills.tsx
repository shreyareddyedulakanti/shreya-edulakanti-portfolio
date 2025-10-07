import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Wrench,
  Layers,
  FileCode,
  Braces,
  Terminal,
  Container,
  GitBranch,
  CheckCircle2
} from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", icon: Layers },
      { name: "Angular", icon: Braces },
      { name: "TypeScript", icon: FileCode },
      { name: "Tailwind CSS", icon: Code2 },
      { name: "JavaScript", icon: FileCode }
    ]
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Terminal },
      { name: "Express.js", icon: Server },
      { name: "RESTful APIs", icon: Braces },
      { name: "PHP", icon: Code2 }
    ]
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Oracle", icon: Database }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "Docker", icon: Container },
      { name: "Jenkins", icon: Wrench },
      { name: "CI/CD", icon: GitBranch },
      { name: "Kubernetes", icon: Container }
    ]
  },
  {
    category: "Tools & Methodologies",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Agile/Scrum", icon: CheckCircle2 },
      { name: "Jest", icon: CheckCircle2 },
      { name: "Cypress", icon: CheckCircle2 },
      { name: "WCAG", icon: CheckCircle2 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <Card key={category.category} className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all hover-scale">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CategoryIcon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-primary">{category.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={skill.name} className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary/50 transition-colors">
                          <SkillIcon className="w-4 h-4 text-primary/70" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

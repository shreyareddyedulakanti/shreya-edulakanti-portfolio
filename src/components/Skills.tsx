import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Wrench
} from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Angular", icon: "🅰️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "JavaScript", icon: "🟨" }
    ]
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "⚡" },
      { name: "RESTful APIs", icon: "🔌" },
      { name: "PHP", icon: "🐘" }
    ]
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", icon: "🐬" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Oracle", icon: "🔴" }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Jenkins", icon: "🔧" },
      { name: "CI/CD", icon: "♻️" },
      { name: "Kubernetes", icon: "⚓" }
    ]
  },
  {
    category: "Tools & Methodologies",
    icon: Wrench,
    skills: [
      { name: "Git", icon: "📦" },
      { name: "Agile/Scrum", icon: "📊" },
      { name: "Jest", icon: "🃏" },
      { name: "Cypress", icon: "🌲" },
      { name: "WCAG", icon: "♿" }
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
              <Card key={category.category} className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CategoryIcon className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg text-primary">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="px-3 py-1.5 flex items-center gap-1.5">
                        <span className="text-base">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </Badge>
                    ))}
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

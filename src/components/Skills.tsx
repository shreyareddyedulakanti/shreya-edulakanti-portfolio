import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Wrench
} from "lucide-react";
import { 
  SiReact, 
  SiAngular, 
  SiTypescript, 
  SiTailwindcss, 
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiOracle,
  SiAwsamplify,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiGit,
  SiJest,
  SiCypress
} from "react-icons/si";
import { Settings, Users } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript }
    ]
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "RESTful APIs", icon: Server },
      { name: "PHP", icon: SiPhp }
    ]
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Oracle", icon: SiOracle }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: SiAwsamplify },
      { name: "Docker", icon: SiDocker },
      { name: "Jenkins", icon: SiJenkins },
      { name: "CI/CD", icon: Settings },
      { name: "Kubernetes", icon: SiKubernetes }
    ]
  },
  {
    category: "Tools & Methodologies",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Agile/Scrum", icon: Users },
      { name: "Jest", icon: SiJest },
      { name: "Cypress", icon: SiCypress },
      { name: "WCAG", icon: Settings }
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
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <Badge key={skill.name} variant="secondary" className="px-3 py-1.5 flex items-center gap-1.5">
                          <SkillIcon className="w-4 h-4" />
                          <span>{skill.name}</span>
                        </Badge>
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

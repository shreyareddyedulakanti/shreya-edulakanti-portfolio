import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Web Developer",
    company: "SVT IT INFOTECH INC",
    location: "Fairfax, VA",
    period: "June 2025 – Present",
    highlights: [
      "Engineered scalable React applications, leveraging modular reusable components to cut code duplication by 40–60%",
      "Orchestrated API integrations with REST/JSON, enhancing product interoperability",
      "Optimized front-end performance with asynchronous JavaScript, improving page rendering speed by 25%",
      "Provided 24/7 production support across time zones"
    ],
    skills: ["Angular", "JavaScript", "Next.js", "API Integration", "Agile"]
  },
  {
    title: "Web Developer",
    company: "WoMen of Connections Ministry",
    location: "Richmond, VA",
    period: "Feb 2025 – June 2025",
    highlights: [
      "Designed and maintained WordPress visual editors with Elementor",
      "Spearheaded open-source feature integrations",
      "Conducted detailed code reviews, reducing defect rates by 40%"
    ],
    skills: ["WordPress", "PHP", "Elementor", "JavaScript"]
  },
  {
    title: "Web Developer",
    company: "Cendyn",
    location: "Hyderabad, India",
    period: "Aug 2018 – Aug 2022",
    highlights: [
      "Developed 10+ responsive, data-driven hospitality websites",
      "Achieved 100% Lighthouse accessibility scores (WCAG compliance)",
      "Integrated APIs increasing customer engagement by 30%",
      "Led team of 3 developers, reducing development cycles by 20%"
    ],
    skills: ["React", "HTML/CSS", "Bootstrap", "API Integration"]
  },
  {
    title: "Software Engineer Intern",
    company: "Cendyn",
    location: "Hyderabad, India",
    period: "Jan 2018 – Aug 2018",
    highlights: [
      "Optimized 50+ websites with SEO best practices",
      "Launched 15+ new features enhancing UI performance",
      "Partnered with analytics and design teams"
    ],
    skills: ["Angular", "PHP", "Bootstrap", "SEO"]
  }
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="experience" className="py-12" ref={ref as any} aria-labelledby="experience-heading">
      <div className="container mx-auto px-4">
        <h2 id="experience-heading" className={`text-3xl font-bold mb-8 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          Professional Experience
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              role="article"
              aria-labelledby={`experience-title-${index}`}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" aria-hidden="true" />
                      <h3 id={`experience-title-${index}`} className="text-xl font-semibold">{exp.title}</h3>
                    </div>
                    <p className="text-lg font-medium text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time dateTime={exp.period}>{exp.period}</time>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4" aria-label={`Key achievements at ${exp.company}`}>
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
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

export default Experience;

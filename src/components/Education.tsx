import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "George Mason University",
    location: "Fairfax, VA",
    period: "Aug 2022 – May 2024"
  },
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    school: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    period: "Aug 2014 – May 2018"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-12 bg-muted/30" aria-labelledby="education-heading">
      <div className="container mx-auto px-4">
        <h2 id="education-heading" className="text-3xl font-bold mb-8">Education</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow" role="article" aria-labelledby={`education-degree-${index}`}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 id={`education-degree-${index}`} className="font-semibold text-lg leading-tight mb-2">{edu.degree}</h3>
                    <p className="font-medium text-foreground mb-2">{edu.school}</p>
                    <div className="flex flex-col gap-1 text-sm text-foreground/70">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" aria-hidden="true" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        <time dateTime={edu.period}>{edu.period}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

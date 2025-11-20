import { Linkedin, Github, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
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
  SiAmazonwebservices,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiGit,
  SiJest,
  SiCypress,
} from 'react-icons/si';

const titles = [
  'Web Developer',
  'Full-Stack Developer',
  'Front-End Developer',
  'AI Enthusiast',
  'Curious Coder',
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayedText.length < currentTitle.length) {
            setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          // Deleting
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            // Move to next title
            setIsDeleting(false);
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    ); // Faster deletion, slower typing

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  const techIcons = [
    { Icon: SiReact, color: 'text-blue-500', name: 'React' },
    { Icon: SiAngular, color: 'text-red-500', name: 'Angular' },
    { Icon: SiTypescript, color: 'text-blue-600', name: 'TypeScript' },
    { Icon: SiTailwindcss, color: 'text-cyan-500', name: 'Tailwind' },
    { Icon: SiJavascript, color: 'text-yellow-500', name: 'JavaScript' },
    { Icon: SiNodedotjs, color: 'text-green-600', name: 'Node.js' },
    { Icon: SiExpress, color: 'text-gray-600', name: 'Express' },
    { Icon: SiPhp, color: 'text-indigo-500', name: 'PHP' },
    { Icon: SiMysql, color: 'text-blue-700', name: 'MySQL' },
    { Icon: SiPostgresql, color: 'text-blue-800', name: 'PostgreSQL' },
    { Icon: SiMongodb, color: 'text-green-500', name: 'MongoDB' },
    { Icon: SiOracle, color: 'text-red-600', name: 'Oracle' },
    { Icon: SiAmazonwebservices, color: 'text-orange-500', name: 'AWS' },
    { Icon: SiDocker, color: 'text-blue-400', name: 'Docker' },
    { Icon: SiJenkins, color: 'text-red-700', name: 'Jenkins' },
    { Icon: SiKubernetes, color: 'text-blue-500', name: 'Kubernetes' },
    { Icon: SiGit, color: 'text-orange-600', name: 'Git' },
    { Icon: SiJest, color: 'text-red-400', name: 'Jest' },
    { Icon: SiCypress, color: 'text-gray-700', name: 'Cypress' },
  ];

  return (
    <section
      id="main-content"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      aria-label="Hero section"
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10"
        aria-hidden="true"
      ></div>

      {/* Animated Tech Icons Background */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
        aria-hidden="true"
      >
        {techIcons.map((tech, index) => {
          const TechIcon = tech.Icon;
          const positions = [
            { top: '10%', left: '5%' },
            { top: '20%', left: '85%' },
            { top: '70%', left: '10%' },
            { top: '80%', left: '80%' },
            { top: '30%', left: '15%' },
            { top: '50%', left: '90%' },
            { top: '15%', left: '70%' },
            { top: '60%', left: '25%' },
            { top: '40%', left: '5%' },
            { top: '85%', left: '50%' },
            { top: '25%', left: '40%' },
            { top: '65%', left: '65%' },
            { top: '45%', left: '75%' },
            { top: '10%', left: '50%' },
            { top: '75%', left: '40%' },
            { top: '35%', left: '60%' },
            { top: '55%', left: '45%' },
            { top: '90%', left: '20%' },
            { top: '5%', left: '30%' },
          ];
          return (
            <div
              key={tech.name}
              className="absolute animate-pulse"
              style={{
                ...positions[index],
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${3 + (index % 3)}s`,
              }}
              aria-hidden="true"
            >
              <TechIcon className={`w-8 h-8 md:w-12 md:h-12 ${tech.color}`} />
            </div>
          );
        })}
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Right Column - Profile Image (First on mobile) */}
          <div className="flex justify-center lg:justify-end lg:order-2">
            <div className="relative group">
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
                aria-hidden="true"
              ></div>
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center shadow-2xl border-4 border-background border-stone-400 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                {/* Replace the content below with an actual image: <img src="your-image-url" alt="Shreya Edulakanti - Web Developer" className="w-full h-full object-cover" /> */}
                {/*<div className="text-white text-5xl md:text-6xl lg:text-7xl font-bold" role="img" aria-label="Shreya Edulakanti initials">SE</div>*/}
                <img
                  src="../shreya-edulakanti-aws.jpg"
                  alt="Shreya Edulakanti - Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Left Column - Text Content (Second on mobile) */}
          <div className="space-y-8 text-center lg:text-left lg:order-1">
            {/* Main Heading */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="block text-foreground mb-2">Hi, I'm</span>
                <span className="block text-[hsl(var(--hero-accent))]">
                  Shreya Edulakanti
                </span>
              </h1>
              <p
                className="text-xl md:text-2xl text-muted-foreground font-medium min-h-[2rem] flex items-center justify-center lg:justify-start gap-1"
                aria-live="polite"
                aria-atomic="true"
              >
                {displayedText}
                <span
                  className="inline-block w-0.5 h-6 bg-primary animate-pulse"
                  aria-hidden="true"
                ></span>
              </p>
            </div>

            {/* Social Media Links */}
            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              role="group"
              aria-label="Social media links"
            >
              <Button
                size="lg"
                variant="outline"
                className="shadow-lg hover:shadow-xl transition-all hover-scale group"
                asChild
              >
                <a href="https://www.linkedin.com/in/shreya-edulakanti/" aria-label="Connect on LinkedIn">
                  <Linkedin
                    className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform"
                    aria-hidden="true"
                  />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="shadow-lg hover:shadow-xl transition-all hover-scale group"
                asChild
              >
                <a href="https://github.com/shreyareddyedulakanti/" aria-label="View GitHub profile">
                  <Github
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  GitHub
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="shadow-lg hover:shadow-xl transition-all hover-scale group"
                asChild
              >
                <a
                  href="mailto:edulakanti.shreya25@gmail.com"
                  aria-label="Send an email"
                >
                  <Mail
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  Email
                </a>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="shadow-lg hover:shadow-xl transition-all hover-scale group"
                asChild
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download resume"
                >
                  <FileText
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  Resume
                </a>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

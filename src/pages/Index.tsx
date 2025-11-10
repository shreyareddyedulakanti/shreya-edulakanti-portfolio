import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />

      <footer className="bg-card border-t py-8 mt-12" role="contentinfo">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Shreya Edulakanti Portfolio. Built with
            React & TypeScript.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;

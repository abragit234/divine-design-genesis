import { ArrowRight, Code2, Palette, Smartphone, Cpu, Globe, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      {/* Orbital rings with floating nodes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[900px] h-[900px] max-w-[140vw] max-h-[140vw]">
          {/* Outer orbit */}
          <div className="absolute inset-0 rounded-full border border-foreground/15 animate-orbit">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border border-foreground/40 flex items-center justify-center shadow-lg">
              <Code2 className="h-5 w-5 text-foreground" />
            </div>
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-foreground/40 flex items-center justify-center">
              <Globe className="h-4 w-4 text-foreground" />
            </div>
            <div className="absolute -bottom-2 left-1/3 w-11 h-11 rounded-full bg-background border border-foreground/40 flex items-center justify-center">
              <Palette className="h-4 w-4 text-foreground" />
            </div>
          </div>
          {/* Inner orbit */}
          <div className="absolute inset-[14%] rounded-full border border-foreground/20 animate-orbit-rev">
            <div className="absolute -top-2 right-1/4 w-10 h-10 rounded-full bg-background border border-foreground/50 flex items-center justify-center">
              <Smartphone className="h-4 w-4 text-foreground" />
            </div>
            <div className="absolute bottom-0 -left-2 w-10 h-10 rounded-full bg-background border border-foreground/50 flex items-center justify-center">
              <Cpu className="h-4 w-4 text-foreground" />
            </div>
            <div className="absolute top-1/3 -right-2 w-9 h-9 rounded-full bg-background border border-foreground/50 flex items-center justify-center">
              <Rocket className="h-4 w-4 text-foreground" />
            </div>
          </div>
          {/* Glow dots */}
          <div className="absolute top-10 left-1/4 w-2 h-2 rounded-full bg-foreground node-pulse" />
          <div className="absolute bottom-20 right-1/4 w-2 h-2 rounded-full bg-foreground node-pulse" style={{ animationDelay: '0.6s' }} />
          <div className="absolute top-1/2 left-4 w-1.5 h-1.5 rounded-full bg-foreground node-pulse" style={{ animationDelay: '1.2s' }} />
          <div className="absolute top-1/4 right-8 w-1.5 h-1.5 rounded-full bg-foreground node-pulse" style={{ animationDelay: '0.3s' }} />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12">
        <p className="font-hero text-sm tracking-[0.2em] text-muted-foreground uppercase mb-6 animate-fade-in">
          Abraham Studio for Innovators
        </p>
        <h1 className="font-hero text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.05] text-foreground animate-fade-in delay-200">
          Build your future <br className="hidden sm:block" /> with Abraham Studio
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in delay-400">
          Abraham Studio helps your business go from idea to launch with world-class
          web development, mobile apps, and digital design. Cutting-edge tech solutions
          engineered for modern brands worldwide.
        </p>
        <div className="mt-10 flex items-center justify-center animate-fade-in delay-600">
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-cyber font-semibold rounded-full shadow-xl group"
          >
            Start your project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Feature cards */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 animate-fade-in delay-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: 'Full-stack web development', desc: 'Modern, fast, and scalable websites built with React, TypeScript and best-in-class tooling.' },
            { title: 'Mobile-first app design', desc: 'Native-feel mobile experiences engineered for performance across iOS and Android.' },
            { title: 'Tailored digital strategy', desc: 'Personalized branding, UI/UX, and growth strategy aligned to your business goals.' },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-foreground/15 bg-card/60 backdrop-blur p-7 hover:border-foreground/40 hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-cyber text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

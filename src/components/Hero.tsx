
import { ArrowRight, Sparkles, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-primary mb-4">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Precision & Purpose</span>
              <Sparkles className="h-5 w-5" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Abraham</span>
              <span className="block text-primary">
                Studio
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Where creativity meets craftsmanship. We build exceptional digital experiences 
              with precision, purpose, and uncompromising quality.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Palette className="h-4 w-4 text-primary" />
              <span>Design Excellence</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="h-4 w-4 text-primary" />
              <span>Clean Development</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Purposeful Solutions</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12">
            <p className="text-sm text-muted-foreground mb-6">Trusted by professionals and businesses worldwide</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Projects<br/>Completed</div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Client<br/>Satisfaction</div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Professional<br/>Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { ArrowRight, Sparkles, Code, Palette, Triangle, Square, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 animate-bounce delay-300">
          <Triangle className="h-8 w-8 text-primary/20 transform rotate-12" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-700">
          <Square className="h-6 w-6 text-primary/30 transform -rotate-12" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-500">
          <Circle className="h-10 w-10 text-primary/25 transform rotate-45" />
        </div>
        <div className="absolute bottom-20 right-40 animate-bounce delay-1000">
          <Triangle className="h-7 w-7 text-primary/20 transform -rotate-45" />
        </div>
        
        {/* Animated lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading with animation */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-primary mb-4 animate-fade-in">
              <Sparkles className="h-5 w-5 animate-pulse" />
              <span className="text-sm font-medium uppercase tracking-wider">Precision & Purpose</span>
              <Sparkles className="h-5 w-5 animate-pulse delay-300" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in delay-200">
              <span className="block text-foreground hover:scale-105 transition-transform duration-300">Abraham</span>
              <span className="block text-primary hover:scale-105 transition-transform duration-300 delay-100">
                Studio
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-400">
              Premier web development, mobile app development, and digital design services. 
              Expert tech solutions with cutting-edge technology for modern businesses worldwide.
            </p>
          </div>

          {/* Feature highlights with hover animations */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground animate-fade-in delay-600">
            <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Palette className="h-4 w-4 text-primary animate-pulse" />
              <span>UI/UX Design Excellence</span>
            </div>
            <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Code className="h-4 w-4 text-primary animate-pulse delay-200" />
              <span>Full Stack Development</span>
            </div>
            <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Sparkles className="h-4 w-4 text-primary animate-pulse delay-400" />
              <span>Digital Marketing Solutions</span>
            </div>
          </div>

          {/* CTA buttons with animations */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in delay-800">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </Button>
          </div>

          {/* Trust indicators with staggered animation */}
          <div className="pt-12 animate-fade-in delay-1000">
            <p className="text-sm text-muted-foreground mb-6">Trusted by professionals and businesses worldwide</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projects<br/>Completed</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Client<br/>Satisfaction</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Professional<br/>Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

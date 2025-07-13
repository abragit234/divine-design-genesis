
import { ArrowRight, Sparkles, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-white to-[#F8F9FF]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#2D3EFA]/10 to-[#A259FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#A259FF]/10 to-[#FFD54F]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-[#A259FF] mb-4">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Inspired by Faith</span>
              <Sparkles className="h-5 w-5" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-900">Divine</span>
              <span className="block bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] bg-clip-text text-transparent">
                Design Genesis
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Where creativity meets calling. We craft exceptional digital experiences 
              that reflect God's love and serve His people.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Palette className="h-4 w-4 text-[#FFD54F]" />
              <span>Graphic Design</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="h-4 w-4 text-[#FFD54F]" />
              <span>Web Development</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-[#FFD54F]" />
              <span>Faith-Inspired</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] hover:from-[#1E2CF0] hover:to-[#9147FF] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-[#2D3EFA] text-[#2D3EFA] hover:bg-[#2D3EFA] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12">
            <p className="text-sm text-gray-500 mb-6">Trusted by believers and businesses worldwide</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">50+</div>
              <div className="text-sm text-gray-500">Projects<br/>Completed</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-2xl font-bold text-gray-400">100%</div>
              <div className="text-sm text-gray-500">Client<br/>Satisfaction</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-2xl font-bold text-gray-400">24/7</div>
              <div className="text-sm text-gray-500">Faith-Driven<br/>Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

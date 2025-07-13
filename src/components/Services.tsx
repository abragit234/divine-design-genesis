
import { Code, Palette, Globe, BookOpen, Heart, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Beautiful, meaningful designs that tell your story and reflect your values with excellence.",
      features: ["Logo Design", "Brand Identity", "Print Materials", "Digital Assets"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and applications built with modern technologies and biblical principles.",
      features: ["React & Next.js", "Custom WordPress", "E-commerce", "Mobile Apps"]
    },
    {
      icon: Globe,
      title: "No-Code Solutions",
      description: "Powerful websites without the complexity, perfect for ministries and small businesses.",
      features: ["Webflow", "Shopify", "Squarespace", "Quick Launch"]
    },
    {
      icon: BookOpen,
      title: "Learning & Mentorship",
      description: "Beginner-friendly tutorials and one-on-one mentorship in design and development.",
      features: ["HTML/CSS Basics", "JavaScript Fundamentals", "Design Principles", "Career Guidance"]
    },
    {
      icon: Heart,
      title: "Ministry Websites",
      description: "Specialized websites for churches, nonprofits, and faith-based organizations.",
      features: ["Donation Systems", "Event Management", "Sermon Archives", "Community Features"]
    },
    {
      icon: Zap,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation guided by wisdom and strategic thinking.",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every service we offer is crafted with excellence, integrity, and a heart to serve. 
            We believe in doing all things as unto the Lord.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#2D3EFA] transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#FFD54F] rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            "Whatever you do, work at it with all your heart, as working for the Lord" - Colossians 3:23
          </p>
          <button className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

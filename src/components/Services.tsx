
import { Code, Palette, Globe, BookOpen, Heart, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Beautiful, meaningful designs that tell your story with precision and visual excellence.",
      features: ["Logo Design", "Brand Identity", "Print Materials", "Digital Assets"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and applications built with modern technologies and clean architecture.",
      features: ["React & Next.js", "Custom WordPress", "E-commerce", "Mobile Apps"]
    },
    {
      icon: Globe,
      title: "No-Code Solutions",
      description: "Powerful websites without the complexity, perfect for businesses and startups.",
      features: ["Webflow", "Shopify", "Squarespace", "Quick Launch"]
    },
    {
      icon: BookOpen,
      title: "Learning & Mentorship",
      description: "Professional tutorials and one-on-one mentorship in design and development.",
      features: ["HTML/CSS Basics", "JavaScript Fundamentals", "Design Principles", "Career Guidance"]
    },
    {
      icon: Heart,
      title: "Business Websites",
      description: "Specialized websites for businesses, organizations, and professional services.",
      features: ["Payment Systems", "Event Management", "Content Archives", "Customer Features"]
    },
    {
      icon: Zap,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation guided by data and strategic thinking.",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every service we offer is crafted with excellence, precision, and a commitment to quality. 
            We believe in doing all things with purpose and integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

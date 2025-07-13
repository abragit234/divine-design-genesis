
import { Code, Palette, Globe, BookOpen, Heart, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Beautiful, meaningful designs that tell your story with precision and visual excellence.",
      features: ["Logo Design", "Brand Identity", "Print Materials", "Digital Assets"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and applications built with modern technologies and clean architecture.",
      features: ["React & Next.js", "Custom WordPress", "E-commerce", "Mobile Apps"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Globe,
      title: "No-Code Solutions",
      description: "Powerful websites without the complexity, perfect for businesses and startups.",
      features: ["Webflow", "Shopify", "Squarespace", "Quick Launch"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: BookOpen,
      title: "Learning & Mentorship",
      description: "Professional tutorials and one-on-one mentorship in design and development.",
      features: ["HTML/CSS Basics", "JavaScript Fundamentals", "Design Principles", "Career Guidance"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Heart,
      title: "Business Websites",
      description: "Specialized websites for businesses, organizations, and professional services.",
      features: ["Payment Systems", "Event Management", "Content Archives", "Customer Features"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Zap,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation guided by data and strategic thinking.",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            Every service we offer is crafted with excellence, precision, and a commitment to quality. 
            We believe in doing all things with purpose and integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border shadow-md overflow-hidden animate-fade-in hover:scale-105" style={{animationDelay: `${index * 100}ms`}}>
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
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
                    <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{animationDelay: `${idx * 200}ms`}}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in delay-1000">
          <p className="text-lg text-muted-foreground mb-6">
            "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 animate-pulse">
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

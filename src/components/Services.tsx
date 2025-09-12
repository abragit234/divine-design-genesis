
import { Code, Palette, Globe, BookOpen, Heart, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design & Branding",
      description: "Professional UI/UX design, graphic design, and brand identity development using modern design principles and user-centered methodologies.",
      features: ["User Interface Design", "User Experience Research", "Brand Identity Systems", "Design Systems & Style Guides"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Code,
      title: "Web Development & Programming",
      description: "Full-stack web development using React, TypeScript, Node.js, and modern frameworks. Custom web applications, e-commerce platforms, and responsive websites.",
      features: ["React & Next.js Development", "Full-Stack JavaScript", "Custom CMS Solutions", "Progressive Web Apps"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Globe,
      title: "Mobile App Development",
      description: "Cross-platform mobile application development for iOS and Android using React Native and modern mobile technologies.",
      features: ["React Native Apps", "iOS Development", "Android Development", "App Store Optimization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: BookOpen,
      title: "Digital Marketing & SEO",
      description: "Comprehensive digital marketing strategies, search engine optimization, content marketing, and social media management for technology businesses.",
      features: ["Search Engine Optimization", "Social Media Marketing", "Content Strategy", "Google Ads Management"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Heart,
      title: "E-commerce Solutions",
      description: "Custom e-commerce development using Shopify, WooCommerce, and custom solutions. Payment integration, inventory management, and conversion optimization.",
      features: ["Shopify Development", "WooCommerce Customization", "Payment Gateway Integration", "Inventory Management Systems"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Zap,
      title: "Cloud Computing & DevOps",
      description: "Cloud infrastructure setup, deployment automation, and DevOps solutions using AWS, Google Cloud, and modern deployment technologies.",
      features: ["AWS Cloud Solutions", "CI/CD Pipeline Setup", "Docker Containerization", "Performance Optimization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Our Technology <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            Comprehensive web development, mobile app development, digital marketing, and technology 
            consulting services designed to accelerate your digital transformation and business growth.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border shadow-md overflow-hidden animate-fade-in hover:scale-105" style={{animationDelay: `${index * 100}ms`}}>
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Professional technology services by Abraham Studio`}
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
            "Innovation distinguishes between a leader and a follower. Let's build the future of technology together."
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 animate-pulse">
            Start Your Tech Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

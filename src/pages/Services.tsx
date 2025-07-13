
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Palette, Globe, BookOpen, Heart, Zap, Check, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Beautiful, meaningful designs that tell your story and reflect your values with excellence.",
      features: ["Logo Design & Brand Identity", "Print & Digital Materials", "Social Media Graphics", "Packaging Design"],
      process: ["Discovery & Research", "Concept Development", "Design Refinement", "Final Delivery"],
      price: "Starting at $500"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and applications built with modern technologies and biblical principles.",
      features: ["Custom React/Next.js Sites", "WordPress Development", "E-commerce Solutions", "Mobile Applications"],
      process: ["Planning & Architecture", "Development & Testing", "Launch & Optimization", "Ongoing Support"],
      price: "Starting at $2,000"
    },
    {
      icon: Globe,
      title: "No-Code Solutions",
      description: "Powerful websites without the complexity, perfect for ministries and small businesses.",
      features: ["Webflow Websites", "Shopify Stores", "Squarespace Sites", "Rapid Deployment"],
      process: ["Template Selection", "Customization", "Content Integration", "Launch & Training"],
      price: "Starting at $800"
    },
    {
      icon: BookOpen,
      title: "Learning & Mentorship",
      description: "Beginner-friendly tutorials and one-on-one mentorship in design and development.",
      features: ["HTML/CSS Fundamentals", "JavaScript Essentials", "Design Principles", "Career Guidance"],
      process: ["Skill Assessment", "Personalized Curriculum", "Hands-on Projects", "Ongoing Support"],
      price: "Starting at $100/hour"
    },
    {
      icon: Heart,
      title: "Ministry Websites",
      description: "Specialized websites for churches, nonprofits, and faith-based organizations.",
      features: ["Donation Integration", "Event Management", "Sermon Archives", "Community Features"],
      process: ["Ministry Assessment", "Custom Development", "Content Training", "Launch & Support"],
      price: "Starting at $1,500"
    },
    {
      icon: Zap,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation guided by wisdom and strategic thinking.",
      features: ["SEO Optimization", "Social Media Strategy", "Content Planning", "Analytics Setup"],
      process: ["Current State Analysis", "Strategy Development", "Implementation", "Performance Monitoring"],
      price: "Starting at $300/month"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$1,200",
      description: "Perfect for small businesses and ministries just getting started",
      features: [
        "5-page website",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "30 days support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$2,800",
      description: "Ideal for growing organizations with advanced needs",
      features: [
        "10-page website",
        "Custom design & branding",
        "Advanced SEO optimization",
        "Blog & CMS integration",
        "E-commerce capability",
        "90 days support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$5,500",
      description: "Comprehensive solution for established organizations",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced integrations",
        "Performance optimization",
        "Priority support",
        "1 year maintenance"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#F8F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every service we offer is crafted with excellence, integrity, and a heart to serve. 
            We believe in doing all things as unto the Lord.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-[#A259FF] font-semibold">{service.price}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#2D3EFA] transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-[#FFD54F]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Process:</h4>
                      <div className="space-y-2">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <span className="w-6 h-6 bg-[#2D3EFA]/10 text-[#2D3EFA] rounded-full flex items-center justify-center text-xs font-semibold">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] hover:from-[#1E2CF0] hover:to-[#9147FF] text-white group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Website Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-[#2D3EFA] scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] bg-clip-text text-transparent mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="w-5 h-5 text-[#FFD54F]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] hover:from-[#1E2CF0] hover:to-[#9147FF] text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                    Choose {pkg.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, 
            to give you hope and a future." - Jeremiah 29:11
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] hover:from-[#1E2CF0] hover:to-[#9147FF] text-white px-8 py-4 text-lg font-semibold rounded-xl">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-[#2D3EFA] text-[#2D3EFA] hover:bg-[#2D3EFA] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;

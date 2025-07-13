
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Target, Users, Award, Book, Coffee, Code, Palette } from 'lucide-react';

const AboutPage = () => {
  const journey = [
    {
      year: "2021",
      title: "The Beginning",
      description: "Started with a simple desire to use technology to create meaningful digital experiences."
    },
    {
      year: "2022",
      title: "First Major Project",
      description: "Launched our first professional website, discovering our passion for excellence in design."
    },
    {
      year: "2023",
      title: "Growing Community",
      description: "Expanded to serve businesses and organizations across the country."
    },
    {
      year: "2024",
      title: "Abraham Studio",
      description: "Officially launched as a full-service design and development studio."
    }
  ];

  const team = [
    {
      icon: Code,
      role: "Lead Developer",
      description: "Passionate about clean code and beautiful user experiences"
    },
    {
      icon: Palette,
      role: "Creative Director",
      description: "Believes every design should tell a story and serve a purpose"
    },
    {
      icon: Heart,
      role: "Client Success Manager",
      description: "Dedicated to building relationships and ensuring client satisfaction"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">
              Our Story
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe creativity is a powerful tool for positive change, and technology can be 
            leveraged to build meaningful connections and deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To create exceptional digital experiences that exceed expectations, serve clear purposes, 
                  and contribute to the success of our clients through excellence, integrity, and genuine care.
                </p>
                <div className="bg-primary p-6 rounded-xl text-primary-foreground">
                  <blockquote className="text-lg italic">
                    "Quality is not an act, it is a habit. We are what we repeatedly do. 
                    Excellence, then, is not an act, but a habit."
                  </blockquote>
                  <p className="text-primary-foreground/80 mt-2">— Aristotle</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We envision a world where technology serves as a bridge to meaningful connections, 
                  where every website tells a compelling story, and where digital creativity makes a positive impact.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground">Inspiring digital experiences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground">Building meaningful connections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground">Delivering exceptional quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Every step guided by purpose and excellence</p>
          </div>

          <div className="space-y-8">
            {journey.map((item, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary">
                    {item.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground">United by excellence, driven by purpose</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 bg-accent/20 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <member.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.role}</h3>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-primary p-8 rounded-xl text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Want to Work With Us?</h3>
              <p className="text-lg text-primary-foreground/90 mb-6">
                We'd love to hear about your project and explore how we can help you succeed.
              </p>
              <button className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

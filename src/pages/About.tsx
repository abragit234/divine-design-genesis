
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Target, Users, Award, Book, Coffee, Code, Palette } from 'lucide-react';

const AboutPage = () => {
  const journey = [
    {
      year: "2021",
      title: "The Beginning",
      description: "Started with a simple desire to use technology to serve God and others."
    },
    {
      year: "2022",
      title: "First Ministry Project",
      description: "Launched our first church website, discovering our passion for faith-based design."
    },
    {
      year: "2023",
      title: "Growing Community",
      description: "Expanded to serve nonprofits and Christian businesses across the country."
    },
    {
      year: "2024",
      title: "Divine Design Genesis",
      description: "Officially launched as a full-service faith-inspired design and development studio."
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
      role: "Community Manager",
      description: "Dedicated to building relationships and serving our clients"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#F8F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] bg-clip-text text-transparent">
              Our Story
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe creativity is a gift from God, and technology can be a powerful tool 
            for building His kingdom and serving His people.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To create exceptional digital experiences that reflect God's love, advance His kingdom, 
                  and serve His people with excellence, integrity, and genuine care.
                </p>
                <div className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] p-6 rounded-xl text-white">
                  <blockquote className="text-lg italic">
                    "Whatever you do, work at it with all your heart, as working for the Lord, 
                    not for human masters."
                  </blockquote>
                  <p className="text-white/80 mt-2">— Colossians 3:23</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We envision a world where technology serves as a bridge to bring people closer to God, 
                  where every website tells a story of hope, and where digital creativity glorifies our Creator.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#FFD54F] rounded-full"></div>
                    <span className="text-gray-700">Inspiring digital experiences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#FFD54F] rounded-full"></div>
                    <span className="text-gray-700">Building meaningful connections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#FFD54F] rounded-full"></div>
                    <span className="text-gray-700">Advancing God's kingdom through tech</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-to-br from-[#F8F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Every step guided by faith and purpose</p>
          </div>

          <div className="space-y-8">
            {journey.map((item, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] bg-clip-text text-transparent">
                    {item.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-[#FFD54F] rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">United by faith, driven by purpose</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <member.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.role}</h3>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Want to Work With Us?</h3>
              <p className="text-lg text-white/90 mb-6">
                We'd love to hear about your project and explore how we can serve you.
              </p>
              <button className="bg-white text-[#2D3EFA] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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

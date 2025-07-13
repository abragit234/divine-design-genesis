
import { Heart, Target, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Faith-Centered",
      description: "Every project begins with prayer and is guided by biblical principles of excellence and integrity."
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "We believe every design and line of code should serve a greater purpose in building God's kingdom."
    },
    {
      icon: Users,
      title: "Community-Focused",
      description: "Building meaningful relationships and serving others is at the heart of everything we do."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in all our work, reflecting the character of our Creator."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F9FF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Divine Design Genesis was born from a simple belief: that creativity is a gift from God, 
                  and technology can be a powerful tool for good in the world.
                </p>
                <p>
                  We started this journey with a heart to serve—to help ministries, businesses, and 
                  individuals share their message through beautiful, functional digital experiences. 
                  Every project is an opportunity to glorify God through excellent work.
                </p>
                <p>
                  Whether we're designing a logo for a local church or building a complex web application, 
                  we approach each task with the same dedication: to create something that not only works 
                  beautifully but also serves a greater purpose.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <blockquote className="text-lg text-gray-700 italic">
                "For we are God's handiwork, created in Christ Jesus to do good works, 
                which God prepared in advance for us to do."
              </blockquote>
              <p className="text-[#A259FF] font-semibold mt-2">— Ephesians 2:10</p>
            </div>
          </div>

          {/* Right side - Values */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] p-6 rounded-xl text-white">
              <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
              <p className="text-white/90">
                To create digital experiences that reflect God's love, serve His people, 
                and advance His kingdom through excellent design and development.
              </p>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] bg-clip-text text-transparent mb-2">
              25+
            </div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] bg-clip-text text-transparent mb-2">
              3+
            </div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-600">Faith-Driven</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

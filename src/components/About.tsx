
import { Heart, Target, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven Technology",
      description: "Every web development and mobile app project begins with genuine care and is guided by principles of technical excellence and modern software craftsmanship."
    },
    {
      icon: Target,
      title: "Results-Focused Development",
      description: "We believe every line of code, design element, and digital marketing strategy should serve a clear purpose and deliver measurable business results."
    },
    {
      icon: Users,
      title: "Client-Centered Tech Solutions",
      description: "Building meaningful partnerships through innovative software development, responsive web design, and comprehensive digital transformation services."
    },
    {
      icon: Award,
      title: "Technical Excellence",
      description: "We strive for excellence in all our technology services, maintaining the highest standards of code quality, user experience design, and digital marketing performance."
    }
  ];

  return (
    <section className="py-20 bg-accent/20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div className="space-y-8">
            <header>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                About Abraham <span className="text-primary">Studio</span>
              </h2>
            </header>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Abraham Studio is a premier technology company specializing in web development, 
                mobile app development, UI/UX design, and digital marketing solutions. We serve 
                businesses worldwide with cutting-edge technology and innovative digital experiences.
              </p>
              <p>
                Our expert team combines modern web technologies like React, TypeScript, Node.js, 
                and cloud computing to deliver scalable software solutions. From responsive websites 
                to complex web applications and mobile apps, we transform ideas into powerful digital products.
              </p>
              <p>
                Whether we're creating a custom e-commerce platform, developing a SaaS application, 
                or implementing comprehensive SEO strategies, we approach each technology project 
                with precision, creativity, and a commitment to delivering exceptional user experiences.
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm border">
              <blockquote className="text-lg text-foreground italic">
                "Technology is best when it brings people together and solves real problems 
                through innovative, user-centered design and development."
              </blockquote>
              <p className="text-primary font-semibold mt-2">— Abraham Studio Philosophy</p>
            </div>
          </div>

          {/* Right side - Values */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary p-6 rounded-xl text-primary-foreground">
              <h4 className="text-lg font-semibold mb-2">Our Technology Mission</h4>
              <p className="text-primary-foreground/90">
                To deliver cutting-edge web development, mobile app development, and digital marketing 
                solutions that drive business growth, enhance user experiences, and leverage the latest 
                in software technology and design innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2" itemProp="numberOfProjects">
              50+
            </div>
            <div className="text-muted-foreground">Web Development Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2" itemProp="numberOfClients">
              25+
            </div>
            <div className="text-muted-foreground">Technology Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2" itemProp="yearsExperience">
              5+
            </div>
            <div className="text-muted-foreground">Years Tech Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2" itemProp="satisfactionRate">
              100%
            </div>
            <div className="text-muted-foreground">Quality Code Standards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

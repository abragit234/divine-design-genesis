
import { Heart, Target, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Every project begins with genuine care and is guided by principles of excellence and craftsmanship."
    },
    {
      icon: Target,
      title: "Purpose-Focused",
      description: "We believe every design and line of code should serve a clear purpose and deliver meaningful results."
    },
    {
      icon: Users,
      title: "Client-Centered",
      description: "Building meaningful relationships and delivering exceptional service is at the heart of everything we do."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in all our work, maintaining the highest standards of quality and professionalism."
    }
  ];

  return (
    <section className="py-20 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Abraham Studio was born from a simple belief: that technology and design 
                  should serve a purpose and make a meaningful impact in the world.
                </p>
                <p>
                  We started this journey with a commitment to excellence—to help businesses, 
                  organizations, and individuals share their message through beautiful, 
                  functional digital experiences. Every project is an opportunity to create something exceptional.
                </p>
                <p>
                  Whether we're designing a logo for a startup or building a complex web application, 
                  we approach each task with the same dedication: to create something that not only works 
                  beautifully but also serves its intended purpose with precision.
                </p>
              </div>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm border">
              <blockquote className="text-lg text-foreground italic">
                "The secret to getting ahead is getting started. The secret to getting started 
                is breaking your complex overwhelming tasks into small manageable tasks, and starting on the first one."
              </blockquote>
              <p className="text-primary font-semibold mt-2">— Mark Twain</p>
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
              <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
              <p className="text-primary-foreground/90">
                To create digital experiences that exceed expectations, serve their purpose with precision, 
                and contribute to the success of our clients through excellent design and development.
              </p>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">
              50+
            </div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">
              25+
            </div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">
              3+
            </div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">
              100%
            </div>
            <div className="text-muted-foreground">Quality Focused</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

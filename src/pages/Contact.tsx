
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, Heart, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@divinedesign.com",
      description: "We typically respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "07044879145",
      description: "Monday - Friday, 9AM - 6PM EST"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Serving Worldwide",
      description: "Based in the United States"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 Hours",
      description: "We value prompt communication"
    }
  ];

  const services = [
    "Graphic Design",
    "Web Development", 
    "No-Code Solutions",
    "Learning & Mentorship",
    "Ministry Websites",
    "Digital Strategy",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#F8F9FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear about your project and explore how we can serve you. 
            Every conversation begins with prayer and ends with purpose.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#2D3EFA] font-semibold mb-2">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-[#F8F9FF] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Project</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gray-900 flex items-center justify-center space-x-2">
                <MessageSquare className="h-6 w-6 text-[#2D3EFA]" />
                <span>Tell Us About Your Project</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">First Name *</label>
                  <Input placeholder="John" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Last Name *</label>
                  <Input placeholder="Doe" className="h-12" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                  <Input type="email" placeholder="john@example.com" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <Input type="tel" placeholder="07044879145" className="h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Organization/Ministry Name</label>
                <Input placeholder="Your Church or Business Name" className="h-12" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Service Interested In *</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service, index) => (
                      <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Project Budget Range</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1000">Under $1,000</SelectItem>
                    <SelectItem value="1000-3000">$1,000 - $3,000</SelectItem>
                    <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="over-10000">Over $10,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Project Timeline</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="When do you need this completed?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">As soon as possible</SelectItem>
                    <SelectItem value="1-month">Within 1 month</SelectItem>
                    <SelectItem value="2-3-months">2-3 months</SelectItem>
                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                    <SelectItem value="flexible">I'm flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Tell Us About Your Project *</label>
                <Textarea 
                  placeholder="Please describe your project, goals, and any specific requirements. We'd love to hear your vision!"
                  className="min-h-32"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Prayer Requests (Optional)</label>
                <Textarea 
                  placeholder="Is there anything you'd like us to pray about regarding your project or ministry?"
                  className="min-h-24"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] hover:from-[#1E2CF0] hover:to-[#9147FF] text-white h-12 text-lg font-semibold">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>

              <p className="text-sm text-gray-600 text-center">
                We'll respond within 24 hours. All consultations begin with prayer.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about working with us</p>
          </div>

          <div className="space-y-6">
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">How do you incorporate faith into your work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every project begins with prayer, and we approach our work with biblical principles of excellence, 
                  integrity, and service. We believe our creativity is a gift from God, and we use it to serve His people and advance His kingdom.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">What is your typical project timeline?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Project timelines vary based on scope and complexity. Simple websites typically take 2-4 weeks, 
                  while complex applications may take 2-3 months. We'll provide a detailed timeline during our initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Do you work with secular businesses?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! While we specialize in faith-based organizations, we're happy to work with any business or individual 
                  whose values align with ours and who appreciates our faith-centered approach to work.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">What support do you provide after launch?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide ongoing support and maintenance packages to ensure your website continues to serve effectively. 
                  This includes updates, security monitoring, and technical support when you need it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-20 bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-6 w-6" />
            <h2 className="text-2xl font-bold">We're Here for You</h2>
            <Heart className="h-6 w-6" />
          </div>
          <blockquote className="text-xl italic leading-relaxed mb-4">
            "Cast all your anxiety on him because he cares for you."
          </blockquote>
          <p className="text-white/80">— 1 Peter 5:7</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

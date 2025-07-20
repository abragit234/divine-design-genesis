
import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Abraham Studio</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Creating digital experiences with precision and purpose. 
              We believe every design should tell a story and every line of code should serve excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/abrahamstudio" className="text-background/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80">hello@abrahamstudio.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">07044879145</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/80">Serving clients worldwide</span>
              </div>
            </div>
          </div>

          {/* Mission Quote */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <blockquote className="text-background/90 italic text-sm leading-relaxed">
              "Excellence is never an accident. It is always the result of high intention, 
              sincere effort, and intelligent execution."
            </blockquote>
            <p className="text-primary text-xs">— Aristotle</p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/70 text-sm flex items-center justify-center space-x-1">
            <span>Crafted with</span>
            <Heart className="h-4 w-4 text-primary" />
            <span>for excellence © 2024 Abraham Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

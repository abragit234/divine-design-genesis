
import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2D3EFA] to-[#A259FF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Divine Design</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Creating digital experiences that reflect God's love and excellence. 
              We believe every design should inspire and every line of code should serve a purpose.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-[#FFD54F] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-[#FFD54F] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-[#FFD54F] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#FFD54F]" />
                <span className="text-white/80">hello@divinedesign.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#FFD54F]" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#FFD54F]" />
                <span className="text-white/80">Serving clients worldwide</span>
              </div>
            </div>
          </div>

          {/* Scripture Quote */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Foundation</h3>
            <blockquote className="text-white/90 italic text-sm leading-relaxed">
              "In the beginning was the Word, and the Word was with God, and the Word was God. 
              All things were made through him, and without him was not any thing made that was made."
            </blockquote>
            <p className="text-[#FFD54F] text-xs">— John 1:1-3</p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-[#FFD54F]" />
            <span>for God's glory © 2024 Divine Design</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

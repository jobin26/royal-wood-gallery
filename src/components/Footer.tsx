import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Royal Wood Gallery</h3>
            <p className="text-amber-200 mb-4">
              Crafting exceptional wooden furniture with traditional techniques and modern designs. 
              Each piece tells a story of quality, durability, and timeless beauty.
            </p>
            <div className="flex items-center gap-2 text-amber-200">
              <Clock className="w-4 h-4" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-amber-200">
                <MapPin className="w-4 h-4" />
                <span>Chengamanadu, Kottarakara</span>
              </div>
              <div className="flex items-center gap-2 text-amber-200">
                <Phone className="w-4 h-4" />
                <a href="tel:+918086581611" className="hover:text-white transition-colors">
                  +91 8086581611
                </a>
              </div>
              <div className="flex items-center gap-2 text-amber-200">
                <Phone className="w-4 h-4" />
                <a href="tel:+919744271611" className="hover:text-white transition-colors">
                  +91 9744271611
                </a>
              </div>
              <div className="flex items-center gap-2 text-amber-200">
                <Mail className="w-4 h-4" />
                <a href="mailto:rotalwoodgalleryrw@gmail.com" className="hover:text-white transition-colors">
                  rotalwoodgalleryrw@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-amber-200">
              <li>• Custom Furniture Design</li>
              <li>• Home Furniture Solutions</li>
              <li>• Office Furniture</li>
              <li>• Furniture Restoration</li>
              <li>• Interior Consultation</li>
              <li>• Free Home Delivery</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            © 2024 Royal Wood Gallery. All rights reserved. | Handcrafted with ❤️ in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
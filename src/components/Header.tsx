import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-amber-50 to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4 font-serif">
          Royal Wood Gallery
        </h1>
        <p className="text-xl md:text-2xl text-amber-800 mb-6 font-light">
          Handcrafted Wooden Furniture — Custom Designs for Home & Office
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-amber-700">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Chengamanadu, Kottarakara</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+918086581611" className="text-lg hover:text-amber-900 transition-colors">
                +91 8086581611
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+919744271611" className="text-lg hover:text-amber-900 transition-colors">
                +91 9744271611
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <a href="mailto:rotalwoodgalleryrw@gmail.com" className="text-lg hover:text-amber-900 transition-colors">
              rotalwoodgalleryrw@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
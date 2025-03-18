
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-brand-purple">
              LandingX
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-brand-purple transition-colors">
              Services
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-purple transition-colors">
              Pricing
            </a>
            <a href="#users" className="text-gray-600 hover:text-brand-purple transition-colors">
              Users
            </a>
            <a href="#contact" className="text-gray-600 hover:text-brand-purple transition-colors">
              Contact
            </a>
            <Button size="sm" className="bg-brand-purple hover:bg-brand-purple/90">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-purple hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-purple hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <a
              href="#users"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-purple hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Users
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-purple hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <Button size="sm" className="w-full bg-brand-purple hover:bg-brand-purple/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

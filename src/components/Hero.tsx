import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '../../public/patrick-perkins-ETRPjvb0KM0-unsplash.jpg';

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }} 
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="max-w-4xl px-6 sm:px-8 py-24 md:py-32 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Hi I Am Hardik Dabral <br className="hidden md:block" />
          <span className="text-gray-100">Your Frontend Developer</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10">
          Showcasing my services with a professional, responsive web page
          that converts visitors into customers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-brand-purple  hover:bg-white/10 hover:text-gray-900">
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-gray hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* 🔹 Fix: Move Wave SVG *outside* the Hero Section */}
      <div className="relative w-full -mt-1"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L60,112C120,128,240,160,360,144C480,128,600,64,720,64C840,64,960,128,1080,144C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

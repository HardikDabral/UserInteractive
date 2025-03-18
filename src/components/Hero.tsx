
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Hero = () => {
  return (
    <div className="pt-20 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90 -z-10" />
      
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
          alt="Technology background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Modern Landing Page <br className="hidden md:block" />
            <span className="text-gray-100">For Your Business</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10">
            Showcase your services with a professional, responsive landing page
            that converts visitors into customers.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave svg at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L60,112C120,128,240,160,360,144C480,128,600,64,720,64C840,64,960,128,1080,144C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

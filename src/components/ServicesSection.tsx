
import { Check, Zap, Shield, LineChart } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientClass: string;
}

const ServiceCard = ({ icon, title, description, gradientClass }: ServiceCardProps) => {
  return (
    <div className={`service-card ${gradientClass}`}>
      <div className="mb-4 p-2 rounded-full bg-white inline-block shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We provide top-notch services to help your business grow and thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Zap className="h-6 w-6 text-brand-purple" />}
            title="Fast Performance"
            description="Optimize your website for speed and performance to provide the best user experience."
            gradientClass="feature-gradient-1"
          />
          
          <ServiceCard
            icon={<Shield className="h-6 w-6 text-brand-pink" />}
            title="Secure System"
            description="Keep your data safe with our enterprise-grade security systems and protocols."
            gradientClass="feature-gradient-2"
          />
          
          <ServiceCard
            icon={<LineChart className="h-6 w-6 text-brand-orange" />}
            title="Analytics"
            description="Get insights into your business with comprehensive analytics and reporting."
            gradientClass="feature-gradient-3"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

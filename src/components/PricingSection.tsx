
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingPlanProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan = ({ title, price, description, features, isPopular = false }: PricingPlanProps) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden border ${
      isPopular ? 'border-brand-purple shadow-lg' : 'border-gray-200'
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-brand-purple text-white px-4 py-1 text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-500 ml-1">/month</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <Button 
          className={`w-full mb-6 ${
            isPopular 
              ? 'bg-brand-purple hover:bg-brand-purple/90' 
              : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          Get Started
        </Button>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan
            title="Basic"
            price="$29"
            description="Perfect for small businesses and startups."
            features={[
              "Up to 5 team members",
              "20GB storage",
              "Basic analytics",
              "24/7 support"
            ]}
          />
          
          <PricingPlan
            title="Pro"
            price="$79"
            description="Great for growing businesses and teams."
            features={[
              "Up to 20 team members",
              "50GB storage",
              "Advanced analytics",
              "Priority support",
              "Custom integrations"
            ]}
            isPopular={true}
          />
          
          <PricingPlan
            title="Enterprise"
            price="$199"
            description="For large organizations with complex needs."
            features={[
              "Unlimited team members",
              "Unlimited storage",
              "Premium analytics",
              "Dedicated support",
              "Advanced integrations",
              "Custom features"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

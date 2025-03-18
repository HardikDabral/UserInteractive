
import { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Lazy load components for performance
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const PricingSection = lazy(() => import('@/components/PricingSection'));
const UsersSection = lazy(() => import('@/components/UsersSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

const LoadingFallback = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-purple"></div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <Suspense fallback={<LoadingFallback />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <PricingSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <UsersSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;

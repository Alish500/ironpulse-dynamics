import { LanguageProvider } from '@/hooks/useLanguage';
import Navbar from '@/components/gym/Navbar';
import Hero from '@/components/gym/Hero';
import Stats from '@/components/gym/Stats';
import About from '@/components/gym/About';
import Services from '@/components/gym/Services';
import Trainers from '@/components/gym/Trainers';
import Pricing from '@/components/gym/Pricing';
import Testimonials from '@/components/gym/Testimonials';
import FAQ from '@/components/gym/FAQ';
import Contact from '@/components/gym/Contact';
import Footer from '@/components/gym/Footer';
import WhatsAppButton from '@/components/gym/WhatsAppButton';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Services />
        <Trainers />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;

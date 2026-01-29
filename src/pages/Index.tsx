import GymHero from "@/components/gym/GymHero";
import AboutSection from "@/components/gym/AboutSection";
import ClassesSection from "@/components/gym/ClassesSection";
import TrainersSection from "@/components/gym/TrainersSection";
import PricingSection from "@/components/gym/PricingSection";
import CalculatorsSection from "@/components/gym/CalculatorsSection";
import TestimonialsSection from "@/components/gym/TestimonialsSection";
import GallerySection from "@/components/gym/GallerySection";
import TimetableSection from "@/components/gym/TimetableSection";
import CTASection from "@/components/gym/CTASection";
import ContactSection from "@/components/gym/ContactSection";
import GymFooter from "@/components/gym/GymFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <GymHero />
      
      {/* About the Gym */}
      <AboutSection />
      
      {/* Classes & Training Programs */}
      <ClassesSection />
      
      {/* Meet Our Trainers */}
      <TrainersSection />
      
      {/* Pricing Plans */}
      <PricingSection />
      
      {/* Fitness Calculators - Placed after Pricing, before Testimonials */}
      <CalculatorsSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Gallery */}
      <GallerySection />
      
      {/* Class Timetable */}
      <TimetableSection />
      
      {/* Call to Action */}
      <CTASection />
      
      {/* Contact & Booking */}
      <ContactSection />
      
      {/* Footer */}
      <GymFooter />
    </div>
  );
};

export default Index;

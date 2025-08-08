import HeroSection from "@/components/HeroSection";
import RegistrationForm from "@/components/RegistrationForm";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RegistrationForm />
      <WhatYoullLearn />
      <AboutSection />
      <Footer />
      <FaqSection />
      <FooterCTA />
    </div>
  );
};

export default Index;

import Hero from "@/components/Hero";
import AIBenefits from "@/components/AIBenefits";
import CaseStudies from "@/components/CaseStudies";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AIBenefits />
      <CaseStudies />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;

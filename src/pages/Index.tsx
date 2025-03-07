
import { useEffect } from "react";
import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import BinaryConverter from "@/components/BinaryConverter";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";
import NeoMatrixSection from "@/components/NeoMatrixSection";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Binary-Text Converter GPT | AI-Powered Data Conversion";
    
    // Smooth scroll to section if URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    
    // Preload background images for better performance
    const img = new Image();
    img.src = "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-sophisticated-and-futuristic-advertisement-.jpeg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-cyber-dark">
      <NavigationBar />
      
      {/* Added pt-24 class to provide proper top padding to account for the fixed navbar */}
      <main className="pt-16 sm:pt-24">
        <HeroSection />
        
        <section className="py-12 sm:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="cyber-panel overflow-hidden relative max-w-4xl mx-auto">
              <a 
                href="https://neomatrixgpt.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-sophisticated-and-futuristic-advertisement-.jpeg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true"
                  alt="Matrix Neo GPT" 
                  className="w-full h-auto rounded transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </a>
              
              {/* Glowing effect underneath */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-30 blur-xl -z-10"></div>
            </div>
          </div>
        </section>
        
        <FeatureSection />
        <BinaryConverter />
        <TestimonialsSection />
        <NeoMatrixSection />
        <FaqSection />
        <DisclaimerSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

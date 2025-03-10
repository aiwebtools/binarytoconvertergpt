
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
import DisclaimerPopup from "@/components/DisclaimerPopup";
import { Binary } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "Binary-Text Converter GPT | AI-Powered Conversion Tool";
    
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    
    const img = new Image();
    img.src = "https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-sophisticated-and-futuristic-advertisement-.jpeg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-cyber-dark">
      <NavigationBar />
      <DisclaimerPopup />
      
      <main className="pt-16 sm:pt-24">
        <HeroSection />
        <FeatureSection />
        <BinaryConverter />
        <NeoMatrixSection />
        
        <section className="py-12 sm:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="cyber-panel overflow-hidden relative max-w-4xl mx-auto">
              <a 
                href="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-sophisticated-and-futuristic-advertisement-.jpeg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:1200,h:600,cg:true"
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
              
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-30 blur-xl -z-10"></div>
            </div>

            <div className="mt-8 flex justify-center">
              <a 
                href="https://chatgpt.com/g/g-Z2gJ5QYNn-binary-text-converter-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden cyber-panel px-8 py-6 rounded-lg bg-black hover:bg-black/80 transition-all duration-500 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_25%,rgba(68,255,30,0.2)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 animate-matrix-scan"></div>
                
                <div className="flex items-center gap-3 relative z-10">
                  <Binary className="w-6 h-6 text-cyber-green animate-pulse" />
                  <span className="text-cyber-green text-lg font-mono font-bold tracking-wider">
                    Access the full Binary-Text Converter GPT
                  </span>
                </div>
                
                <div className="absolute inset-0.5 -z-10 bg-gradient-to-r from-cyber-green/20 to-cyber-green/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        <FaqSection />
        <DisclaimerSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

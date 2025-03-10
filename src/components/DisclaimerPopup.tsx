
import { useState, useEffect } from "react";
import { Shield, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Button from "@/components/Button";

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem("hasSeenDisclaimer");
    
    if (!hasSeenDisclaimer) {
      // Show popup with a slight delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    // Set flag in localStorage
    localStorage.setItem("hasSeenDisclaimer", "true");
    setIsOpen(false);
    
    // Show confirmation toast
    toast({
      title: "Thanks for agreeing!",
      description: "You can access our disclaimer anytime in the footer.",
      duration: 3000,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md overflow-hidden rounded-lg">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/30 via-cyber-purple/20 to-cyber-green/30 animate-pulse-slow"></div>
        
        {/* Main content */}
        <div className="relative cyber-panel border-2 border-cyber-blue/50 p-6 overflow-hidden">
          {/* Neon scanner effect */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_25%,rgba(68,255,30,0.2)_50%,transparent_75%)] opacity-50 animate-matrix-scan"></div>
          
          {/* Close button */}
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-3 right-3 p-1 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Header */}
          <div className="flex flex-col items-center mb-4">
            <div className="p-3 mb-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/30">
              <Shield className="h-8 w-8 text-cyber-blue animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-center text-white font-sans tracking-wide">
              <span className="text-cyber-blue neon-text">BINARY</span>
              <span className="text-white mx-1">-</span>
              <span className="text-cyber-green neon-text">TEXT</span>
              <span className="block text-white text-xl mt-1">DISCLAIMER</span>
            </h3>
          </div>
          
          {/* Content */}
          <div className="space-y-4 text-gray-300 max-h-64 overflow-y-auto pr-2 custom-scrollbar mb-5">
            <p className="text-sm leading-relaxed">
              By using the <span className="text-cyber-green font-semibold">Binary-Text Converter GPT</span>, you acknowledge that:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>All conversions are provided "as is" without warranties.</li>
              <li>No sensitive or personal data should be converted using this tool.</li>
              <li>We do not store any data you input for conversion.</li>
              <li>You are responsible for ensuring your use of the converted data complies with applicable laws.</li>
              <li>We reserve the right to modify these terms at any time.</li>
            </ul>
            
            <p className="text-sm font-light italic pt-2">
              For the complete disclaimer, please refer to the Disclaimer section at the bottom of this page.
            </p>
          </div>
          
          {/* Action button */}
          <div className="flex justify-center">
            <Button 
              onClick={handleAgree}
              variant="primary" 
              size="lg"
              glowing={true}
              className="relative group w-full sm:w-auto tracking-widest overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                I AGREE
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;

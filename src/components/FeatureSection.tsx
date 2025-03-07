
import { ChevronsDown, Image, MonitorSmartphone, TerminalSquare, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, delay);
  }, [delay]);

  return (
    <div 
      className={`cyber-panel hover-scale relative transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-lg blur-sm -z-10"></div>
      <div className="p-2 rounded-full bg-cyber-blue/10 w-fit mb-4">
        <Icon className="h-6 w-6 text-cyber-blue" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const features = [
  {
    icon: TerminalSquare,
    title: "Text to Binary Conversion",
    description: "Convert any text into 8-bit binary representation with precise encoding for each character, perfect for programming or educational purposes."
  },
  {
    icon: MonitorSmartphone,
    title: "Binary to Text Decoding",
    description: "Instantly decode binary strings back to human-readable text with support for various formatting options and automatic error detection."
  },
  {
    icon: Image,
    title: "Image Conversion",
    description: "Transform images to binary data streams and vice versa with our advanced AI algorithms that maintain complete fidelity throughout the process."
  },
  {
    icon: Zap,
    title: "Interactive Guidance",
    description: "Get step-by-step explanations of the conversion process with our AI assistant that guides you through each transformation with Matrix-inspired dialogue."
  }
];

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("features");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="features" className="py-20 relative overflow-hidden bg-cyber-darker/30">
      {/* Grid background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center relative z-10 mb-16">
          <div 
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced <span className="text-cyber-blue neon-text">Features</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our Binary-Text Converter GPT goes beyond basic conversion with powerful capabilities and an immersive interface.
            </p>
            <div className="mt-8 animate-bounce">
              <ChevronsDown className="h-6 w-6 mx-auto text-cyber-blue" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100 + 300}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-cyber-darker/50 cyber-border rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">How It Works</h3>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="bg-cyber-blue/20 text-cyber-blue font-mono text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Input Your Data</h4>
                <p className="text-gray-400">Enter text, paste binary code, or upload an image file directly to the converter.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="bg-cyber-blue/20 text-cyber-blue font-mono text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">AI Processing</h4>
                <p className="text-gray-400">Our advanced algorithms process your input with Python-powered precision, ensuring 100% accurate conversions.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="bg-cyber-blue/20 text-cyber-blue font-mono text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Get Results</h4>
                <p className="text-gray-400">Receive your converted output instantly, formatted for easy reading or further processing in your projects.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="bg-cyber-blue/20 text-cyber-blue font-mono text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Matrix-Style Guidance</h4>
                <p className="text-gray-400">Get immersive, Morpheus-inspired explanations that make learning about binary conversion entertaining and educational.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

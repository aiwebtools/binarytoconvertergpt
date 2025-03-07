
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
    description: "Convert any text into its binary representation with precise 8-bit encoding for each character."
  },
  {
    icon: MonitorSmartphone,
    title: "Binary to Text Decoding",
    description: "Decode binary strings back to human-readable text with support for various formatting options."
  },
  {
    icon: Image,
    title: "Image Conversion",
    description: "Transform images to binary data and vice versa, maintaining full fidelity throughout the conversion process."
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Experience lightning-fast conversions powered by advanced algorithms and AI technology."
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
              Our Binary-Text Converter GPT offers powerful capabilities that go beyond basic conversion.
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
                <p className="text-gray-400">Enter text or binary code into the converter, or upload an image for conversion.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="bg-cyber-blue/20 text-cyber-blue font-mono text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">AI Processing</h4>
                <p className="text-gray-400">Our advanced AI algorithms process the input data with precision and efficiency.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="bg-cyber-blue/20 text-cyber-blue font-mono text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Get Results</h4>
                <p className="text-gray-400">Receive your converted output instantly, ready for use in your projects or applications.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="bg-cyber-blue/20 text-cyber-blue font-mono text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Further Options</h4>
                <p className="text-gray-400">Customize your conversion with additional settings or save your results for later use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

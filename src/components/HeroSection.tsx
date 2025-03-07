
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import DigitalRain from "./DigitalRain";
import { Binary } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Digital Rain Background */}
      <div className="absolute inset-0 z-0">
        <DigitalRain color="#00f0ff" speed={1} opacity={0.07} />
      </div>
      
      {/* Grid background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-5 z-0"></div>
      
      <div 
        ref={containerRef}
        className="container px-4 mx-auto relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div 
            className={`flex-1 text-center lg:text-left transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30">
              <div className="flex items-center gap-2">
                <Binary className="h-4 w-4 text-cyber-blue" />
                <span className="text-sm font-medium text-cyber-blue">AI-Powered Data Conversion</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="text-glow text-cyber-blue block mb-2">Binary-Text</span> 
              <span className="block">Converter GPT</span>
            </h1>
            
            <p className="text-lg mb-8 text-gray-300 max-w-2xl">
              Convert between text and binary with precision using advanced AI. 
              Transform text to binary code, decode binary back to text, and even convert 
              images to binary and back with perfect accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://chatgpt.com/g/g-Z2gJ5QYNn-binary-text-converter-gpt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" glowing>
                  Start Converting Now
                </Button>
              </a>
              <a 
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          
          <div 
            className={`flex-1 transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* 3D floating effect for the terminal display */}
              <div className="cyber-panel p-8 max-w-lg mx-auto rounded-lg animate-float overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-cyber-blue/70">binary-converter.exe</div>
                </div>
                
                <div className="space-y-4 font-mono">
                  <div className="flex gap-2 items-center">
                    <span className="text-cyber-green">$</span>
                    <div className="typewriter w-full">
                      Enter text to convert: Hello World
                    </div>
                  </div>
                  
                  <div className="text-cyber-blue text-sm">
                    Converting to binary...
                  </div>
                  
                  <div className="bg-cyber-darker/50 p-3 rounded overflow-x-auto">
                    <code className="text-cyber-green text-xs md:text-sm">
                      01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100
                    </code>
                  </div>
                  
                  <div className="flex gap-2 items-center">
                    <span className="text-cyber-green">$</span>
                    <div className="typewriter w-full">
                      Enter binary to convert: 01001101 01100001 01110100 01110010 01101001 01111000
                    </div>
                  </div>
                  
                  <div className="text-cyber-blue text-sm">
                    Converting to text...
                  </div>
                  
                  <div className="bg-cyber-darker/50 p-3 rounded">
                    <code className="text-cyber-purple text-sm md:text-base">Matrix</code>
                  </div>
                  
                  <div className="text-cyber-green text-sm">
                    Conversion complete. <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
              
              {/* Glowing effect underneath */}
              <div className="absolute -inset-0.5 bg-cyber-blue/20 blur-xl rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

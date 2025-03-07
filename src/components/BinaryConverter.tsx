
import { useState, useEffect, ChangeEvent } from "react";
import Button from "./Button";
import { Binary, FileText, RotateCw } from "lucide-react";

const BinaryConverter = () => {
  const [mode, setMode] = useState<"text-to-binary" | "binary-to-text">("text-to-binary");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
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

    const element = document.getElementById("converter");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const textToBinary = (text: string): string => {
    return text
      .split("")
      .map((char) => {
        const binary = char.charCodeAt(0).toString(2);
        // Pad with zeros to make each binary number 8 bits
        return "0".repeat(8 - binary.length) + binary;
      })
      .join(" ");
  };

  const binaryToText = (binary: string): string => {
    // Clean the input by removing any characters that are not 0 or 1
    const cleanBinary = binary.replace(/[^01\s]/g, "");
    // Split by space or by every 8 characters
    const bytes = cleanBinary.includes(" ")
      ? cleanBinary.split(" ")
      : cleanBinary.match(/.{1,8}/g) || [];

    return bytes
      .map((byte) => {
        // Convert only valid 8-bit binary strings
        if (byte.length === 8 && /^[01]+$/.test(byte)) {
          return String.fromCharCode(parseInt(byte, 2));
        }
        return ""; // Return empty string for invalid bytes
      })
      .join("");
  };

  const handleConvert = () => {
    if (!input.trim()) return;

    setIsProcessing(true);
    
    // Simulate processing time for visual effect
    setTimeout(() => {
      if (mode === "text-to-binary") {
        setOutput(textToBinary(input));
      } else {
        setOutput(binaryToText(input));
      }
      setIsProcessing(false);
    }, 600);
  };

  const handleModeToggle = () => {
    setMode(mode === "text-to-binary" ? "binary-to-text" : "text-to-binary");
    setInput("");
    setOutput("");
  };

  return (
    <section 
      id="converter" 
      className={`py-20 px-4 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyber-blue neon-text">Interactive</span> Converter
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the power of our converter right here. Switch between text-to-binary and binary-to-text modes to see it in action.
          </p>
        </div>

        <div className="max-w-4xl mx-auto cyber-panel relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-30 blur rounded-lg -z-10"></div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-400">conversion-terminal</span>
            </div>
            
            <button 
              onClick={handleModeToggle}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-darker border border-cyber-blue/30 text-sm hover:bg-cyber-blue/10 transition-colors duration-200"
            >
              <RotateCw className="h-4 w-4" />
              <span>Switch to {mode === "text-to-binary" ? "Binary → Text" : "Text → Binary"}</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded bg-cyber-blue/20 text-cyber-blue">
                  {mode === "text-to-binary" ? <FileText className="h-4 w-4" /> : <Binary className="h-4 w-4" />}
                </div>
                <label className="font-medium">
                  {mode === "text-to-binary" ? "Enter Text" : "Enter Binary"}
                </label>
              </div>
              <textarea
                value={input}
                onChange={handleInputChange}
                placeholder={mode === "text-to-binary" ? "Enter text here..." : "Enter binary code here (e.g., 01101000 01101001)..."}
                className="w-full h-40 p-3 bg-cyber-darker border border-cyber-blue/30 rounded-md focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue/50 font-mono text-sm resize-none"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded bg-cyber-purple/20 text-cyber-purple">
                  {mode === "text-to-binary" ? <Binary className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                </div>
                <label className="font-medium">
                  {mode === "text-to-binary" ? "Binary Output" : "Text Output"}
                </label>
              </div>
              <div className="relative">
                <textarea
                  value={output}
                  readOnly
                  className="w-full h-40 p-3 bg-cyber-darker border border-cyber-purple/30 rounded-md font-mono text-sm resize-none"
                  placeholder="Output will appear here..."
                />
                {isProcessing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-cyber-darker/80 backdrop-blur-sm">
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyber-blue"></div>
                      <span className="mt-3 text-cyber-blue">Processing...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button 
              onClick={handleConvert} 
              variant="primary"
              disabled={isProcessing || !input.trim()}
              className="w-full md:w-auto"
            >
              {isProcessing ? (
                <span className="flex items-center gap-2">
                  <RotateCw className="h-4 w-4 animate-spin" />
                  Converting...
                </span>
              ) : (
                "Convert"
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BinaryConverter;


import { Binary, Phone, Mail } from "lucide-react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-cyber-darker py-16 border-t border-cyber-blue/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Binary className="h-8 w-8 text-cyber-blue" />
              <div>
                <h3 className="font-bold text-xl tracking-wider">Binary-Text Converter GPT</h3>
                <p className="text-xs text-cyber-blue/70">Presented by AiWebTools.Ai</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-4">
              Advanced AI-powered conversion tool for transforming between binary and text formats with precision and ease.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyber-blue" />
                <a href="tel:+14758008096" className="text-gray-300 hover:text-cyber-blue transition-colors">
                  (475) 800-8096
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyber-blue" />
                <a href="mailto:Contact@ai-webtools.com" className="text-gray-300 hover:text-cyber-blue transition-colors">
                  Contact@ai-webtools.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-Z2gJ5QYNn-binary-text-converter-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  USE Binary-Text Converter GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://neomatrixgpt.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  NEO MATRIX GPT
                </a>
              </li>
              <li>
                <a 
                  href="#faq"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("disclaimer")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("disclaimer")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Legal Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-white">Try It Now</h3>
            <p className="text-gray-400 mb-4">
              Experience the power of our conversion tool today. Start converting text to binary and vice versa in seconds.
            </p>
            
            <a 
              href="https://chatgpt.com/g/g-Z2gJ5QYNn-binary-text-converter-gpt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="w-full mb-4">
                Start Converting
              </Button>
            </a>
            
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <Button variant="outline" className="w-full">
                More AI Tools
              </Button>
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-cyber-blue/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-blue transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyber-blue/10 hover:bg-cyber-blue/20 text-cyber-blue px-6 py-2 rounded-full transition-colors"
            >
              More AI Tools
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

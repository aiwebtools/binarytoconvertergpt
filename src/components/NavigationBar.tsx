
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Binary, Menu, X } from "lucide-react";
import Button from "./Button";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { 
      label: "USE Binary-Text Converter GPT", 
      url: "https://chatgpt.com/g/g-Z2gJ5QYNn-binary-text-converter-gpt", 
      isPrimary: true 
    },
    { 
      label: "MATRIX NEO GPT", 
      url: "https://neomatrixgpt.lovable.app/", 
      isPrimary: false 
    },
    { 
      label: "FAQ", 
      action: () => navigateToSection("faq"), 
      isPrimary: false 
    },
    { 
      label: "Disclaimer", 
      action: () => navigateToSection("disclaimer"), 
      isPrimary: false 
    },
    { 
      label: "More AI Tools", 
      url: "https://www.aiwebtools.ai", 
      isPrimary: false 
    },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-cyber-darker/80 backdrop-blur-lg shadow-lg" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-cyber-blue hover:text-cyber-blue">
          <Binary className="h-6 w-6" />
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wider">Binary-Text Converter GPT</span>
            <span className="text-xs text-cyber-blue/70">Presented by AiWebTools.Ai</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link, index) => (
            link.isPrimary ? (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" className="ml-4">
                  {link.label}
                </Button>
              </a>
            ) : (
              <div key={index}>
                {link.url ? (
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 hover:text-cyber-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    onClick={link.action}
                    className="px-4 py-2 hover:text-cyber-blue transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            )
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-cyber-blue hover:text-cyber-purple"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-cyber-darker/95 backdrop-blur-lg cyber-border border-t border-cyber-blue/30 animate-fade-in">
          <div className="container px-4 mx-auto py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <div key={index} className="w-full">
                  {link.url ? (
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "block w-full text-center py-3",
                        link.isPrimary 
                          ? "cyber-button primary" 
                          : "hover:text-cyber-blue transition-colors duration-200"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={link.action}
                      className="block w-full text-center py-3 hover:text-cyber-blue transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;

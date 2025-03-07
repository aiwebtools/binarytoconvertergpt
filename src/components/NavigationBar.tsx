
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Binary, Menu, X } from "lucide-react";
import Button from "./Button";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    // Close menu when resizing to desktop view
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
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
          ? "py-1 sm:py-2 bg-cyber-darker/80 backdrop-blur-lg shadow-lg" 
          : "py-2 sm:py-4 bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-cyber-blue hover:text-cyber-blue">
          <Binary className="h-5 w-5 sm:h-6 sm:w-6" />
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-wider">Binary-Text Converter GPT</span>
            <span className="text-[10px] sm:text-xs text-cyber-blue/70">Presented by AiWebTools.Ai</span>
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
                <Button variant="primary" className="ml-4 text-sm">
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
                    className="px-3 py-2 text-sm hover:text-cyber-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    onClick={link.action}
                    className="px-3 py-2 text-sm hover:text-cyber-blue transition-colors duration-200"
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
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation - with improved animations and positioning */}
      <div 
        ref={menuRef}
        className={cn(
          "absolute top-full left-0 right-0 bg-cyber-darker/95 backdrop-blur-lg border-t border-cyber-blue/30 transform transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="container px-4 mx-auto py-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <div 
                key={index} 
                className={cn(
                  "w-full transform transition-all duration-300 ease-in-out",
                  isMenuOpen 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-4",
                  `transition-delay-${index * 50}`
                )}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {link.url ? (
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "block w-full text-center py-3 text-sm rounded-md",
                      link.isPrimary 
                        ? "bg-cyber-blue/20 border border-cyber-blue text-white hover:bg-cyber-blue/30" 
                        : "hover:bg-cyber-blue/10 hover:text-cyber-blue transition-colors duration-200"
                    )}
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    onClick={link.action}
                    className="block w-full text-center py-3 text-sm rounded-md hover:bg-cyber-blue/10 hover:text-cyber-blue transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;

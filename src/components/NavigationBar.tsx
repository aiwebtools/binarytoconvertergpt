
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Binary, Menu, X } from "lucide-react";
import Button from "./Button";

const NAV_LINKS = [
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
    sectionId: "faq", 
    isPrimary: false 
  },
  { 
    label: "Disclaimer", 
    sectionId: "disclaimer", 
    isPrimary: false 
  },
  { 
    label: "More AI Tools", 
    url: "https://aiwebtools.lovable.app/?via=aiwebtools", 
    isPrimary: false 
  },
];

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current && !menuRef.current.contains(target) &&
        buttonRef.current && !buttonRef.current.contains(target)
      ) {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) closeMenu();
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleEscape);

    // Prevent body scroll when menu is open on mobile
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, closeMenu]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const navigateToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  }, [closeMenu]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform",
        isScrolled 
          ? "py-1 sm:py-2 bg-cyber-darker/90 backdrop-blur-lg shadow-lg" 
          : "py-2 sm:py-3 bg-transparent"
      )}
    >
      <div className="container px-3 sm:px-4 mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-cyber-blue hover:text-cyber-blue shrink-0">
          <Binary className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-sm sm:text-base md:text-lg tracking-wider truncate">Binary-Text Converter GPT</span>
            <span className="text-[9px] sm:text-[10px] md:text-xs text-cyber-blue/70">Presented by AiWebTools.Ai</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {NAV_LINKS.map((link, index) => (
            link.isPrimary ? (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" className="ml-2 lg:ml-4 text-xs lg:text-sm whitespace-nowrap">
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
                    className="px-2 lg:px-3 py-2 text-xs lg:text-sm hover:text-cyber-blue transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    onClick={() => link.sectionId && navigateToSection(link.sectionId)}
                    className="px-2 lg:px-3 py-2 text-xs lg:text-sm hover:text-cyber-blue transition-colors duration-200 whitespace-nowrap"
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
          ref={buttonRef}
          className="md:hidden p-2 text-cyber-blue hover:text-cyber-purple active:scale-95 transition-transform touch-manipulation"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        ref={menuRef}
        className={cn(
          "absolute top-full left-0 right-0 bg-cyber-darker/95 backdrop-blur-lg border-t border-cyber-blue/30 md:hidden",
          "transition-[opacity,transform] duration-200 ease-out",
          isMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
        style={{ maxHeight: isMenuOpen ? "calc(100vh - 60px)" : 0, overflow: "auto" }}
      >
        <div className="container px-4 mx-auto py-3">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link, index) => (
              <div 
                key={index} 
                className={cn(
                  "w-full transition-all duration-200 ease-out",
                  isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                )}
                style={{ transitionDelay: isMenuOpen ? `${index * 40}ms` : '0ms' }}
              >
                {link.url ? (
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "block w-full text-center py-3 text-sm rounded-md active:scale-[0.98] transition-transform touch-manipulation",
                      link.isPrimary 
                        ? "bg-cyber-blue/20 border border-cyber-blue text-white hover:bg-cyber-blue/30" 
                        : "hover:bg-cyber-blue/10 hover:text-cyber-blue"
                    )}
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    onClick={() => link.sectionId && navigateToSection(link.sectionId)}
                    className="block w-full text-center py-3 text-sm rounded-md hover:bg-cyber-blue/10 hover:text-cyber-blue active:scale-[0.98] transition-transform touch-manipulation"
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

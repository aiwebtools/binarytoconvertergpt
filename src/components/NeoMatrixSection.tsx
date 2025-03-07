
import { useState, useRef, useEffect } from "react";
import MatrixCanvas from "./matrix/MatrixCanvas";
import MatrixInfoPanel from "./matrix/MatrixInfoPanel";
import MatrixTextDisplay from "./matrix/MatrixTextDisplay";
import "./matrix/matrixAnimations.css";

const NeoMatrixSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = containerRef.current;
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
    <section 
      ref={containerRef}
      className={`relative py-12 md:py-16 overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Matrix rain background */}
      {isVisible && <MatrixCanvas containerRef={containerRef} />}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-black/80 backdrop-blur-md p-4 md:p-6 rounded-lg border border-green-500/30">
          <div className="text-center mb-6">
            <h2 className="inline-block text-2xl md:text-3xl font-bold mb-2 text-green-500 border-b-2 border-green-500/30 pb-2">
              You May Also Like: NEO MATRIX GPT
            </h2>
            <p className="text-green-400/80 text-xs md:text-sm">
              Presented by AiWebTools.Ai
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-stretch">
            <MatrixInfoPanel />
            <MatrixTextDisplay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeoMatrixSection;

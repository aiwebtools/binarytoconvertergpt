
import { useEffect, useState, useRef } from "react";
import Button from "./Button";
import { ExternalLink } from "lucide-react";

const NeoMatrixSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          
          if (canvasRef.current) {
            startMatrixEffect();
          }
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

  const startMatrixEffect = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make canvas full width and height of container
    const resizeCanvas = () => {
      const container = containerRef.current;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const binary = '01';
    
    const alphabet = katakana + binary;
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    
    const rainDrops: number[] = [];
    
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };
    
    const interval = setInterval(draw, 60);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  };

  return (
    <section 
      ref={containerRef}
      className={`relative py-12 md:py-16 overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Matrix rain background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
      
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
            <div className="space-y-3 md:flex-1">
              <p className="text-green-300 text-xs md:text-sm leading-relaxed">
                <strong className="text-green-400">NEO MATRIX GPT</strong> takes you on a journey down the rabbit hole, 
                challenging your perception of reality through interactive philosophical exploration.
              </p>
              
              <div className="space-y-2 max-w-lg mx-auto md:mx-0">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-300">
                    <span className="text-green-400">Binary Translation:</span> Decode hidden messages revealing the structure of your simulated reality
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-300">
                    <span className="text-green-400">Reality Keys:</span> Unlock new perspectives about the nature of existence
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-300">
                    <span className="text-green-400">Follow the White Rabbit:</span> Guided journey of awakening with each interaction
                  </p>
                </div>
              </div>
              
              <div className="pt-4 flex justify-center md:justify-start">
                <a 
                  href="https://neomatrixgpt.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full sm:w-auto bg-black border border-green-500 text-green-500 hover:bg-green-900/20">
                    <span className="flex items-center gap-2">
                      <span>Follow The White Rabbit</span>
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative group md:flex-1">
              <div className="cyber-panel p-4 bg-black border border-green-500/40 group-hover:border-green-500/70 transition-all duration-500 max-w-sm mx-auto">
                <div className="overflow-hidden h-32 md:h-48 relative font-mono text-green-500 text-xs leading-relaxed">
                  <div className="animate-scrolling-text absolute">
                    <p>ヒノフサツニモネピラワピピケヅポゾブトバセミポフヨミルペイツヘジヘヤ0ダミドンメタドブパビアアルフヲホスヌミオモケザヨパロノヲウヌビドノメジヅ0ギ0ゾギ1アオフヨモキパメゾクピセビラデニツギヅフツドレゾボメビダンヌラブヨポテコポ1ベバロ0ベダズシサクツソセキヂワシタリテギムゾレルペダニホヲレソサンツブギネウニダロヨパダヅソエイヘモグノスエゲポタヒヘゼジドベレデヲヲシソアパ...</p>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <div className="inline-block border border-green-500/50 px-3 py-1 rounded-sm text-green-500 text-sm">
                    <span className="animate-pulse">WAKE UP NEO...</span>
                  </div>
                </div>
              </div>
              
              {/* Glowing effect */}
              <div className="absolute -inset-0.5 bg-green-500/20 opacity-0 group-hover:opacity-100 blur rounded-lg -z-10 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animation for scrolling text */}
      <style>
        {`
          @keyframes scrolling {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          
          .animate-scrolling-text {
            animation: scrolling 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default NeoMatrixSection;

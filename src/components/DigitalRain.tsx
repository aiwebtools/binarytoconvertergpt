
import { useEffect, useRef } from "react";

interface DigitalRainProps {
  color?: string;
  speed?: number;
  opacity?: number;
}

const DigitalRain = ({ 
  color = "#00f0ff", 
  speed = 1, 
  opacity = 0.15 
}: DigitalRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Binary characters and numbers
    const chars = "01";

    // Position of the falling characters
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }

    const draw = () => {
      // Black semi-transparent background to show trail
      ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color and font
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Add a random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // x = i * fontSize, y = value of drops[i]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Randomize the opacity for a more realistic effect
        ctx.globalAlpha = Math.random() * opacity + 0.1;
        
        // If drops reach bottom of screen or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        
        // Increment y coordinate
        drops[i]++;
      }
      
      // Reset opacity
      ctx.globalAlpha = 1;
    };

    const interval = setInterval(draw, 50 / speed);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [color, speed, opacity]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default DigitalRain;

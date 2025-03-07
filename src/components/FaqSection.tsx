
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Binary-Text Converter GPT?",
    answer: "Binary-Text Converter GPT is an AI-powered tool that converts text to binary and vice versa with precision. It features an immersive Matrix-inspired interface that guides you through each step of the conversion process while providing educational insights about binary encoding."
  },
  {
    question: "How does the text to binary conversion work?",
    answer: "The tool converts each character in your text to its ASCII value, then transforms that into an 8-bit binary representation. For example, the letter 'A' (ASCII 65) becomes '01000001' in binary. The tool handles this process automatically with perfect accuracy using Python-based algorithms."
  },
  {
    question: "Can I convert images to binary?",
    answer: "Yes! Our tool supports converting images to binary data streams. The GPT can take an image file, process it byte by byte, and produce the complete binary representation. You can also convert binary data back to an image, with the AI maintaining perfect fidelity throughout the conversion process."
  },
  {
    question: "What makes this converter different from others?",
    answer: "Our converter combines technical precision with an immersive, educational experience. The Matrix-themed interface and Morpheus-style guidance make learning about binary code engaging, while the Python-powered conversion algorithms ensure 100% accuracy for all your conversion needs."
  },
  {
    question: "Is there a limit to how much text I can convert?",
    answer: "The tool can handle substantial amounts of text, but for optimal performance, we recommend keeping conversions under 10MB of data at a time. For larger conversions, you may want to split your data into smaller chunks."
  },
  {
    question: "How can I use this for educational purposes?",
    answer: "The Binary-Text Converter GPT is perfect for teaching binary concepts in computer science classes, learning about data encoding, or exploring how computers represent information. The step-by-step explanations help students understand the conversion process, making abstract concepts more tangible."
  }
];

const FaqItem = ({ 
  faq, 
  isOpen, 
  toggleOpen, 
  delay = 0 
}: { 
  faq: FaqItem; 
  isOpen: boolean; 
  toggleOpen: () => void; 
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
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <button 
        onClick={toggleOpen}
        className="w-full text-left flex justify-between items-center py-4 px-6 cyber-panel hover:bg-cyber-blue/5 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium">{faq.question}</h3>
        <div>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-cyber-blue" />
          ) : (
            <ChevronDown className="h-5 w-5 text-cyber-blue" />
          )}
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-4 px-6 bg-cyber-blue/5 border-t border-cyber-blue/20 text-gray-300">
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

    const element = document.getElementById("faq");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-cyber-darker/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div 
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-cyber-blue neon-text">Questions</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about our Binary-Text Converter GPT. Learn about its features, capabilities, and how it can help you with binary and text conversions.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              toggleOpen={() => toggleFaq(index)} 
              delay={index * 100 + 300}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

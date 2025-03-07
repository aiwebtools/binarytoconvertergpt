
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Binary-Text Converter GPT?",
    answer: "Binary-Text Converter GPT is an AI-powered tool that allows you to convert text to binary code and vice versa. It also supports advanced features like image to binary conversion, making it a versatile tool for various data conversion needs."
  },
  {
    question: "How accurate are the conversions?",
    answer: "Our conversions are highly accurate. We use standard 8-bit ASCII encoding for text-to-binary conversion, ensuring that each character is precisely represented. The tool is designed to handle various input formats and edge cases."
  },
  {
    question: "Can I convert images to binary?",
    answer: "Yes! Our tool supports converting images to binary data. You can upload an image, and the AI will convert it to a binary representation that can later be converted back to the original image."
  },
  {
    question: "Is there a limit to how much text I can convert?",
    answer: "The tool can handle substantial amounts of text, but for optimal performance, we recommend keeping conversions under 10MB of data at a time. For larger conversions, you may want to split your data into smaller chunks."
  },
  {
    question: "Do you store the data I convert?",
    answer: "We do not permanently store any data you convert. Your data is processed in memory during the conversion and is not saved on our servers after the operation is complete, ensuring your privacy and data security."
  },
  {
    question: "Can I use this tool for programming or educational purposes?",
    answer: "Absolutely! The Binary-Text Converter GPT is perfect for educational purposes, programming tasks, data analysis, and more. Many developers, students, and professionals use our tool regularly for their work."
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
              Everything you need to know about our Binary-Text Converter GPT. If you can't find the answer you're looking for, feel free to contact us.
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

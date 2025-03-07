
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Johnson",
    role: "Software Developer",
    quote: "The binary conversion precision is remarkable. I use this tool daily for my programming projects and it never disappoints.",
    rating: 5
  },
  {
    name: "Samantha Chen",
    role: "Data Scientist",
    quote: "The image to binary conversion feature saved me countless hours of work. The algorithm is incredibly efficient and accurate.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Cybersecurity Analyst",
    quote: "As someone who works with binary data constantly, this tool has become essential in my workflow. Absolutely recommend it.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Computer Science Student",
    quote: "The interface is intuitive and the conversions are lightning fast. Perfect for my studies and projects.",
    rating: 4
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, index * 150);
  }, [index]);

  return (
    <div 
      className={`cyber-panel h-full transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < testimonial.rating ? "text-cyber-yellow fill-cyber-yellow" : "text-gray-600"}`} 
              />
            ))}
          </div>
        </div>
      </div>
      
      <blockquote className="text-gray-300 mb-4">"{testimonial.quote}"</blockquote>
      
      <div className="mt-auto">
        <p className="font-bold">{testimonial.name}</p>
        <p className="text-sm text-gray-400">{testimonial.role}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
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

    const element = document.getElementById("testimonials");
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
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div 
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Users Are <span className="text-cyber-blue neon-text">Saying</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied users who rely on our Binary-Text Converter GPT for their conversion needs.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
        
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a 
            href="https://chatgpt.com/g/g-Z2gJ5QYNn-binary-text-converter-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button primary"
          >
            Try It Yourself
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

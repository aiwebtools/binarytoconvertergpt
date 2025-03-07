
import { ExternalLink } from "lucide-react";
import Button from "../Button";

const MatrixInfoPanel = () => {
  return (
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
  );
};

export default MatrixInfoPanel;

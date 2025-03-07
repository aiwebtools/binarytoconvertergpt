
import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
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

    const element = document.getElementById("disclaimer");
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
    <section id="disclaimer" className="py-20">
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-4xl mx-auto cyber-panel transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-cyber-blue/10">
              <AlertTriangle className="h-6 w-6 text-cyber-blue" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Legal Disclaimer</h2>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-white">General Information:</strong> The Binary-Text Converter GPT ("the Tool") is provided by AI Web Tools LLC ("we", "us", "our") for informational and conversion purposes only. By using this Tool, you acknowledge and agree to the following terms:
            </p>
            
            <p>
              <strong className="text-white">No Warranty:</strong> The Tool is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            
            <p>
              <strong className="text-white">Limitation of Liability:</strong> In no event shall AI Web Tools LLC, its affiliates, or their respective officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Tool; (ii) any conduct or content of any third party on the Tool; (iii) any content obtained from the Tool; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
            
            <p>
              <strong className="text-white">Data Privacy:</strong> We do not store any data that you input for conversion. All processing is done in memory and is not retained after the conversion process is complete. However, we recommend against inputting any sensitive or confidential information.
            </p>
            
            <p>
              <strong className="text-white">Appropriate Use:</strong> You agree to use the Tool only for lawful purposes and in accordance with these terms. You are solely responsible for ensuring that your use of the converted data complies with applicable laws and regulations.
            </p>
            
            <p>
              <strong className="text-white">Changes to Terms:</strong> We reserve the right to modify these terms at any time. It is your responsibility to check for updates. Your continued use of the Tool after any changes constitutes acceptance of those changes.
            </p>
            
            <p>
              <strong className="text-white">Contact Information:</strong> For any questions regarding this disclaimer, please contact us at <a href="mailto:Contact@ai-webtools.com" className="underline hover:text-cyber-blue">Contact@ai-webtools.com</a>.
            </p>
            
            <p className="text-sm text-gray-400">
              Last updated: June 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;

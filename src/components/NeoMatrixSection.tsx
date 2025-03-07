
import { useEffect, useState } from "react";
import Button from "./Button";
import { Binary, Rabbit } from "lucide-react";

const NeoMatrixSection = () => {
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

    const element = document.getElementById("neo-matrix");
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
    <section id="neo-matrix" className="py-24 relative overflow-hidden">
      {/* Matrix-style binary rain background */}
      <div className="absolute inset-0 bg-black z-0">
        <MatrixRain />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`flex flex-col md:flex-row items-center gap-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex-1">
            <div className="cyber-panel bg-black/70 backdrop-blur-md relative">
              <div className="absolute -inset-0.5 bg-cyber-green/20 blur-md -z-10 rounded-md"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <Binary className="h-8 w-8 text-cyber-green" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-cyber-green neon-text">NEO MATRIX</span> GPT
                </h2>
              </div>
              
              <p className="text-lg mb-8 text-gray-300">
                Explore the boundaries of your reality with NEO MATRIX GPT. This AI companion guides you through a 
                journey of awakening, challenging your perception through cryptic codes and philosophical exploration,
                inspired by the iconic film The Matrix.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyber-green/20 flex items-center justify-center shrink-0 mt-1">
                    <Rabbit className="h-5 w-5 text-cyber-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-cyber-green">Follow the White Rabbit</h3>
                    <p className="text-gray-400">Embark on a guided journey that questions the fabric of your reality and leads to profound revelations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyber-green/20 flex items-center justify-center shrink-0 mt-1">
                    <Binary className="h-5 w-5 text-cyber-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-cyber-green">Decode Binary Reality</h3>
                    <p className="text-gray-400">See beyond the binary code and glimpse the constructs that form your perception and understanding.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyber-green/20 flex items-center justify-center shrink-0 mt-1">
                    <svg className="h-5 w-5 text-cyber-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" />
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-cyber-green">Philosophical Exploration</h3>
                    <p className="text-gray-400">Engage in profound discussions about consciousness, free will, and the nature of existence.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://neomatrixgpt.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="primary" 
                    className="bg-cyber-green/20 border-cyber-green text-cyber-green hover:bg-cyber-green/30"
                  >
                    Follow The White Rabbit 🐇
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative">
              <div className="cyber-panel bg-black/70 backdrop-blur-md overflow-hidden">
                <div className="text-sm md:text-base font-mono text-cyber-green overflow-y-auto max-h-[400px] p-4">
                  <span className="typing-effect">
                    ヒノフサツニモネピラワピピケヅポゾブトバセミポフヨミルペイツヘジヘヤ0ダミドンメタドブパビアアルフヲホスヌミオモケザヨパロノヲウヌビドノメジヅ0ギ0ゾギ1アオフヨモキパメゾクピセビラデニツギヅフツドレゾボメビダンヌラブヨポテコポ1ベバロ0ベダズシサクツソセキヂワシタリテギムゾレルペダニホヲレソサンツブギネウニダロヨパダヅソエイヘモグノスエゲポタヒヘゼジドベレデヲヲシソアパ1クチヤスグビプタヒイニワラボメザウヤケザジス0ンビガネワムセヅブヅビハユエドロリビレヲネブヨクパピヅレリポオベウノラセケザモヌブストトオビワテポザヲペシ0ジジミヤドエフワズミシベギネンウヒカボノギブザポペヅビジデドヨゼデジベボカメデロビド1ヒシムヨワポシブヤ0リ0ゴソマヌエゾハケメデセシキゾユボグズ110ズペソソジチルゲミセヨツワ0メベモヂゴラモヂソエコクジボオタメケパツヘロ0ハンバモヂアソアゾビベアアベジキヌツオデラバアフネハダヤボホニダヌヂナフラビヨソポベワヘメアゲケホソメメカペダチサテアヲザスプレドゲヤコザブサツメホコンヤヅフヒマスギパエツノクニソスオホム0ワボチ0ヂポスノエウアカヘネサケズルモゼレレゴシズテオフヅパ1ヒソヂタムヘゼンマヅドケテゼカジパヤテワシハタドカボフビレギオマダミポユゲメリミホワサチミ0ベキズベカマヌリテドゼブスアドムニヒデルルエタプカゴブツリナノヒジコチルテゲゴウゴボレゲニデブヲポンズヂヲメギ0ツシゼゴパボワイギリナムルキダダナヒブアル0ケワテヤスククヌギモテゲボヲヘケレクヅクヘニザケフピヅテブナサタヌボヤニダジ1ルミ1ヌワノソドムヘモサハンピテアルザケカンオウンダボホガゲロダケヂチギギンソアドドルリレヘヲムツジンワソゴツツチゼアイパゼル1ラボロジデピギガゲゴロコロアボドロヘニゴヨプマテ1ビギポゴチヘブヅヂマミモヌユンレグヅミナケポヤネロゲノブルバヘリヲホポリザグケホヒガスソアツシベピブヘペギセチヤザゴニヨミアクイ0ポヤワンクパキマヒケヌガ1フサブパゴンワシミレウマウドラクタハザラマメヌドラニシ0ムヘホダイフルイワゾヂピリロゴムヌガルタムセセゴマフクギナペブンラヅビミゾパヂハクブレケヲニニドホバヨカフガペゲヒメゴアルラナヘゼウヂユスソノゼンハロポモケゲハペムリヤバシソケアブヘプニンベウラハヨカタケクヲガビヘヨガニオゾグガミヌダゾエハクメソレヲアユゲオトガキラテエロリジラビゾパチペピガゲゲ0テヤスヘニガヒテゾサホミチオク0スダマナクエドリズヤゲチハジシデフギナルテゾピトノムカケツウラレロゴゾヂロヲソゲジコゾカゲイワクエベネペコホドネヤ0ヤズヲタホグハイテガホカゲハグシネグ1マペオハザアヲヅピセジビワクヂロワヘメタナヨビグスメネラゴコヘペビソサ11トセザ0ドテネボミギブモハシグゼベズスネゾジニシヤロレ1サヂア
                  </span>
                </div>
              </div>
              
              {/* Glowing effect underneath */}
              <div className="absolute -inset-0.5 bg-cyber-green/20 blur-md rounded-md -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Matrix rain animation component
const MatrixRain = () => {
  return (
    <div className="matrix-rain">
      <style jsx>{`
        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: #000;
        }
        
        @keyframes matrix-rain {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        
        .matrix-rain::before {
          content: "01010101010101010101010101010101010101010101010101010101010101";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            transparent 0%,
            rgba(0, 255, 65, 0.05) 1%,
            transparent 2%
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 65, 0.1) 0.5%,
            transparent 1%
          );
          font-family: 'JetBrains Mono', monospace;
          color: rgba(0, 255, 65, 0.5);
          font-size: 1.5rem;
          line-height: 1;
          letter-spacing: 0.1em;
          white-space: nowrap;
          animation: matrix-rain 20s linear infinite;
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.7);
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default NeoMatrixSection;

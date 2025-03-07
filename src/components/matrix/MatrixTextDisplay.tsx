
const MatrixTextDisplay = () => {
  return (
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
  );
};

export default MatrixTextDisplay;

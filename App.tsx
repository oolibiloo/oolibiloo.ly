import React, { useState, useEffect } from 'react';
import { Menu, X, Key, FlaskConical } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Logo from './components/Logo';
import AiLab from './components/AiLab';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAiLab, setShowAiLab] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio && window.aistudio.hasSelectedApiKey) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      }
    };
    checkKey();
  }, []);

  const handleOpenKeySelection = async () => {
    if (window.aistudio && window.aistudio.openSelectKey) {
      await window.aistudio.openSelectKey();
      setHasKey(true); // Assume success per instructions
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-brand/30 selection:text-brand">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => setShowAiLab(false)}>
              <Logo />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => setShowAiLab(!showAiLab)}
                className={`flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold transition-colors ${showAiLab ? 'text-brand' : 'text-slate-400 hover:text-brand'}`}
              >
                <FlaskConical className="w-4 h-4" />
                مختبر الإبداع
              </button>
              
              {['الرئيسية', 'المشاريع', 'التقنيات'].map((item) => (
                <a key={item} href="#" className="text-[11px] uppercase tracking-widest font-bold text-slate-400 hover:text-brand transition-colors">
                  {item}
                </a>
              ))}

              <button 
                onClick={handleOpenKeySelection}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all text-[10px] font-bold uppercase tracking-tighter ${hasKey ? 'border-brand/20 text-brand bg-brand/5' : 'border-amber-500/20 text-amber-500 bg-amber-500/5'}`}
              >
                <Key className="w-3 h-3" />
                {hasKey ? 'API Key Active' : 'Setup AI Key'}
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/5 absolute w-full shadow-2xl">
            <div className="px-6 py-8 space-y-6 flex flex-col items-center text-center">
              <button onClick={() => { setShowAiLab(true); setIsMenuOpen(false); }} className="text-sm text-slate-300 font-bold uppercase">مختبر الإبداع</button>
              <button onClick={handleOpenKeySelection} className="text-sm text-brand font-bold uppercase tracking-widest flex items-center gap-2">
                <Key className="w-4 h-4" />
                إعداد المفتاح
              </button>
              {['الرئيسية', 'المشاريع', 'التقنيات'].map((item) => (
                <a key={item} href="#" className="text-sm text-slate-300 hover:text-brand font-bold uppercase">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {showAiLab ? (
          <AiLab hasKey={hasKey} onSelectKey={handleOpenKeySelection} />
        ) : (
          <>
            <Hero onEnterLab={() => setShowAiLab(true)} />
            
            {/* About Section */}
            <section className="py-24 bg-slate-950 relative border-y border-white/5">
               <div className="max-w-4xl mx-auto px-6 text-center">
                 <span className="text-brand text-[10px] tracking-[0.5em] font-bold uppercase mb-6 block font-futuristic">Profile • Bio</span>
                 <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-white">
                   نحن نصنع الغد، <span className="text-brand">اليوم.</span>
                 </h2>
                 <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                   أنا نبيل يوسف الطواحني، مهندس برمجيات ومبتكر في مجال الذكاء الاصطناعي.
                   رؤيتي لعام <span className="text-white font-medium">2026</span> هي عالم حيث التكنولوجيا تعمل بصمت وكفاءة لخدمة البشرية.
                 </p>
               </div>
            </section>

            <Features />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
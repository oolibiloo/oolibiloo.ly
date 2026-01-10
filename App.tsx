import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-brand selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Text */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold font-futuristic text-brand">NYT</span>
              <span className="text-sm text-gray-400 border-r border-gray-600 pr-2 mr-2">oolibiloo</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-300 hover:text-brand transition-colors">الرئيسية</a>
              <a href="#" className="text-gray-300 hover:text-brand transition-colors">عن نبيل</a>
              <a href="#" className="text-gray-300 hover:text-brand transition-colors">المشاريع</a>
              <a href="#" className="text-gray-300 hover:text-brand transition-colors">التقنيات</a>
              <button className="px-5 py-2 rounded-full border border-brand/50 text-brand hover:bg-brand hover:text-black transition-all text-sm font-bold">
                تواصل معنا
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-900 border-b border-white/10">
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              <a href="#" className="text-lg text-gray-300 hover:text-brand">الرئيسية</a>
              <a href="#" className="text-lg text-gray-300 hover:text-brand">عن نبيل</a>
              <a href="#" className="text-lg text-gray-300 hover:text-brand">المشاريع</a>
              <a href="#" className="text-lg text-gray-300 hover:text-brand">التقنيات</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        
        {/* About Preview Section */}
        <section className="py-20 bg-dark-900 flex items-center justify-center">
           <div className="max-w-4xl px-4 text-center">
             <span className="text-brand text-sm tracking-widest font-bold uppercase mb-4 block">نبذة تعريفية</span>
             <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
               نحن نصنع الغد، <br/>
               <span className="text-gray-500">اليوم.</span>
             </h2>
             <p className="text-xl text-gray-400 leading-relaxed">
               أنا نبيل يوسف الطواحني، مهندس برمجيات ومبتكر في مجال الذكاء الاصطناعي.
               أسعى لدمج الإبداع البشري مع قوة الآلة لبناء أنظمة رقمية تتجاوز التوقعات.
               رؤيتي لعام 2026 هي عالم حيث التكنولوجيا تعمل بصمت وكفاءة لخدمة البشرية.
             </p>
           </div>
        </section>

        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default App;
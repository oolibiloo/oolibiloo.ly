import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDown, Cpu, Sparkles } from 'lucide-react';
import ParticleNetwork from './ParticleNetwork';

interface HeroProps {
  onEnterLab?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEnterLab }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]); 
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 perspective-container pt-16">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <ParticleNetwork />
        
        {/* Cyber Grid Floor */}
        <div className="absolute bottom-0 left-[-50%] right-[-50%] h-[50vh] transform perspective-[500px] rotate-x-[60deg] opacity-30 pointer-events-none">
           <div className="w-full h-full bg-cyber-grid bg-[length:40px_40px] animate-grid-move"></div>
        </div>
        
        {/* Glow Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        
        {/* 3D Glass Card Container */}
        <motion.div
          ref={cardRef}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
          className="relative mb-12 group"
        >
          {/* Neon Border Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand/50 to-blue-500/50 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-60 transition duration-700"></div>
          
          {/* Dark Glass Card */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col items-center justify-center overflow-hidden transform-gpu">
            
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            
            {/* Tech Ring */}
            <div className="absolute w-[85%] h-[85%] border border-dashed border-brand/20 rounded-full animate-spin-slow"></div>
            
            {/* Branding Text in Card */}
            <motion.div 
              className="relative z-10 flex flex-col items-center"
              style={{ transform: "translateZ(50px)" }}
            >
              <h2 className="font-futuristic text-4xl md:text-5xl font-black text-white tracking-tighter mb-1">
                NY<span className="text-brand">T</span>
              </h2>
              <p className="text-[10px] font-futuristic tracking-[0.4em] text-brand/80">OOLIBILOO</p>
            </motion.div>
            
            <div className="absolute bottom-6 font-futuristic text-[8px] text-white/20 tracking-widest uppercase" style={{ transform: "translateZ(20px)" }}>
              System Active 2026
            </div>
          </div>
        </motion.div>

        {/* Text Headline */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5 }}
           className="mb-6"
        >
           <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
             المستقبل <span className="text-brand">يبدأ هنا</span>
           </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 font-light"
        >
          استكشف الجيل القادم من الذكاء الاصطناعي والأتمتة الرقمية مع <span className="text-brand font-futuristic">نبيل يوسف الطواحني</span>
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 z-20"
        >
          <button 
            onClick={onEnterLab}
            className="group relative px-10 py-4 bg-brand text-slate-950 text-sm font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,230,153,0.4)]"
          >
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              دخول مختبر الإبداع
            </span>
          </button>
          
          <button className="group px-10 py-4 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-md">
            <Cpu className="w-4 h-4 text-brand" />
            استعراض المشاريع
          </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 animate-bounce cursor-pointer z-20 text-brand/50"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Cpu, Sparkles, Binary } from 'lucide-react';
import ParticleNetwork from './ParticleNetwork';

const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-900 perspective-container">
      
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0">
        <ParticleNetwork />
        
        {/* Animated Cyber Grid Floor */}
        <div className="absolute bottom-0 left-[-50%] right-[-50%] h-[50vh] transform perspective-[500px] rotate-x-[60deg] opacity-30 pointer-events-none">
           <div className="w-full h-full bg-cyber-grid bg-[length:50px_50px] animate-grid-move shadow-[0_0_100px_rgba(0,210,170,0.2)]"></div>
        </div>
        
        {/* Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-transparent to-dark-900 pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        
        {/* 3D Holographic Logo Container */}
        <motion.div
          ref={cardRef}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative mb-12 group perspective-1000"
        >
          {/* Outer Glow Ring */}
          <div className="absolute -inset-10 bg-brand/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          
          {/* The Card */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-black/60 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-[0_0_50px_-10px_rgba(0,210,170,0.3)] flex items-center justify-center overflow-hidden transform-gpu">
            
            {/* Animated Background inside Card */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,170,0.15),transparent_70%)] animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            
            {/* Rotating Ring */}
            <div className="absolute w-[120%] h-[120%] border border-dashed border-brand/30 rounded-full animate-spin-slow"></div>
            
            {/* Logo Image */}
            <motion.img 
              src="https://i.imgur.com/kS5x87J.jpeg" 
              alt="Nyt oolibiloo Logo" 
              className="relative z-10 w-56 md:w-72 h-auto object-contain mix-blend-screen drop-shadow-[0_0_20px_rgba(0,210,170,0.5)]"
              style={{ transform: "translateZ(50px)" }} 
            />
            
            {/* Scanning Beam */}
            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-50 blur-sm animate-[scan_3s_ease-in-out_infinite] top-[-10%]"></div>
          </div>
          
          {/* Reflected Shadow */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black blur-xl opacity-60 rounded-[100%]"></div>
        </motion.div>

        {/* Sculpted Text Headline */}
        <div className="relative mb-8">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="text-6xl md:text-8xl font-black tracking-tight relative z-10"
           >
             <span className="text-glow-sculpt block md:inline">المستقبل</span>
             <span className="mx-4 hidden md:inline text-brand/50">✦</span>
             <span className="text-glow-sculpt block md:inline">يبدأ هنا</span>
           </motion.h1>
           
           {/* Background echo text for depth */}
           <h1 className="absolute top-1 left-1 w-full text-6xl md:text-8xl font-black tracking-tight text-brand/10 blur-[2px] z-0 select-none" aria-hidden="true">
             <span className="block md:inline">المستقبل</span>
             <span className="mx-4 hidden md:inline">✦</span>
             <span className="block md:inline">يبدأ هنا</span>
           </h1>
        </div>

        {/* Subtitle with typing effect concept */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative px-6 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md mb-10 overflow-hidden"
        >
          <div className="absolute top-0 left-0 h-full w-1 bg-brand animate-[scan_2s_infinite]"></div>
          <p className="text-lg md:text-2xl text-gray-300 font-light dir-rtl">
            استكشف الجيل القادم من الذكاء الاصطناعي والأتمتة الرقمية في عام <span className="font-futuristic font-bold text-brand text-2xl">2026</span>
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 z-20"
        >
          <button className="group relative px-8 py-4 bg-brand text-black font-bold rounded-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,210,170,0.6)]">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              أطلق العنان للذكاء
            </span>
          </button>
          
          <button className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 hover:border-brand/50 transition-all flex items-center gap-2">
            <Binary className="w-5 h-5 text-gray-400 group-hover:text-brand transition-colors" />
            شاهد العرض التوضيحي
          </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce cursor-pointer z-20"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ArrowDown className="text-brand w-8 h-8 drop-shadow-[0_0_10px_rgba(0,210,170,0.8)]" />
      </motion.div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-right flex flex-col items-center md:items-end">
            <Logo className="mb-4 scale-125 origin-right" />
            <p className="text-slate-500 text-sm font-futuristic tracking-wider">Nabeel Yousef Altowhani</p>
          </div>
          
          <div className="flex gap-5">
            {[Mail, Linkedin, Twitter, Github].map((Icon, i) => (
              <a 
                key={i}
                href="#" 
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/50 hover:bg-brand/10 transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest">
          <p>&copy; 2026 Nabeel Yousef Altowhani. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="hover:text-brand transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms</a>
            <span className="text-brand/40">Power by Innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
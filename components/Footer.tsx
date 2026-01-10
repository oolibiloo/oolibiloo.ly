import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-right">
            <h3 className="text-3xl font-bold text-white mb-2 font-futuristic">oolibiloo</h3>
            <p className="text-gray-400">Nabeel Yousef Altowhani</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-black transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-black transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-black transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-black transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 Nabeel Yousef Altowhani. جميع الحقوق محفوظة.</p>
          <p className="mt-2 md:mt-0 font-futuristic">Designed by AI • Powered by Innovation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
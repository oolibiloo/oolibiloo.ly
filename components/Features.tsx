import React from 'react';
import { motion } from 'framer-motion';
import { Bot, BrainCircuit, Code2, Globe2, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "أتمتة ذكية",
    desc: "حلول أتمتة متقدمة تحاكي سير العمل البشري بدقة وكفاءة."
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "الشبكات العصبية",
    desc: "نماذج ذكاء اصطناعي قادرة على التعلم والتكيف المستمر."
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "الويب 3.0",
    desc: "تطبيقات لا مركزية تواكب عصر الميتافيرس الجديد."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "سرعة فائقة",
    desc: "بنية تحتية رقمية تعمل في الوقت الفعلي بأقل زمن استجابة."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "خوارزميات متطورة",
    desc: "هندسة برمجية لمعالجة البيانات الضخمة بدقة متناهية."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "أمن سيبراني",
    desc: "حماية استباقية للأنظمة الذكية بتقنيات تشفير الجيل القادم."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[150px] -mr-64 -mt-64"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand font-futuristic text-xs tracking-[0.3em] uppercase mb-4 block"
          >
            Capabilities 2026
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">آفاق التكنولوجيا</h2>
          <div className="h-1 w-20 bg-brand mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-slate-900/50 backdrop-blur-lg border border-white/5 p-8 rounded-3xl hover:border-brand/40 hover:bg-slate-900/80 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-brand/10 rounded-2xl w-fit text-brand group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,230,153,0.1)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
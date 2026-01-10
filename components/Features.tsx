import React from 'react';
import { motion } from 'framer-motion';
import { Bot, BrainCircuit, Code2, Globe2, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-10 h-10 text-brand" />,
    title: "أتمتة ذكية",
    desc: "حلول أتمتة متقدمة تحاكي سير العمل البشري بدقة غير مسبوقة لتحقيق الكفاءة القصوى."
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-purple-400" />,
    title: "الشبكات العصبية",
    desc: "بناء وتدريب نماذج ذكاء اصطناعي قادرة على التعلم والتكيف مع التغيرات المستقبلية."
  },
  {
    icon: <Globe2 className="w-10 h-10 text-blue-400" />,
    title: "الويب 3.0",
    desc: "تطوير تطبيقات لا مركزية تواكب عصر الميتافيرس والإنترنت الجديد."
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    title: "سرعة فائقة",
    desc: "بنية تحتية رقمية مصممة للعمل في الوقت الفعلي بأقل زمن استجابة ممكن."
  },
  {
    icon: <Code2 className="w-10 h-10 text-pink-400" />,
    title: "خوارزميات متطورة",
    desc: "هندسة برمجية تعتمد على أحدث الخوارزميات لمعالجة البيانات الضخمة."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-400" />,
    title: "أمن سيبراني",
    desc: "حماية الأنظمة الذكية بتقنيات تشفير ومراقبة استباقية من الجيل التالي."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-dark-800 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">رؤية 2026</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">نحول الأفكار المعقدة إلى واقع رقمي ملموس باستخدام تقنيات لم يراها العالم من قبل.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-brand/50 transition-colors duration-300 group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:bg-brand/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
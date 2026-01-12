import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Image as ImageIcon, Loader2, AlertCircle, ExternalLink, Key } from 'lucide-react';

interface AiLabProps {
  hasKey: boolean;
  onSelectKey: () => void;
}

const AiLab: React.FC<AiLabProps> = ({ hasKey, onSelectKey }) => {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    
    if (!hasKey) {
      onSelectKey();
      return;
    }

    setGenerating(true);
    setError(null);
    setResultImage(null);

    try {
      // Re-initialize to ensure we use the latest injected key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: "1K"
          }
        },
      });

      let foundImage = false;
      if (response.candidates && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setResultImage(`data:image/png;base64,${part.inlineData.data}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        throw new Error("لم يتمكن النموذج من إنشاء صورة لهذه الكلمات.");
      }
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        setError("يبدو أن هناك مشكلة في صلاحية المفتاح. يرجى إعادة اختياره.");
        // We don't reset hasKey here as per rules to avoid delay, but we notify user.
      } else {
        setError(err.message || "حدث خطأ غير متوقع أثناء التوليد.");
      }
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Gemini 3 Pro Vision Lab
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">مختبر التوليد <span className="text-brand">الرقمي</span></h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            حوّل كلماتك إلى واقع بصري مذهل باستخدام أقوى نماذج الذكاء الاصطناعي من جوجل. 
            تتطلب هذه الميزة مفتاح API مدفوع.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-6 rounded-3xl">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">وصف الصورة (Prompt)</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="مثلاً: رائد فضاء يركب خيلاً على سطح المريخ بأسلوب سايبربانك..."
                className="w-full h-32 bg-slate-950/50 border border-white/10 rounded-2xl p-4 text-white text-sm focus:border-brand/50 focus:ring-1 focus:ring-brand/50 outline-none transition-all resize-none"
              />
              
              <div className="mt-6 space-y-3">
                <button 
                  onClick={generateImage}
                  disabled={generating || !prompt.trim()}
                  className="w-full py-4 bg-brand text-slate-950 font-bold rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,230,153,0.3)] disabled:opacity-50 disabled:hover:shadow-none transition-all"
                >
                  {generating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      جاري التوليد...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      توليد الصورة
                    </>
                  )}
                </button>

                {!hasKey && (
                  <button 
                    onClick={onSelectKey}
                    className="w-full py-3 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-xs"
                  >
                    <Key className="w-4 h-4 text-amber-500" />
                    يجب اختيار مفتاح API أولاً
                  </button>
                )}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  * ملاحظة: يتطلب هذا النموذج حساب Google Cloud بمشروع مفعل فيه الفوترة. يمكنك الحصول على المفتاح من 
                  <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline inline-flex items-center gap-1 mx-1">
                    هنا <ExternalLink className="w-2 h-2" />
                  </a>
                </p>
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex gap-3 items-start"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>{error}</p>
              </motion.div>
            )}
          </div>

          {/* Result Viewport */}
          <div className="lg:col-span-7">
            <div className="relative aspect-square bg-slate-900/30 border border-white/5 rounded-[2.5rem] overflow-hidden flex items-center justify-center group shadow-inner">
              <AnimatePresence mode="wait">
                {resultImage ? (
                  <motion.img 
                    key="result"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    src={resultImage} 
                    className="w-full h-full object-cover"
                    alt="AI Generated"
                  />
                ) : generating ? (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-4 text-brand/40"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 border-4 border-brand/20 border-t-brand rounded-full animate-spin"></div>
                      <Sparkles className="absolute inset-0 m-auto w-6 h-6 animate-pulse" />
                    </div>
                    <p className="text-xs font-futuristic tracking-[0.2em] uppercase">Processing Neural Data...</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="empty"
                    className="flex flex-col items-center gap-4 text-slate-600"
                  >
                    <ImageIcon className="w-16 h-16 opacity-20" />
                    <p className="text-sm font-light">سيظهر إبداع الذكاء الاصطناعي هنا</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {resultImage && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a 
                    href={resultImage} 
                    download="nabeel-ai-art.png"
                    className="px-6 py-3 bg-white text-slate-950 font-bold rounded-full text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    تحميل العمل الفني
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiLab;
import React from 'react';
import { motion } from 'motion/react';
import { THEORY_POINTS } from './data';
import { Lightbulb, Info, Zap } from 'lucide-react';

export default function TheoryView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-6 sm:space-y-8 py-6 sm:py-8"
    >
      <div className="bg-white p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] shadow-sm border-2 border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Lightbulb className="w-24 h-24 sm:w-32 sm:h-32 text-brand-blue" />
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-800 uppercase italic mb-4 sm:mb-6">Իսպաներենի Ադվերբներ</h2>
        <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl">
          Գոռը և Գայանեն կօգնեն քեզ հասկանալ Muy, Mucho, Poco և այլ հաճախականության բառերը պարզ օրինակներով:
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {THEORY_POINTS.map((point, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white p-5 sm:p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-4 sm:gap-6 hover:border-brand-blue transition-all"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <span className="text-lg sm:text-xl font-black italic">{i + 1}</span>
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-xl sm:text-2xl font-black text-slate-800 uppercase italic">{point.title}</h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base">{point.explanation}</p>
              <div className="bg-slate-50 p-4 rounded-2xl border-l-4 border-brand-blue mt-2 sm:mt-4">
                <p className="text-brand-blue font-black text-base sm:text-lg italic">"{point.example}"</p>
                <p className="text-slate-400 font-bold text-[10px] sm:text-sm uppercase tracking-wider">{point.translation}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-800 p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] text-white flex flex-col sm:flex-row items-center gap-4 sm:gap-8 shadow-xl">
          <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white/20 rounded-full flex items-center justify-center shadow-inner">
             <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-brand-blue" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
             <p className="text-xl font-black uppercase italic">Հիշի՛ր</p>
             <p className="text-white/80 font-medium leading-relaxed text-sm sm:text-base">
                Muy-ն օգտագործվում է ածականների հետ, իսկ Mucho-ն՝ գոյականների կամ բայերի: Suficiente-ն 'բավարար' է, իսկ Bastante-ն՝ 'բավականին շատ':
             </p>
          </div>
      </div>
    </motion.div>
  );
}

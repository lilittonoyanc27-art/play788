import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  ArrowLeft, 
  Sparkles, 
  Zap, 
  User,
  CheckCircle2,
  XCircle,
  Flag
} from 'lucide-react';
import { TENNIS_QUESTIONS } from './data';
import { CharacterType } from './types';

interface TennisGameProps {
  onBack: () => void;
}

const TennisGame: React.FC<TennisGameProps> = ({ onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ Gor: 0, Gayane: 0 });
  const [turn, setTurn] = useState<CharacterType>('Gor');
  const [gameState, setGameState] = useState<'playing' | 'hitting' | 'finished'>('playing');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 50 }); // Percentage based
  const [combo, setCombo] = useState(0);

  const currentQuestion = TENNIS_QUESTIONS[currentQuestionIndex];

  const handleAnswer = (option: string) => {
    if (gameState !== 'playing') return;
    
    setSelectedOption(option);
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setGameState('hitting');

    if (correct) {
      setScores(prev => ({ ...prev, [turn]: prev[turn] + 1 + Math.floor(combo / 3) }));
      setCombo(prev => prev + 1);
      // Animate ball to opponent's side
      setBallPosition(turn === 'Gor' ? { x: 80, y: 20 } : { x: 20, y: 20 });
    } else {
      setCombo(0);
      // Ball stays or drops
      setBallPosition(prev => ({ ...prev, y: 80 }));
    }

    setTimeout(() => {
      if (currentQuestionIndex < TENNIS_QUESTIONS.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setTurn(prev => prev === 'Gor' ? 'Gayane' : 'Gor');
        setGameState('playing');
        setSelectedOption(null);
        setIsCorrect(null);
        setBallPosition({ x: 50, y: 50 });
      } else {
        setGameState('finished');
      }
    }, 1500);
  };

  const winner = scores.Gor > scores.Gayane ? 'Gor' : (scores.Gayane > scores.Gor ? 'Gayane' : 'Ոչ-ոքի');

  if (gameState === 'finished') {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-8">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-32 h-32 bg-amber-400 rounded-full flex items-center justify-center shadow-2xl"
        >
          <Trophy className="w-16 h-16 text-white" />
        </motion.div>
        
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-black text-slate-800 uppercase italic tracking-tighter">Խաղն ավարտվեց:</h2>
          <p className="text-3xl font-bold text-brand-blue uppercase italic">
            Հաղթող: {winner === 'Gor' ? 'Գոռ' : (winner === 'Gayane' ? 'Գայանե' : winner)}
          </p>
        </div>

        <div className="flex gap-8">
          <div className="text-center">
            <p className="text-slate-400 uppercase text-xs font-black tracking-widest">Գոռ</p>
            <p className="text-4xl font-black text-slate-800 italic">{scores.Gor}</p>
          </div>
          <div className="w-px h-16 bg-slate-100" />
          <div className="text-center">
            <p className="text-slate-400 uppercase text-xs font-black tracking-widest">Գայանե</p>
            <p className="text-4xl font-black text-slate-800 italic">{scores.Gayane}</p>
          </div>
        </div>

        <button 
          onClick={onBack}
          className="px-12 py-5 bg-slate-800 text-white rounded-full font-black uppercase italic tracking-widest hover:scale-105 transition-transform flex items-center gap-4 shadow-xl"
        >
          <ArrowLeft className="w-6 h-6" /> Վերադառնալ
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8">
      {/* Header Info */}
      <div className="flex justify-between items-center bg-white p-6 rounded-[32px] shadow-sm border-2 border-slate-50">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-2xl ${turn === 'Gor' ? 'bg-brand-blue text-white shadow-lg scale-110' : 'bg-slate-100 text-slate-400'} transition-all`}>
            <User className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none">Գոռ</p>
            <p className="text-2xl font-black text-slate-800 italic">{scores.Gor}</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="px-4 py-1 bg-amber-100 text-amber-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
            Հարց {currentQuestionIndex + 1} / {TENNIS_QUESTIONS.length}
          </div>
          {combo > 1 && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 text-brand-blue font-black italic uppercase text-sm"
            >
              <Zap className="w-4 h-4" /> Combo x{combo}
            </motion.div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none">Գայանե</p>
            <p className="text-2xl font-black text-slate-800 italic">{scores.Gayane}</p>
          </div>
          <div className={`p-3 rounded-2xl ${turn === 'Gayane' ? 'bg-amber-500 text-white shadow-lg scale-110' : 'bg-slate-100 text-slate-400'} transition-all`}>
            <User className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Tennis Court Area */}
      <div className="relative aspect-[21/9] bg-green-500 rounded-[40px] border-8 border-white shadow-2xl overflow-hidden shadow-inner flex items-center justify-center">
         {/* Court Markings */}
         <div className="absolute inset-x-0 top-1/2 h-1 bg-white/50 -translate-y-1/2" />
         <div className="absolute inset-y-0 left-1/2 w-1 bg-white/50 -translate-x-1/2" />
         <div className="absolute inset-y-0 left-10 w-1 bg-white/30" />
         <div className="absolute inset-y-0 right-10 w-1 bg-white/30" />
         
         {/* Net */}
         <div className="absolute inset-y-0 left-1/2 w-2 bg-slate-800/20 backdrop-blur-sm -translate-x-1/2 z-10" />

         {/* Characters */}
         <motion.div 
           animate={{ x: turn === 'Gor' ? -20 : -10 }}
           className="absolute left-20 bottom-10 z-20 flex flex-col items-center"
         >
            <div className={`w-16 h-16 rounded-3xl ${turn === 'Gor' ? 'bg-brand-blue' : 'bg-slate-300'} shadow-xl flex items-center justify-center text-white ring-4 ring-white/20 transition-colors`}>
              <User className="w-10 h-10" />
            </div>
            <p className="mt-2 text-white font-black uppercase italic tracking-widest text-[10px]">Գոռ</p>
         </motion.div>

         <motion.div 
           animate={{ x: turn === 'Gayane' ? 10 : 20 }}
           className="absolute right-20 bottom-10 z-20 flex flex-col items-center"
         >
            <div className={`w-16 h-16 rounded-3xl ${turn === 'Gayane' ? 'bg-amber-500' : 'bg-slate-300'} shadow-xl flex items-center justify-center text-white ring-4 ring-white/20 transition-colors`}>
              <User className="w-10 h-10" />
            </div>
            <p className="mt-2 text-white font-black uppercase italic tracking-widest text-[10px]">Գայանե</p>
         </motion.div>

         {/* Tennis Ball */}
         <motion.div 
           animate={{ 
             left: `${ballPosition.x}%`, 
             top: `${ballPosition.y}%`,
             scale: gameState === 'hitting' ? 1.5 : 1
           }}
           transition={{ type: 'spring', damping: 10 }}
           className="absolute w-8 h-8 bg-yellow-400 rounded-full shadow-lg z-30 flex items-center justify-center border-2 border-white/50"
         >
            <div className="w-6 h-px bg-slate-800/20 rotate-45" />
            <div className="w-6 h-px bg-slate-800/20 -rotate-45" />
         </motion.div>

         {/* Feedback overlays */}
         <AnimatePresence>
            {isCorrect === true && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.2 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
              >
                <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 text-green-600 font-black uppercase italic tracking-widest">
                  <CheckCircle2 className="w-8 h-8" /> Հիանալի հարված!
                </div>
              </motion.div>
            )}
            {isCorrect === false && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.2 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
              >
                <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 text-rose-600 font-black uppercase italic tracking-widest">
                  <XCircle className="w-8 h-8" /> Սխալ! Գնդակը դուրս թռավ
                </div>
              </motion.div>
            )}
         </AnimatePresence>
      </div>

      {/* Control Area */}
      <div className="bg-white p-8 sm:p-12 rounded-[48px] shadow-sm border-2 border-slate-50 space-y-10">
        <div className="text-center space-y-4">
          <p className="text-slate-400 uppercase font-black tracking-[0.4em] text-xs">Հարց {turn === 'Gor' ? 'Գոռի' : 'Գայանեի'} համար</p>
          <h3 className="text-3xl sm:text-5xl font-black text-slate-800 italic leading-tight">
             {currentQuestion.sentence}
          </h3>
          <p className="text-xl font-bold text-slate-400 uppercase tracking-widest italic">{currentQuestion.translation}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {currentQuestion.options.map((option, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={gameState !== 'playing'}
              onClick={() => handleAnswer(option)}
              className={`
                p-6 rounded-3xl font-black uppercase italic tracking-widest text-lg transition-all border-b-4
                ${selectedOption === option 
                  ? (isCorrect ? 'bg-green-500 text-white border-green-700' : 'bg-rose-500 text-white border-rose-700')
                  : 'bg-slate-100 text-slate-600 border-slate-300 hover:bg-slate-200'}
              `}
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>

      <button 
        onClick={onBack}
        className="mx-auto flex items-center gap-2 text-slate-400 font-black uppercase italic text-xs tracking-widest hover:text-slate-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Ընդհատել խաղը
      </button>
    </div>
  );
};

export default TennisGame;

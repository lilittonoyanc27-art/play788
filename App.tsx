import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles,
  ArrowRight,
  Trophy
} from 'lucide-react';
import { AppScreen } from './types';

// Components
import TheoryView from './TheoryView';
import TennisGame from './TennisGame';

const Navbar = ({ currentScreen, setScreen }: { currentScreen: AppScreen, setScreen: (s: AppScreen) => void }) => (
  <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between gap-4">
      <button onClick={() => setScreen('menu')} className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
          <Sparkles className="text-white w-6 h-6" />
        </div>
        <span className="font-black text-slate-800 tracking-tighter uppercase italic hidden sm:block">
          ԻՍՊԱՆԵՐԵՆ: <span className="text-brand-blue">ԹԵՆԻՍ</span>
        </span>
      </button>
      
      <div className="flex items-center gap-1 sm:gap-2 md:gap-4 overflow-x-auto no-scrollbar">
        <NavButton active={currentScreen === 'theory'} icon={<BookOpen className="w-4 h-4 sm:w-5 sm:h-5"/>} label="Տեսություն" onClick={() => setScreen('theory')} />
        <NavButton active={currentScreen === 'tennis_game'} icon={<Trophy className="w-4 h-4 sm:w-5 sm:h-5"/>} label="Թենիս" onClick={() => setScreen('tennis_game')} />
      </div>
    </div>
  </nav>
);

const NavButton = ({ active, icon, label, onClick }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`p-2 sm:px-6 sm:py-3 rounded-2xl flex items-center gap-2 transition-all shrink-0 ${
      active 
        ? 'bg-slate-800 text-white shadow-xl scale-105' 
        : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
    }`}
  >
    {icon}
    <span className="font-black text-[10px] sm:text-xs uppercase tracking-widest">{label}</span>
  </button>
);

const MenuCard = ({ icon, title, description, color, onClick }: { icon: React.ReactNode, title: string, description: string, color: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="group bg-white p-6 sm:p-10 rounded-[40px] sm:rounded-[56px] shadow-sm border-2 border-slate-100 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8 transition-all hover:scale-[1.02] hover:shadow-2xl hover:border-slate-800"
  >
    <div className={`w-28 h-28 shrink-0 rounded-[36px] ${color} flex items-center justify-center text-white shadow-2xl group-hover:rotate-6 transition-transform`}>
      {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-16 h-16' })}
    </div>
    <div className="flex-1 space-y-2 sm:space-y-4">
      <h3 className="text-2xl sm:text-4xl font-black text-slate-800 uppercase italic leading-none group-hover:text-brand-blue transition-colors">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-xl opacity-80">{description}</p>
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-slate-50 rounded-full font-black text-xs uppercase tracking-widest text-slate-400 group-hover:bg-slate-800 group-hover:text-white transition-all">
        ՍԿՍԵԼ <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </button>
);

function MainMenu({ setScreen }: { setScreen: (s: AppScreen) => void }) {
  return (
    <div className="flex flex-col items-center gap-12 sm:gap-20 py-12 sm:py-20">
      <div className="text-center space-y-4 max-w-3xl px-4">
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-slate-800 tracking-tighter uppercase italic leading-none">
          ԳՈՌ <span className="text-brand-blue">&</span> ԳԱՅԱՆԵ
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-400 uppercase tracking-[0.3em]">
          ԻՍՊԱՆԵՐԵՆԻ ԹԵՆԻՍԻ ՄՐՑՈՒՅԹ
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 w-full max-w-6xl px-4">
        <MenuCard 
          icon={<BookOpen />}
          title="Տեսություն"
          description="Սովորիր Muy, Mucho, Poco և այլ հաճախականության բառերի օգտագործումը:"
          color="bg-brand-blue"
          onClick={() => setScreen('theory')}
        />
        <MenuCard 
          icon={<Trophy />}
          title="Թենիսի Մրցույթ"
          description="Ո՞վ ավելի լավ կհարվածի գնդակին՝ Գոռը թե՞ Գայանեն:"
          color="bg-green-500"
          onClick={() => setScreen('tennis_game')}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('menu');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-brand-blue selection:text-white pt-20 pb-12 overflow-x-hidden relative">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-pink-400/10 blur-[100px] rounded-full" />
          <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-yellow-400/5 blur-[140px] rounded-full" />
      </div>

      <Navbar currentScreen={screen} setScreen={setScreen} />

      <main className="max-w-7xl mx-auto px-4 min-h-[80vh] relative z-10">
        {screen === 'menu' && <MainMenu setScreen={setScreen} />}
        {screen === 'theory' && <TheoryView />}
        {screen === 'tennis_game' && <TennisGame onBack={() => setScreen('menu')} />}
      </main>

      <footer className="mt-20 border-t border-slate-200 pt-16 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
               &copy; 2024 ԻՍՊԱՆԵՐԵՆ: ԳՈՌ ԵՎ ԳԱՅԱՆԵ (ԹԵՆԻՍ)
            </p>
            <div className="flex justify-center gap-4 text-slate-200">
              <Sparkles className="w-4 h-4" />
              <BookOpen className="w-4 h-4" />
              <Sparkles className="w-4 h-4" />
            </div>
        </div>
      </footer>
    </div>
  );
}

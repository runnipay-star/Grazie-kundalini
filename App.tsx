
import React, { useEffect } from 'react';
import { initFacebookPixel, trackLeadEvent } from './services/pixelService.ts';
import { 
  CheckIcon, 
  WhatsAppIcon, 
  InstagramIcon, 
  ArrowIcon, 
  HeartIcon, 
  SparklesIcon 
} from './components/LucideIcons.tsx';

const App: React.FC = () => {
  const PIXEL_ID = "839154938743008";
  const INSTAGRAM_URL = "https://www.instagram.com/kundalini.ka_bergamo/";

  useEffect(() => {
    // Inizializza il Pixel e traccia l'evento "Contact" al caricamento
    initFacebookPixel(PIXEL_ID);
    trackLeadEvent();
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
      {/* Elementi di sfondo Zen */}
      <div className="absolute inset-0 zen-gradient pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-100/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sage-100/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Header / Logo */}
      <header className="mb-8 z-10 animate-[fadeIn_1s_ease-out]">
        <div className="flex flex-col items-center gap-2">
           <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center border border-amber-100 shadow-sm mb-2">
             <SparklesIcon className="w-8 h-8 text-amber-600" />
           </div>
           <span className="text-sm tracking-[0.3em] uppercase text-amber-700 font-medium">Kundalini Ka</span>
        </div>
      </header>

      {/* Card Principale */}
      <main className="max-w-2xl w-full bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-8 sm:p-12 md:p-16 flex flex-col items-center text-center z-10">
        
        {/* Checkmark Animato */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-green-100 rounded-full scale-125 blur-xl animate-pulse" />
          <div className="relative bg-green-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-green-200 animate-[scaleIn_0.5s_cubic-bezier(0.175,0.885,0.32,1.275)]">
            <CheckIcon className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Sezione Contenuto */}
        <div className="space-y-6 animate-[slideUp_0.8s_ease-out]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight">
            Grazie per aver scelto <br />
            <span className="text-amber-600">Kundalini Ka</span>
          </h1>
          
          <div className="h-1 w-20 bg-amber-200 mx-auto rounded-full" />
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-md mx-auto leading-relaxed">
            La tua richiesta è stata ricevuta con successo. Un membro del nostro team ti contatterà al più presto per guidarti nel tuo percorso di benessere.
          </p>

          <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 inline-flex items-center gap-2 text-amber-800 text-sm font-medium">
             <HeartIcon className="w-4 h-4 text-amber-500 fill-amber-500" />
             Il tuo viaggio spirituale inizia oggi
          </div>
        </div>

        {/* Call to Actions */}
        <div className="mt-12 w-full flex justify-center animate-[fadeIn_1.2s_ease-out]">
          <a 
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-10 rounded-2xl font-semibold transition-all hover:shadow-xl hover:scale-[1.02] active:scale-95 w-full sm:w-auto min-w-[240px]"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>Seguici su Instagram</span>
            <ArrowIcon className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 text-slate-400 text-sm z-10 animate-fade-in">
        <p>© {new Date().getFullYear()} Kundalini Ka Bergamo • Risveglia la tua energia vitale</p>
      </footer>

      {/* Animazioni CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </div>
  );
};

export default App;

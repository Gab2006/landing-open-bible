import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useState } from 'react';
import InstallDialog from './InstallDialog';

export default function Hero({ darkMode }: { darkMode: boolean }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Sfondo ad arco con l'icona dell'app */}
      <motion.img
        src="/nobg-icon.png"
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: darkMode ? 0.08 : 0.15 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] sm:w-[80rem] md:w-[100rem] lg:w-[120rem] object-contain pointer-events-none z-0"
      />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight mb-6 text-light-text dark:text-dark-text tracking-tight">
              La Parola,<br/>
              <span className="text-accent italic">senza distrazioni.</span>
            </h1>
            <p className="text-lg lg:text-xl text-light-text/70 dark:text-dark-text/70 mb-10 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
              OpenBible è un lettore biblico essenziale, elegante e completamente offline. Progettato per offrire un'esperienza di lettura pura e immersiva.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => setIsDialogOpen(true)}
                className="flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-medium text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Download size={20} />
                Installa l'App
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-sm lg:max-w-md relative"
          >
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
            <div className="relative z-10 w-full rounded-[2.5rem] shadow-2xl border-4 border-white/10 overflow-hidden bg-white dark:bg-[#1A1917]">
              <img 
                src={darkMode ? "/screenshots/homepage.png" : "/screenshots/white-homepage.png"}
                alt="OpenBible Homepage" 
                className="w-full block scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <InstallDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  );
}

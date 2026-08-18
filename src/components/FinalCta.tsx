import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useState } from 'react';
import InstallDialog from './InstallDialog';

export default function FinalCta() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden" id="installa">
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text mb-6">
            Inizia a leggere oggi
          </h2>
          <p className="text-xl text-light-text/70 dark:text-dark-text/70 mb-10 max-w-2xl mx-auto">
            Porta la Parola sempre con te. Nessuna distrazione, nessuna connessione richiesta. Un'esperienza pensata per la tua meditazione.
          </p>
          
          <button 
            onClick={() => setIsDialogOpen(true)}
            className="inline-flex items-center gap-2 px-10 py-5 bg-accent hover:bg-accent/90 text-white rounded-full font-medium text-lg lg:text-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
            <Download size={24} className="relative z-10" />
            <span className="relative z-10">Installa l'App Gratuitamente</span>
          </button>
        </motion.div>
      </div>

      <InstallDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  );
}

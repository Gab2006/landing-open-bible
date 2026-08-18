import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import versesData from '../data/verses.json';

// Utility per ottenere il giorno dell'anno (1-365)
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export default function VerseOfTheDay() {
  const [verse, setVerse] = useState({ reference: '', text: '' });

  useEffect(() => {
    const day = getDayOfYear();
    // Previene errori se l'array è più corto di 365 per qualche motivo
    const verseOfTheDay = versesData[(day - 1) % versesData.length];
    
    if (verseOfTheDay) {
      setVerse({
        reference: verseOfTheDay.reference,
        text: verseOfTheDay.text
      });
    }
  }, []);

  if (!verse.text) return null;

  return (
    <section className="py-20 relative overflow-hidden" id="verso-del-giorno">
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20 mix-blend-overlay" 
           style={{ backgroundImage: "url('/nobg-icon.png')", backgroundSize: "800px", backgroundPosition: "center", filter: "blur(4px)" }} />
           
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-8">
            Verso del Giorno
          </div>
          
          <div className="relative">
            <span className="absolute -top-10 -left-6 text-7xl text-accent/20 font-serif leading-none select-none">"</span>
            <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl text-light-text dark:text-dark-text leading-tight mb-8">
              <span className="italic">{verse.text}</span>
            </blockquote>
            <span className="absolute -bottom-10 -right-6 text-7xl text-accent/20 font-serif leading-none select-none">"</span>
          </div>

          <div className="font-sans text-lg text-light-text/60 dark:text-dark-text/60 font-medium">
            — {verse.reference}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, AnimatePresence } from 'framer-motion';
import { X, Apple, Smartphone, Share, PlusSquare, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface InstallDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InstallDialog({ isOpen, onClose }: InstallDialogProps) {
  const [os, setOs] = useState<'ios' | 'android'>('ios');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-light-bg dark:bg-dark-bg w-full max-w-md rounded-2xl shadow-xl overflow-hidden pointer-events-auto border border-black/10 dark:border-white/10"
            >
              <div className="flex justify-between items-center p-4 border-b border-black/5 dark:border-white/5">
                <h3 className="font-serif text-xl font-semibold text-light-text dark:text-dark-text">
                  Installa l'App
                </h3>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-light-text dark:text-dark-text transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-4">
                <div className="flex gap-2 p-1 bg-black/5 dark:bg-white/5 rounded-lg mb-6">
                  <button
                    onClick={() => setOs('ios')}
                    className={twMerge(
                      "flex-1 flex justify-center items-center gap-2 py-2 text-sm font-medium rounded-md transition-all",
                      os === 'ios' 
                        ? "bg-white dark:bg-dark-text text-light-text shadow-sm" 
                        : "text-light-text/60 dark:text-dark-text/60 hover:text-light-text dark:hover:text-dark-text"
                    )}
                  >
                    <Apple size={16} /> iOS
                  </button>
                  <button
                    onClick={() => setOs('android')}
                    className={twMerge(
                      "flex-1 flex justify-center items-center gap-2 py-2 text-sm font-medium rounded-md transition-all",
                      os === 'android' 
                        ? "bg-white dark:bg-dark-text text-light-text shadow-sm" 
                        : "text-light-text/60 dark:text-dark-text/60 hover:text-light-text dark:hover:text-dark-text"
                    )}
                  >
                    <Smartphone size={16} /> Android
                  </button>
                </div>

                <div className="space-y-4 text-light-text dark:text-dark-text text-sm">
                  {os === 'ios' ? (
                    <ol className="space-y-4">
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">1</div>
                        <p>Apri l'app su <strong>Safari</strong>.</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">2</div>
                        <p>Tocca l'icona Condividi <Share size={16} className="inline mx-1" /> in basso.</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">3</div>
                        <p>Scorri e seleziona <strong>"Aggiungi alla schermata Home"</strong> <PlusSquare size={16} className="inline mx-1" />.</p>
                      </li>
                    </ol>
                  ) : (
                    <ol className="space-y-4">
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">1</div>
                        <p>Apri l'app su <strong>Chrome</strong>.</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">2</div>
                        <p>Tocca l'icona del Menu <MoreVertical size={16} className="inline mx-1" /> in alto a destra.</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">3</div>
                        <p>Seleziona <strong>"Installa app"</strong> o <strong>"Aggiungi a schermata Home"</strong>.</p>
                      </li>
                    </ol>
                  )}
                </div>

                <div className="mt-8">
                  <button 
                    onClick={onClose}
                    className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 rounded-xl transition-colors"
                  >
                    Ho capito
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

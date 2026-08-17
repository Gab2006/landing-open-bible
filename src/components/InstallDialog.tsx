import { motion, AnimatePresence } from 'framer-motion';
import { X, Apple, Smartphone, Share, PlusSquare, MoreVertical, MoreHorizontal } from 'lucide-react';
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
        <motion.div
          key="install-dialog-overlay"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
          onClick={onClose}
        >
          {/* Dialog */}
          <motion.div
            layout
            key="install-dialog-content"
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-light-bg dark:bg-dark-bg w-full max-w-md rounded-2xl shadow-xl overflow-hidden relative z-10 border border-black/10 dark:border-white/10"
          >
            <motion.div layout="position" className="flex justify-between items-center p-4 border-b border-black/5 dark:border-white/5">
              <h3 className="font-serif text-xl font-semibold text-light-text dark:text-dark-text">
                Installa l'App
              </h3>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-light-text dark:text-dark-text transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>

            <div className="p-4">
              {/* OS Toggle with Sliding Background */}
              <motion.div layout="position" className="flex gap-2 p-1 bg-black/5 dark:bg-white/5 rounded-lg mb-6 relative">
                <button
                  onClick={() => setOs('ios')}
                  className={twMerge(
                    "relative flex-1 flex justify-center items-center py-2 text-sm font-medium rounded-md transition-colors",
                    os === 'ios'
                      ? "text-light-text"
                      : "text-light-text/60 dark:text-dark-text/60 hover:text-light-text dark:hover:text-dark-text"
                  )}
                >
                  {os === 'ios' && (
                    <motion.div
                      layoutId="active-os-tab"
                      className="absolute inset-0 bg-white dark:bg-dark-text rounded-md shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Apple size={16} /> iOS
                  </span>
                </button>
                <button
                  onClick={() => setOs('android')}
                  className={twMerge(
                    "relative flex-1 flex justify-center items-center py-2 text-sm font-medium rounded-md transition-colors",
                    os === 'android'
                      ? "text-light-text"
                      : "text-light-text/60 dark:text-dark-text/60 hover:text-light-text dark:hover:text-dark-text"
                  )}
                >
                  {os === 'android' && (
                    <motion.div
                      layoutId="active-os-tab"
                      className="absolute inset-0 bg-white dark:bg-dark-text rounded-md shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Smartphone size={16} /> Android
                  </span>
                </button>
              </motion.div>

              <motion.div layout="position" className="space-y-4 text-light-text dark:text-dark-text text-sm">
                <AnimatePresence mode="popLayout">
                  {os === 'ios' ? (
                    <motion.ol
                      layout="position"
                      key="ios-instructions"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">1</div>
                        <p>Vai su <a href="https://openbible-read.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">openbible-read.vercel.app</a> usando <strong>Safari</strong>.</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">2</div>
                        <p>Tocca l'icona con i tre puntini <MoreHorizontal size={16} className="inline mx-1" />.</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">3</div>
                        <p>Tocca <strong>"Condividi"</strong> <Share size={16} className="inline mx-1" />.</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">4</div>
                        <p>Tocca <strong>"Visualizza altro"</strong>.</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">5</div>
                        <p>Tocca <strong>"Aggiungi alla schermata Home"</strong> <PlusSquare size={16} className="inline mx-1" />.</p>
                      </li>
                    </motion.ol>
                  ) : (
                    <motion.ol
                      layout="position"
                      key="android-instructions"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">1</div>
                        <p>Vai su <a href="https://openbible-read.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">openbible-read.vercel.app</a> usando <strong>Chrome</strong>.</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">2</div>
                        <p>Tocca l'icona del Menu <MoreVertical size={16} className="inline mx-1" /> in alto a destra.</p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">3</div>
                        <p>Seleziona <strong>"Installa app"</strong> o <strong>"Aggiungi a schermata Home"</strong>.</p>
                      </li>
                    </motion.ol>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div layout="position" className="mt-8">
                <button
                  onClick={onClose}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 rounded-xl transition-colors"
                >
                  Ho capito
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

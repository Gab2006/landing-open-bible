import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(element, { offset: -80 });
      } else {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navLinks = [
    { name: 'Funzionalità', id: 'funzionalita' },
    { name: 'Verso del Giorno', id: 'verso-del-giorno' },
    { name: 'Installa', id: 'installa' },
  ];

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${isScrolled || mobileMenuOpen ? 'bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-black/5 dark:border-white/5 py-2' : 'bg-transparent border-transparent py-4'}`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/nobg-icon.png" alt="OpenBible Logo" className="w-8 h-8 object-contain" />
          <div className="font-serif text-2xl font-semibold tracking-tight text-light-text dark:text-dark-text">
            Open<span className="text-accent">Bible</span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-light-text/70 dark:text-dark-text/70 hover:text-accent dark:hover:text-accent transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-light-text dark:text-dark-text"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-light-text dark:text-dark-text"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-light-text dark:text-dark-text"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-lg font-medium text-light-text dark:text-dark-text py-2 border-b border-black/5 dark:border-white/5"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

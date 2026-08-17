import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-40 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/nobg-icon.png" alt="OpenBible Logo" className="w-8 h-8 object-contain" />
          <div className="font-serif text-2xl font-semibold tracking-tight text-light-text dark:text-dark-text">
            Open<span className="text-accent">Bible</span>
          </div>
        </div>
        
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-light-text dark:text-dark-text"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}

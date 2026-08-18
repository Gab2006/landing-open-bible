

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 bg-light-bg dark:bg-dark-bg relative">
      
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-16">
          <div className="text-center md:text-left">
            <div className="font-serif text-2xl font-semibold text-light-text dark:text-dark-text mb-2">
              Open<span className="text-accent">Bible</span>
            </div>
            <p className="text-light-text/60 dark:text-dark-text/60 max-w-xs">
              La Parola, senza distrazioni. Un'esperienza di lettura pura e immersiva, completamente offline.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/Gab2006/OpenBible" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/5 dark:bg-white/5 rounded-full hover:bg-accent hover:text-white dark:hover:bg-accent text-light-text dark:text-dark-text transition-colors"
              aria-label="GitHub Repository"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-black/5 dark:border-white/5 text-sm text-light-text/60 dark:text-dark-text/60">
          <p>© {currentYear} OpenBible. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-2">
            <span>Fatto con</span>
            <span className="text-red-500">❤️</span>
            <span>in Italia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

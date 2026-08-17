export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-serif text-xl font-semibold text-light-text dark:text-dark-text">
          Open<span className="text-accent">Bible</span>
        </div>
        
        <p className="text-sm text-light-text/60 dark:text-dark-text/60 text-center md:text-left">
          © {currentYear} OpenBible. Tutti i diritti riservati.
        </p>

        <div className="flex gap-4 text-sm font-medium">
          <a 
            href="https://github.com/Gab2006/OpenBible" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-text/70 dark:text-dark-text/70 hover:text-accent dark:hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

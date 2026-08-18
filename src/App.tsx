import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import VerseOfTheDay from './components/VerseOfTheDay';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    (window as any).lenis = lenis;
    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero darkMode={darkMode} />
        <VerseOfTheDay />
        <Features darkMode={darkMode} />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}

export default App;

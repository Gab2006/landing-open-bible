import { motion } from 'framer-motion';
import { BookOpen, WifiOff, Settings2, LayoutTemplate } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const features = [
  {
    title: "Stile Editoriale",
    description: "Layout pulito, ampi margini e tipografia ricercata. Ogni elemento è pensato per mettere in risalto il testo e favorire la concentrazione.",
    icon: <BookOpen className="w-6 h-6 text-accent" />,
    imageDark: "/screenshots/reader.png",
    imageLight: "/screenshots/white-reader.png",
    reversed: false,
  },
  {
    title: "100% Offline",
    description: "Nessuna connessione richiesta. Scarica l'app e porta la Scrittura sempre con te. Veloce, leggera e rispettosa della privacy.",
    icon: <WifiOff className="w-6 h-6 text-accent" />,
    imageDark: "/screenshots/newtestamentbookmenu.png",
    imageLight: "/screenshots/white-newtestamentbookmenu.png",
    reversed: true,
  },
  {
    title: "Personalizzabile",
    description: "Aspetto chiaro o scuro, temi, gestione delle dimensioni del testo e navigazione intuitiva. Adatta l'app alle tue preferenze di lettura.",
    icon: <Settings2 className="w-6 h-6 text-accent" />,
    imageDark: "/screenshots/settings.png",
    imageLight: "/screenshots/white-settings.png",
    reversed: false,
  },
  {
    title: "Layout della Home",
    description: "Modifica e riorganizza la schermata principale secondo le tue esigenze. Scegli cosa avere a portata di mano per un'esperienza su misura.",
    icon: <LayoutTemplate className="w-6 h-6 text-accent" />,
    imageDark: "/screenshots/layoutedit.png",
    imageLight: "/screenshots/white-layoutedit.png",
    reversed: true,
  }
];

export default function Features({ darkMode }: { darkMode: boolean }) {
  return (
    <section className="py-24 bg-black/5 dark:bg-white/5" id="funzionalita">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
            Progettata per la lettura
          </h2>
          <p className="text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
            Scopri le funzionalità che rendono OpenBible l'app ideale per la meditazione quotidiana.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${feature.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6 text-center lg:text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto lg:mx-0">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-light-text dark:text-dark-text">
                  {feature.title}
                </h3>
                <p className="text-lg text-light-text/70 dark:text-dark-text/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full max-w-sm mx-auto lg:max-w-none relative"
              >
                <div className="absolute inset-0 bg-accent/10 blur-[60px] rounded-full scale-75" />
                <PhoneMockup darkMode={darkMode}>
                  <motion.img
                    src={darkMode ? feature.imageDark : feature.imageLight}
                    alt={feature.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-auto block scale-[1.03] origin-top cursor-default"
                  />
                </PhoneMockup>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753566362712_0.png';

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nosso Compromisso', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-dark-text text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto section-padding !py-16">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="mb-4">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-14 w-auto bg-white p-2 rounded-md"
              />
            </a>
            <p className="text-slate-400 max-w-xs">
              Construindo com compromisso e qualidade para um futuro sólido.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-primary-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-slate-300">
              <li>
                <a
                  href="tel:+5544991040774"
                  className="hover:text-primary-blue transition-colors"
                >
                  +55 44 99104-0774
                </a>
              </li>
              <li>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="hover:text-primary-blue transition-colors"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </li>
              <li>
                <span>Padre Lebret, 801, G05 Bloco 03</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
          reservados.
        </div>
      </div>
    </motion.footer>
  );
}

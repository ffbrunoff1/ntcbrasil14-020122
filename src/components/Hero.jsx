import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-dark-text to-slate-700 text-white min-h-screen flex items-center section-padding"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="max-w-3xl text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center md:justify-start gap-3 mb-4"
          >
            <HardHat className="text-primary-blue" size={28} />
            <span className="font-semibold text-lg text-primary-blue">
              NTC Brasil
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold !leading-tight mb-6"
          >
            Construindo com{' '}
            <span className="text-primary-blue">compromisso e qualidade</span>{' '}
            para um futuro sólido.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto md:mx-0"
          >
            Transforme seu projeto em realidade com a NTC Brasil. Oferecemos
            soluções completas e inovadoras para cada etapa da sua obra,
            garantindo excelência e pontualidade.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="btn btn-primary text-lg shadow-lg hover:shadow-primary-blue/40"
            >
              <span>Iniciar um Projeto</span>
              <ArrowRight className="inline ml-2" size={20} />
            </a>
            <a
              href="#about"
              className="btn bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
            >
              Saber Mais
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

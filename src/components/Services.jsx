import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, ClipboardCheck, Users } from 'lucide-react';

export default function Services() {
  const commitments = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary-blue" />,
      title: 'Segurança Inegociável',
      description:
        'Implementamos os mais rigorosos padrões de segurança em todos os canteiros de obras, protegendo nossa equipe, clientes e a comunidade.',
    },
    {
      icon: <HardHat className="h-10 w-10 text-primary-blue" />,
      title: 'Qualidade Superior',
      description:
        'Utilizamos materiais de primeira linha e mão de obra qualificada para garantir que cada detalhe do projeto atenda aos mais altos padrões de excelência.',
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-primary-blue" />,
      title: 'Cumprimento de Prazos',
      description:
        'Nosso planejamento estratégico e gerenciamento eficiente garantem a entrega de cada projeto dentro do prazo acordado, sem comprometer a qualidade.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary-blue" />,
      title: 'Parceria com o Cliente',
      description:
        'Mantemos uma comunicação transparente e contínua, tratando cada cliente como um verdadeiro parceiro na jornada da construção.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="services" className="section-padding bg-light-bg">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-semibold text-primary-blue mb-2 block">
            NOSSO COMPROMISSO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            Pilares que sustentam cada construção
          </h2>
          <p className="text-slate-600 text-lg">
            Mais do que construir, firmamos um pacto de confiança e excelência.
            Estes são os compromissos que guiam cada passo da NTC Brasil.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-soft text-center flex flex-col items-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              variants={cardVariants}
            >
              <div className="bg-primary-blue/10 p-4 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

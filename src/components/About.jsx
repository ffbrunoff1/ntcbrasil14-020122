import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Target size={32} className="text-primary-blue" />,
      title: 'Missão',
      description:
        'Executar obras com a máxima qualidade, segurança e pontualidade, superando as expectativas de nossos clientes e contribuindo para o desenvolvimento sustentável.',
    },
    {
      icon: <ShieldCheck size={32} className="text-primary-blue" />,
      title: 'Visão',
      description:
        'Ser referência no setor da construção civil, reconhecida pela inovação, confiabilidade e pela excelência em cada projeto entregue.',
    },
    {
      icon: <Award size={32} className="text-primary-blue" />,
      title: 'Valores',
      description:
        'Compromisso, integridade, valorização das pessoas e foco no cliente são os pilares que sustentam todas as nossas operações e decisões.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="font-semibold text-primary-blue mb-2 block">
              QUEM SOMOS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">
              A base sólida para seus maiores projetos
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              A NTC Brasil nasceu da paixão por construir e transformar. Com
              anos de experiência no mercado, nossa equipe é dedicada a entregar
              não apenas edifícios, mas legados. Cada projeto é uma oportunidade
              de demonstrar nosso compromisso com a excelência, utilizando
              tecnologia de ponta e as melhores práticas de engenharia.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nossa trajetória é marcada pela solidez de nossas obras e pela
              confiança de nossos clientes. Acreditamos que uma construção de
              sucesso começa com um planejamento meticuloso e uma parceria
              transparente.
            </p>
          </motion.div>

          <motion.div className="space-y-8" variants={itemVariants}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-5"
                custom={index}
                variants={itemVariants}
              >
                <div className="flex-shrink-0 bg-primary-blue/10 p-4 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-text mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

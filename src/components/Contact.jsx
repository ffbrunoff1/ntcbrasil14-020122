import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Phone,
  MapPin,
  Loader,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: null });

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitStatus({ success: true, error: null });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus({ success: false, error: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-semibold text-primary-blue mb-2 block">
            FALE CONOSCO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            Vamos construir seu próximo projeto juntos
          </h2>
          <p className="text-slate-600 text-lg">
            Tem uma ideia ou um projeto em mente? Entre em contato conosco.
            Nossa equipe está pronta para atender você.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-3 bg-light-bg p-8 rounded-xl shadow-soft"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin" size={20} /> Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} /> Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
              {submitStatus.success && (
                <div className="flex items-center gap-3 text-green-600 bg-green-100 p-3 rounded-lg">
                  <CheckCircle size={20} />
                  <p>
                    Mensagem enviada com sucesso! Entraremos em contato em
                    breve.
                  </p>
                </div>
              )}
              {submitStatus.error && (
                <div className="flex items-center gap-3 text-red-600 bg-red-100 p-3 rounded-lg">
                  <AlertTriangle size={20} />
                  <p>Erro: {submitStatus.error}</p>
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 bg-primary-blue/10 p-4 rounded-full text-primary-blue">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-text mb-1">
                  Telefone
                </h3>
                <p className="text-slate-600">
                  Entre em contato para um atendimento rápido.
                </p>
                <a
                  href="tel:+5544991040774"
                  className="text-primary-blue font-semibold hover:underline"
                >
                  +55 44 99104-0774
                </a>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 bg-primary-blue/10 p-4 rounded-full text-primary-blue">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-text mb-1">
                  Endereço
                </h3>
                <p className="text-slate-600">
                  Padre Lebret, 801, G05 Bloco 03
                </p>
                <p className="text-slate-600">Maringá - PR, Brasil</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

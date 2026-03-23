import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiPhone, FiUser, FiMessageSquare } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'alex@example.com', href: 'mailto:alex@example.com' },
  { icon: FiMapPin, label: 'Location', value: 'San Francisco, CA', href: null },
  { icon: FiPhone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
];

const InputField = ({ label, icon: Icon, error, type = 'text', textarea = false, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-gray-400 text-sm font-body font-medium flex items-center gap-2">
      <Icon size={13} className="text-blue-500/70" />
      {label}
    </label>
    {textarea ? (
      <textarea
        {...props}
        rows={5}
        className={`w-full bg-surface rounded-xl px-4 py-3 text-white font-body text-sm
          border transition-all duration-300 outline-none resize-none
          placeholder:text-gray-700
          focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10
          ${error ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'}`}
      />
    ) : (
      <input
        type={type}
        {...props}
        className={`w-full bg-surface rounded-xl px-4 py-3 text-white font-body text-sm
          border transition-all duration-300 outline-none
          placeholder:text-gray-700
          focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10
          ${error ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'}`}
      />
    )}
    {error && <p className="text-red-400 text-xs font-body">{error}</p>}
  </div>
);

const Contact = ({ showToast }) => {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setForm({ name: '', email: '', message: '' });
    showToast('Message sent! I\'ll get back to you soon.', 'success');
  };

  return (
    <section id="contact" className="py-28 section-padding max-w-7xl mx-auto" ref={ref}>
      <SectionHeader tag="Get In Touch" title="Contact Me" subtitle="Have a project in mind? Let's talk about it." inView={inView} />

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Left: info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <motion.p
            className="text-gray-400 font-body leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a
            conversation about tech. Drop me a message!
          </motion.p>

          <div className="flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 group hover:border-blue-500/20 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg glass-blue flex items-center justify-center flex-shrink-0">
                  <Icon className="text-blue-400" size={17} />
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-mono uppercase tracking-wide mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-white text-sm font-body hover:text-blue-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-body">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Availability card */}
          <motion.div
            className="glass-blue rounded-2xl p-5 border border-blue-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <p className="text-white font-display font-semibold text-sm">Available for hire</p>
            </div>
            <p className="text-gray-500 text-sm font-body">
              Currently open to full-time roles and interesting freelance projects.
            </p>
          </motion.div>
        </div>

        {/* Right: form */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/5 flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <InputField
                label="Your Name"
                icon={FiUser}
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                error={errors.name}
              />
              <InputField
                label="Email Address"
                icon={FiMail}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                error={errors.email}
              />
            </div>

            <InputField
              label="Your Message"
              icon={FiMessageSquare}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              error={errors.message}
              textarea
            />

            <motion.button
              type="submit"
              disabled={submitting}
              className="relative flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-blue-600 text-white font-display font-semibold text-sm overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={!submitting ? { scale: 1.02, y: -2 } : {}}
              whileTap={!submitting ? { scale: 0.98 } : {}}
            >
              {/* Hover shimmer */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                {submitting ? (
                  <>
                    <motion.span
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

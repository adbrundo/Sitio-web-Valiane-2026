import { useTranslate } from '@/hooks/useTranslate';
import { COMPANY_INFO, SOCIAL_LINKS } from '@shared/const';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Sparkles } from 'lucide-react';

export function Footer() {
  const { t } = useTranslate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#0f0520] to-[#0A0015] text-white pt-20 pb-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4A148C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00BCD4]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#00BCD4]" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#D7CCC8] via-white to-[#00BCD4] bg-clip-text text-transparent">
                Valianè
              </h3>
            </div>
            <p className="text-[#D7CCC8]/70 text-sm leading-relaxed mb-6">
              Premium botanical skincare oils crafted with intention. Transforming routines into luxurious, deeply nourishing rituals.
            </p>
            <div className="flex gap-3">
              <motion.a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-[#4A148C]/30 to-[#00BCD4]/30 border border-[#00BCD4]/30 rounded-full flex items-center justify-center hover:from-[#4A148C] hover:to-[#00BCD4] transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: t('nav.home') },
                { href: '/products', label: t('nav.products') },
                { href: '/about', label: t('nav.about') },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.div
                      className="text-[#D7CCC8]/70 hover:text-[#00BCD4] transition-colors inline-flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]/50 group-hover:bg-[#00BCD4] transition-colors" />
                      {link.label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00BCD4] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-[#D7CCC8]/50 mb-1">{t('footer.email')}</p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-[#D7CCC8]/70 hover:text-[#00BCD4] transition-colors text-sm"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00BCD4] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-[#D7CCC8]/50 mb-1">{t('footer.address')}</p>
                  <p className="text-[#D7CCC8]/70 text-sm">{COMPANY_INFO.address}</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter / Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Our Values</h4>
            <div className="space-y-3">
              {[
                { icon: '🌿', text: '100% Natural' },
                { icon: '✨', text: 'Vegan & Cruelty-Free' },
                { icon: '♻️', text: 'Sustainable Packaging' },
                { icon: '🎯', text: 'Built with Intention' },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 text-[#D7CCC8]/70 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base">{value.icon}</span>
                  <span>{value.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-sm text-[#D7CCC8]/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © {currentYear} Valianè. {t('footer.copyright')}
            </motion.p>
            <motion.div
              className="flex gap-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-[#D7CCC8]/50 hover:text-[#00BCD4] transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-[#D7CCC8]/50 hover:text-[#00BCD4] transition-colors">
                {t('footer.terms')}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Tagline */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-white/5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-[#00BCD4]/60 italic">
            "Your skin deserves intention"
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

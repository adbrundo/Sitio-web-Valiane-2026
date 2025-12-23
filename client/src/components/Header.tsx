import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslate } from '@/hooks/useTranslate';
import { LANGUAGES } from '@shared/const';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === LANGUAGES.EN ? LANGUAGES.ES : LANGUAGES.EN;
    setLanguage(newLang as any);
  };

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/products', label: t('nav.products') },
    { href: '/about', label: t('nav.about') },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0015]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-[#00BCD4]/5'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="w-6 h-6 text-[#00BCD4] absolute -top-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#D7CCC8] via-white to-[#00BCD4] bg-clip-text text-transparent">
                Valianè
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`relative px-4 py-2 font-medium transition-colors ${
                    location === item.href
                      ? 'text-[#00BCD4]'
                      : 'text-[#D7CCC8]/70 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {location === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4A148C] via-[#00BCD4] to-[#4A148C]"
                      layoutId="underline"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#4A148C]/20 to-[#00BCD4]/20 border border-[#00BCD4]/30 text-[#00BCD4] font-semibold text-sm backdrop-blur-sm hover:from-[#4A148C]/30 hover:to-[#00BCD4]/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === LANGUAGES.EN ? 'EN' : 'ES'}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#D7CCC8] hover:text-[#00BCD4] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="md:hidden mt-6 flex flex-col gap-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, idx) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      location === item.href
                        ? 'bg-gradient-to-r from-[#4A148C]/30 to-[#00BCD4]/30 text-[#00BCD4] border border-[#00BCD4]/30'
                        : 'text-[#D7CCC8]/70 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

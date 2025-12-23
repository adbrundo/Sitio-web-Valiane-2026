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
    { href: '/rituals', label: t('nav.rituals') },
    { href: '/science', label: t('nav.science') },
    { href: '/about', label: t('nav.about') },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0015]/80 backdrop-blur-2xl border-b border-white/5 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-[#D7CCC8] via-white to-[#00BCD4] bg-clip-text text-transparent">
                Valianè
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#4A148C] to-[#00BCD4] group-hover:w-full transition-all duration-500" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`relative text-sm font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                    location === item.href
                      ? 'text-white'
                      : 'text-[#D7CCC8]/50 hover:text-white'
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {item.label}
                  {location === item.href && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-[#4A148C] via-[#00BCD4] to-[#4A148C]"
                      layoutId="navUnderline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="relative px-5 py-2 rounded-full overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
              <div className="absolute inset-0 border border-white/10 group-hover:border-[#00BCD4]/30 transition-colors rounded-full" />
              <span className="relative text-xs font-bold tracking-widest text-[#D7CCC8] group-hover:text-white transition-colors">
                {language === LANGUAGES.EN ? 'EN' : 'ES'}
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#D7CCC8] hover:text-white transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="lg:hidden fixed inset-0 top-[72px] bg-[#0A0015] z-40 flex flex-col p-8 gap-8"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {navItems.map((item, idx) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    className={`text-3xl font-bold tracking-tight transition-all ${
                      location === item.href
                        ? 'text-[#00BCD4]'
                        : 'text-[#D7CCC8]/30 hover:text-white'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
              
              <motion.div 
                className="mt-auto pt-8 border-t border-white/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-[#D7CCC8]/30 text-sm tracking-widest uppercase mb-4">Follow our journey</p>
                <div className="flex gap-6">
                  <span className="text-[#D7CCC8] hover:text-[#00BCD4] transition-colors cursor-pointer">Instagram</span>
                  <span className="text-[#D7CCC8] hover:text-[#00BCD4] transition-colors cursor-pointer">Amazon</span>
                </div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

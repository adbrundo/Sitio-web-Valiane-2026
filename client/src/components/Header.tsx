import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslate } from '@/hooks/useTranslate';
import { LANGUAGES } from '@shared/const';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export function Header() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = language === LANGUAGES.EN ? LANGUAGES.ES : LANGUAGES.EN;
    setLanguage(newLang as any);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#4A148C]">
              Valianė
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-[#4A148C] transition">
              {t('nav.home')}
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-[#4A148C] transition">
              {t('nav.products')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#4A148C] transition">
              {t('nav.about')}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#4A148C] transition">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full bg-[#D7CCC8] text-[#4A148C] font-semibold text-sm hover:bg-[#00BCD4] hover:text-white transition"
            >
              {language === LANGUAGES.EN ? 'EN' : 'ES'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-[#4A148C]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <Link href="/" className="text-gray-700 hover:text-[#4A148C] transition" onClick={() => setMobileMenuOpen(false)}>
              {t('nav.home')}
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-[#4A148C] transition" onClick={() => setMobileMenuOpen(false)}>
              {t('nav.products')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#4A148C] transition" onClick={() => setMobileMenuOpen(false)}>
              {t('nav.about')}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#4A148C] transition" onClick={() => setMobileMenuOpen(false)}>
              {t('nav.contact')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

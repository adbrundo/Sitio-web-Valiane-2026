import { useTranslate } from '@/hooks/useTranslate';
import { COMPANY_INFO, SOCIAL_LINKS } from '@shared/const';
import { Link } from 'wouter';

export function Footer() {
  const { t } = useTranslate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2C2C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#00BCD4] mb-4">Valianė</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium botanical skincare oils for the discerning beauty enthusiast.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#00BCD4] transition">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-[#00BCD4] transition">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#00BCD4] transition">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">
                <span className="font-semibold">{t('footer.email')}:</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#00BCD4] transition">
                  {' '}{COMPANY_INFO.email}
                </a>
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">{t('footer.address')}:</span>
                <p>{COMPANY_INFO.address}</p>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4A148C] rounded-full flex items-center justify-center hover:bg-[#00BCD4] transition"
                title="Instagram"
              >
                <span className="text-lg">📷</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <p>{t('footer.copyright')}</p>
            <div className="flex gap-4 md:justify-end">
              <a href="#" className="hover:text-[#00BCD4] transition">
                {t('footer.privacy')}
              </a>
              <a href="#" className="hover:text-[#00BCD4] transition">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useTranslate } from '@/hooks/useTranslate';
import { AMAZON_LINKS } from '@shared/const';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const { t } = useTranslate();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Asymmetric Design */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#4A148C] to-[#00BCD4] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00BCD4] to-[#D7CCC8] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="space-y-4">
                <motion.h1
                  className="text-5xl md:text-6xl font-bold text-[#4A148C] leading-tight"
                >
                  {t('hero.tagline')}
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-600 leading-relaxed"
                >
                  {t('hero.subtitle')}
                </motion.p>
              </div>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <Link href="/products">
                  <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4A148C] to-[#00BCD4] text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    {t('hero.cta')}
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual Element */}
            <motion.div
              className="relative h-96 md:h-full hidden md:block"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A148C] via-[#00BCD4] to-[#D7CCC8] rounded-3xl opacity-10"></div>
              <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#4A148C] to-[#00BCD4] rounded-2xl transform -rotate-12 shadow-2xl"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-[#00BCD4] to-[#D7CCC8] rounded-2xl transform rotate-12 shadow-lg"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#4A148C] mb-4">
              {t('products.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('products.subtitle')}
            </p>
          </motion.div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Prickly Pear Card */}
            <motion.div
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 bg-gradient-to-br from-[#4A148C] to-[#00BCD4] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌵</div>
                    <p className="text-white font-semibold">{t('products.pricklyPear.name')}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#4A148C] mb-2">
                  {t('products.pricklyPear.tagline')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('products.pricklyPear.shortDesc')}
                </p>
                <a
                  href={AMAZON_LINKS.pricklyPear}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A148C] text-white font-semibold rounded-lg hover:bg-[#00BCD4] transition-all duration-300 group-hover:translate-x-1"
                >
                  {t('products.pricklyPear.shopButton')}
                  <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Baobab & Cacay Card */}
            <motion.div
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 bg-gradient-to-br from-[#00BCD4] to-[#D7CCC8] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌳</div>
                    <p className="text-white font-semibold">{t('products.baobabCacay.name')}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#00BCD4] mb-2">
                  {t('products.baobabCacay.tagline')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('products.baobabCacay.shortDesc')}
                </p>
                <a
                  href={AMAZON_LINKS.baobabCacay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#00BCD4] text-white font-semibold rounded-lg hover:bg-[#4A148C] transition-all duration-300 group-hover:translate-x-1"
                >
                  {t('products.baobabCacay.shopButton')}
                  <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#4A148C] mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '✨', title: 'Clean Beauty', desc: t('about.values.cleanBeauty') },
              { icon: '👑', title: 'Luxury Natural', desc: t('about.values.luxuryNatural') },
              { icon: '🎯', title: 'Built with Intention', desc: t('about.values.intention') },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-[#F5F5F5] to-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#4A148C] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

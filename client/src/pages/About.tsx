import { useTranslate } from '@/hooks/useTranslate';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useTranslate();

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#4A148C] mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#4A148C] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {t('about.story')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.brandEssence')}
              </p>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative h-96 hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A148C] via-[#00BCD4] to-[#D7CCC8] rounded-3xl opacity-20"></div>
              <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#4A148C] to-[#00BCD4] rounded-2xl transform -rotate-12 shadow-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
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
              {t('about.values.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌿',
                title: 'Clean Beauty',
                desc: t('about.values.cleanBeauty'),
              },
              {
                icon: '👑',
                title: 'Luxury Natural',
                desc: t('about.values.luxuryNatural'),
              },
              {
                icon: '🎯',
                title: 'Built with Intention',
                desc: t('about.values.intention'),
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[#4A148C] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Colors */}
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
              Our Visual Identity
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A carefully curated palette that reflects our brand essence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                color: '#4A148C',
                name: 'Deep Violet',
                desc: 'Elegance and sophistication',
              },
              {
                color: '#00BCD4',
                name: 'Turquoise',
                desc: 'Freshness and vitality',
              },
              {
                color: '#D7CCC8',
                name: 'Sand Beige',
                desc: 'Natural warmth and comfort',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-full h-48 rounded-xl shadow-lg mb-4 transition-transform hover:scale-105"
                  style={{ backgroundColor: item.color }}
                ></div>
                <h3 className="text-xl font-bold text-[#4A148C] mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <p className="text-sm text-gray-500 mt-2 font-mono">{item.color}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-[#4A148C] to-[#00BCD4]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.mission')}
            </h2>
            <p className="text-xl max-w-2xl mx-auto italic">
              "{t('about.tagline')}"
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

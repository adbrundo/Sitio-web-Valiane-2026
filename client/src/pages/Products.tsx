import { useTranslate } from '@/hooks/useTranslate';
import { AMAZON_LINKS } from '@shared/const';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';

export default function Products() {
  const { t } = useTranslate();

  const products = [
    {
      slug: 'prickly-pear',
      name: t('products.pricklyPear.name'),
      tagline: t('products.pricklyPear.tagline'),
      shortDesc: t('products.pricklyPear.shortDesc'),
      shopButton: t('products.pricklyPear.shopButton'),
      amazonLink: AMAZON_LINKS.pricklyPear,
      icon: '🌵',
      gradient: 'from-[#4A148C] to-[#00BCD4]',
      accentColor: 'text-[#4A148C]',
      buttonColor: 'bg-[#4A148C] hover:bg-[#00BCD4]',
    },
    {
      slug: 'baobab-cacay',
      name: t('products.baobabCacay.name'),
      tagline: t('products.baobabCacay.tagline'),
      shortDesc: t('products.baobabCacay.shortDesc'),
      shopButton: t('products.baobabCacay.shopButton'),
      amazonLink: AMAZON_LINKS.baobabCacay,
      icon: '🌳',
      gradient: 'from-[#00BCD4] to-[#D7CCC8]',
      accentColor: 'text-[#00BCD4]',
      buttonColor: 'bg-[#00BCD4] hover:bg-[#4A148C]',
    },
  ];

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
              {t('products.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map((product, idx) => (
              <motion.div
                key={product.slug}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={`/product/${product.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    {/* Product Image Area */}
                    <div className={`relative h-80 bg-gradient-to-br ${product.gradient} overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-8xl mb-4">{product.icon}</div>
                          <p className="text-white font-semibold text-lg">{product.name}</p>
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-8">
                      <h3 className={`text-3xl font-bold ${product.accentColor} mb-2`}>
                        {product.tagline}
                      </h3>
                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {product.shortDesc}
                      </p>

                      <div className="flex gap-4">
                        <a
                          href={product.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 ${product.buttonColor} text-white font-semibold rounded-lg transition-all duration-300`}
                        >
                          {product.shopButton}
                          <ChevronRight size={18} />
                        </a>
                        <button className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#4A148C] hover:text-[#4A148C] transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Valianė */}
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
              Why Choose Valianė?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium botanical skincare crafted with intention
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌿',
                title: '100% Natural',
                desc: 'Pure botanical ingredients sourced from nature',
              },
              {
                icon: '✨',
                title: 'Luxury Quality',
                desc: 'Premium formulations in elegant packaging',
              },
              {
                icon: '💎',
                title: 'Proven Results',
                desc: 'Nutrient-rich oils for visible skin transformation',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#4A148C] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

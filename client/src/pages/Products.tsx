import { motion } from 'framer-motion';
import { useTranslate } from '@/hooks/useTranslate';
import { ArrowRight, ShieldCheck, Sparkles, Droplets, Zap } from 'lucide-react';

export default function Products() {
  const { t } = useTranslate();

  const products = [
    {
      id: 'prickly-pear',
      name: t('products.pricklyPear.name'),
      tagline: t('products.pricklyPear.tagline'),
      shortDesc: t('products.pricklyPear.shortDesc'),
      benefits: t('products.pricklyPear.benefits') as unknown as string[],
      image: '/images/brand/prickly_pear_ad_5.png',
      color: 'from-[#4A148C]/20 to-transparent',
      accent: '#4A148C',
      icon: <Droplets className="w-6 h-6 text-[#00BCD4]" />
    },
    {
      id: 'baobab-cacay',
      name: t('products.baobabCacay.name'),
      tagline: t('products.baobabCacay.tagline'),
      shortDesc: t('products.baobabCacay.shortDesc'),
      benefits: t('products.baobabCacay.benefits') as unknown as string[],
      image: '/images/brand/baobab_ad_2.png',
      color: 'from-[#0047AB]/20 to-transparent',
      accent: '#0047AB',
      icon: <Zap className="w-6 h-6 text-[#00BCD4]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0015] text-white pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#00BCD4]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#D7CCC8]">The Collection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#D7CCC8] via-white to-[#00BCD4] bg-clip-text text-transparent">
            {t('products.title')}
          </h1>
          <p className="text-xl text-[#D7CCC8]/60 max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        {/* Products List */}
        <div className="space-y-40">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                <motion.div 
                  className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {product.icon}
                    <span className="text-[#00BCD4] font-bold tracking-widest uppercase text-sm">{product.tagline}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">{product.name}</h2>
                  <p className="text-xl text-[#D7CCC8]/80 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                <div className="space-y-6">
                  {product.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <motion.div 
                      key={bIdx}
                      className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: bIdx * 0.1 }}
                    >
                      <ShieldCheck className="w-6 h-6 text-[#00BCD4] flex-shrink-0 mt-1" />
                      <p className="text-[#D7CCC8] leading-relaxed">
                        {benefit.split(' — ')[0]}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-[#00BCD4] hover:text-white transition-all duration-500"
                  >
                    Shop on Amazon
                  </motion.button>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-white font-bold text-lg group"
                  >
                    View Science <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison / Why Choose Section */}
        <motion.div 
          className="mt-60 p-16 rounded-[4rem] bg-white/5 border border-white/10 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#4A148C]/10 to-[#00BCD4]/10 pointer-events-none" />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">The Valianè Standard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Cold-Pressed', desc: 'Preserving 100% of biological integrity' },
                { title: 'UV Protected', desc: 'Violet glass blocks light to maintain potency' },
                { title: 'Pure INCI', desc: 'Minimalist formulas with maximum results' }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="text-3xl font-bold text-[#00BCD4]">{item.title}</div>
                  <p className="text-[#D7CCC8]/60 text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

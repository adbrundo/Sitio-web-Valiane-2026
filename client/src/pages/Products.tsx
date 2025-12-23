import { useTranslate } from '@/hooks/useTranslate';
import { AMAZON_LINKS } from '@shared/const';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronRight, Sparkles, Droplet, Leaf } from 'lucide-react';

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
      image: '/images/valiane_prickly_pear_product.webp',
      gradient: 'from-[#4A148C] via-[#6A1B9A] to-[#00BCD4]',
      glowColor: '#4A148C',
      badge: 'Bestseller',
      benefits: ['Anti-Aging', 'Deep Hydration', 'Gua Sha Perfect']
    },
    {
      slug: 'baobab-cacay',
      name: t('products.baobabCacay.name'),
      tagline: t('products.baobabCacay.tagline'),
      shortDesc: t('products.baobabCacay.shortDesc'),
      shopButton: t('products.baobabCacay.shopButton'),
      amazonLink: AMAZON_LINKS.baobabCacay,
      image: '/images/valiane_baobab_cacay_product.webp',
      gradient: 'from-[#00BCD4] via-[#00ACC1] to-[#4A148C]',
      glowColor: '#00BCD4',
      badge: 'New Formula',
      benefits: ['Natural Retinol', 'Barrier Support', 'Lightweight']
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0015] via-[#1a0a2e] to-[#0f0520]">
      {/* Hero Header with Parallax */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#4A148C]/30 to-[#00BCD4]/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4A148C]/20 to-[#00BCD4]/20 border border-[#00BCD4]/30 rounded-full backdrop-blur-sm mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-[#00BCD4]" />
              <span className="text-sm text-[#00BCD4] font-medium">Premium Collection</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-[#D7CCC8] to-[#00BCD4] bg-clip-text text-transparent">
                {t('products.title')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D7CCC8]/70 leading-relaxed">
              {t('products.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Showcase - Ultra Premium Design */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {products.map((product, idx) => (
              <motion.div
                key={product.slug}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Product Image Side */}
                  <motion.div
                    className={`relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-3xl blur-3xl opacity-50"
                      style={{ 
                        background: `radial-gradient(circle, ${product.glowColor}40 0%, transparent 70%)` 
                      }}
                    />
                    
                    {/* Product Card */}
                    <div className="relative bg-gradient-to-br from-[#1a0a2e]/80 to-[#0f0520]/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                      <div className="relative h-[500px] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-transparent to-transparent`} />
                        
                        {/* Floating Badge */}
                        <div className="absolute top-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                          <span className="text-white text-sm font-semibold">{product.badge}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Product Info Side */}
                  <motion.div
                    className={`space-y-8 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="space-y-4">
                      <motion.div
                        className="inline-block"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-[#00BCD4] text-sm font-semibold tracking-wider uppercase">
                          Essential Care
                        </span>
                      </motion.div>

                      <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        {product.name}
                      </h2>
                      
                      <p className={`text-2xl font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                        {product.tagline}
                      </p>
                      
                      <p className="text-lg text-[#D7CCC8]/70 leading-relaxed">
                        {product.shortDesc}
                      </p>
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-3">
                      {product.benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`} />
                          <span className="text-[#D7CCC8]/80">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a
                        href={product.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                      >
                        {product.shopButton}
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                      </a>
                      
                      <Link href={`/product/${product.slug}`}>
                        <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#00BCD4]/50 text-[#00BCD4] font-semibold rounded-full hover:bg-[#00BCD4]/10 transition-all duration-300 backdrop-blur-sm">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Premium Design */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-[#00BCD4] bg-clip-text text-transparent">
                Why Choose Valianè?
              </span>
            </h2>
            <p className="text-xl text-[#D7CCC8]/70 max-w-3xl mx-auto">
              Premium botanical skincare crafted with intention and backed by science
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Leaf,
                title: '100% Natural',
                desc: 'Pure botanical ingredients sourced from nature, cold-pressed to preserve potency',
                gradient: 'from-[#4A148C]/20 to-[#6A1B9A]/20',
                iconColor: 'text-[#4A148C]'
              },
              {
                icon: Sparkles,
                title: 'Luxury Quality',
                desc: 'Premium formulations in elegant UV-blocking glass packaging',
                gradient: 'from-[#00BCD4]/20 to-[#00ACC1]/20',
                iconColor: 'text-[#00BCD4]'
              },
              {
                icon: Droplet,
                title: 'Proven Results',
                desc: 'Nutrient-rich oils for visible skin transformation and lasting glow',
                gradient: 'from-[#D7CCC8]/20 to-[#BCAAA4]/20',
                iconColor: 'text-[#D7CCC8]'
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <feature.icon className={`w-12 h-12 ${feature.iconColor} mb-6`} />
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[#D7CCC8]/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#4A148C]/20 via-[#00BCD4]/20 to-[#4A148C]/20"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-white via-[#D7CCC8] to-[#00BCD4] bg-clip-text text-transparent">
                Ready to Transform Your Skin?
              </span>
            </h2>
            <p className="text-xl text-[#D7CCC8]/70">
              Join thousands who've discovered the power of intentional skincare
            </p>
            <Link href="/about">
              <button className="px-10 py-5 bg-gradient-to-r from-[#4A148C] via-[#6A1B9A] to-[#00BCD4] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#00BCD4]/50 transition-all duration-300 hover:scale-105">
                Learn About Our Story
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

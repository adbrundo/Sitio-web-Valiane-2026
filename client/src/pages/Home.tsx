import { useTranslate } from '@/hooks/useTranslate';
import { AMAZON_LINKS } from '@shared/const';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronRight, Sparkles, Leaf, Heart } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const { t } = useTranslate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0015] via-[#1a0a2e] to-[#0f0520]">
      {/* Hero Section - Ultra Modern with Parallax */}
      <section ref={heroRef} className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <motion.div 
            className="absolute top-20 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#4A148C]/30 via-[#00BCD4]/20 to-transparent blur-3xl"
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
          <motion.div 
            className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#00BCD4]/30 via-[#4A148C]/20 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00BCD4]/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <motion.div 
          className="container mx-auto px-4 relative z-10"
          style={{ opacity, scale }}
        >
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <motion.div className="space-y-10" variants={itemVariants}>
              <div className="space-y-6">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4A148C]/20 to-[#00BCD4]/20 border border-[#00BCD4]/30 rounded-full backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <Sparkles className="w-4 h-4 text-[#00BCD4]" />
                  <span className="text-sm text-[#00BCD4] font-medium">Luxury Natural Skincare</span>
                </motion.div>

                <motion.h1
                  className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
                  variants={itemVariants}
                >
                  <span className="bg-gradient-to-r from-[#D7CCC8] via-white to-[#00BCD4] bg-clip-text text-transparent">
                    {t('hero.tagline')}
                  </span>
                </motion.h1>
                
                <motion.p
                  className="text-xl md:text-2xl text-[#D7CCC8]/80 leading-relaxed max-w-xl"
                  variants={itemVariants}
                >
                  {t('hero.subtitle')}
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <Link href="/products">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-[#4A148C] via-[#6A1B9A] to-[#00BCD4] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#00BCD4]/50 hover:scale-105">
                    <span className="relative z-10 flex items-center gap-2">
                      {t('hero.cta')}
                      <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00BCD4] to-[#4A148C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </Link>
                
                <Link href="/about">
                  <button className="px-8 py-4 border-2 border-[#00BCD4]/50 text-[#00BCD4] font-semibold rounded-full hover:bg-[#00BCD4]/10 transition-all duration-300 backdrop-blur-sm">
                    Learn More
                  </button>
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div 
                className="flex flex-wrap gap-6 pt-4"
                variants={itemVariants}
              >
                {[
                  { icon: Leaf, text: "100% Natural" },
                  { icon: Heart, text: "Cruelty Free" },
                  { icon: Sparkles, text: "Vegan" }
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#D7CCC8]/60">
                    <badge.icon className="w-5 h-5 text-[#00BCD4]" />
                    <span className="text-sm font-medium">{badge.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual - Product Showcase */}
            <motion.div
              className="relative h-[600px] hidden lg:block"
              variants={floatingVariants}
              animate="animate"
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A148C]/40 via-[#00BCD4]/30 to-transparent rounded-3xl blur-2xl" />
              
              {/* Product Images */}
              <div className="relative h-full flex items-center justify-center">
                <motion.div
                  className="absolute w-80 h-80 rounded-2xl overflow-hidden shadow-2xl shadow-[#4A148C]/50 transform -rotate-6"
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/images/valiane_prickly_pear_product.webp" 
                    alt="Prickly Pear Oil"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A148C]/60 to-transparent" />
                </motion.div>
                
                <motion.div
                  className="absolute w-72 h-72 rounded-2xl overflow-hidden shadow-2xl shadow-[#00BCD4]/50 transform rotate-6 translate-x-32 translate-y-20"
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/images/valiane_baobab_cacay_product.webp" 
                    alt="Baobab & Cacay Oil"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00BCD4]/60 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#00BCD4]/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Products Section - Enhanced */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0520] via-[#1a0a2e] to-[#0f0520]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-[#00BCD4] text-sm font-semibold tracking-wider uppercase">Our Collection</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-[#D7CCC8] to-[#00BCD4] bg-clip-text text-transparent">
                {t('products.title')}
              </span>
            </h2>
            <p className="text-xl text-[#D7CCC8]/70 max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </motion.div>

          {/* Product Cards - Ultra Modern Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Prickly Pear Card */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-[#1a0a2e] to-[#0f0520] rounded-3xl overflow-hidden border border-[#4A148C]/30 hover:border-[#4A148C]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4A148C]/30">
                {/* Product Image */}
                <div className="relative h-96 overflow-hidden">
                  <motion.img
                    src="/images/valiane_prickly_pear_product.webp"
                    alt="Prickly Pear Seed Oil"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-[#4A148C]/20 to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-[#4A148C]/80 backdrop-blur-md rounded-full border border-[#00BCD4]/30">
                    <span className="text-[#00BCD4] text-sm font-semibold">Bestseller</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {t('products.pricklyPear.name')}
                    </h3>
                    <p className="text-lg text-[#00BCD4] font-semibold mb-4">
                      {t('products.pricklyPear.tagline')}
                    </p>
                    <p className="text-[#D7CCC8]/70 leading-relaxed">
                      {t('products.pricklyPear.shortDesc')}
                    </p>
                  </div>

                  <a
                    href={AMAZON_LINKS.pricklyPear}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4A148C] to-[#6A1B9A] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#4A148C]/50 transition-all duration-300 group-hover:translate-x-2"
                  >
                    {t('products.pricklyPear.shopButton')}
                    <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Baobab & Cacay Card */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-[#1a0a2e] to-[#0f0520] rounded-3xl overflow-hidden border border-[#00BCD4]/30 hover:border-[#00BCD4]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BCD4]/30">
                {/* Product Image */}
                <div className="relative h-96 overflow-hidden">
                  <motion.img
                    src="/images/valiane_baobab_cacay_product.webp"
                    alt="Baobab & Cacay Oil"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-[#00BCD4]/20 to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-[#00BCD4]/80 backdrop-blur-md rounded-full border border-[#4A148C]/30">
                    <span className="text-white text-sm font-semibold">New</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {t('products.baobabCacay.name')}
                    </h3>
                    <p className="text-lg text-[#00BCD4] font-semibold mb-4">
                      {t('products.baobabCacay.tagline')}
                    </p>
                    <p className="text-[#D7CCC8]/70 leading-relaxed">
                      {t('products.baobabCacay.shortDesc')}
                    </p>
                  </div>

                  <a
                    href={AMAZON_LINKS.baobabCacay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00BCD4] to-[#00ACC1] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#00BCD4]/50 transition-all duration-300 group-hover:translate-x-2"
                  >
                    {t('products.baobabCacay.shopButton')}
                    <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Values Section - Redesigned */}
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
                {t('about.title')}
              </span>
            </h2>
            <p className="text-xl text-[#D7CCC8]/70 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: '✨', 
                title: 'Clean Beauty', 
                desc: t('about.values.cleanBeauty'),
                gradient: 'from-[#4A148C]/20 to-[#6A1B9A]/20',
                border: 'border-[#4A148C]/30'
              },
              { 
                icon: '👑', 
                title: 'Luxury Natural', 
                desc: t('about.values.luxuryNatural'),
                gradient: 'from-[#00BCD4]/20 to-[#00ACC1]/20',
                border: 'border-[#00BCD4]/30'
              },
              { 
                icon: '🎯', 
                title: 'Built with Intention', 
                desc: t('about.values.intention'),
                gradient: 'from-[#D7CCC8]/20 to-[#BCAAA4]/20',
                border: 'border-[#D7CCC8]/30'
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${value.gradient} border ${value.border} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-[#D7CCC8]/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

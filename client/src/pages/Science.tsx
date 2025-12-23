import { motion } from 'framer-motion';
import { useTranslate } from '@/hooks/useTranslate';
import { Beaker, ShieldCheck, Zap, Droplets, Sparkles } from 'lucide-react';

export default function Science() {
  const { t } = useTranslate();

  const ingredients = [
    {
      name: 'Prickly Pear Seed Oil',
      description: t('science.ingredients.pricklyPear'),
      icon: <Droplets className="w-6 h-6 text-[#00BCD4]" />,
      stats: [
        { label: 'Vitamin E', value: '150%' },
        { label: 'Linoleic Acid', value: '60%' },
        { label: 'Antioxidants', value: 'High' }
      ]
    },
    {
      name: 'Baobab Seed Oil',
      description: t('science.ingredients.baobab'),
      icon: <Zap className="w-6 h-6 text-[#4A148C]" />,
      stats: [
        { label: 'Omega 3, 6, 9', value: 'Rich' },
        { label: 'Vitamin C', value: 'High' },
        { label: 'Absorption', value: 'Fast' }
      ]
    },
    {
      name: 'Cacay Oil',
      description: t('science.ingredients.cacay'),
      icon: <Sparkles className="w-6 h-6 text-[#D7CCC8]" />,
      stats: [
        { label: 'Natural Retinol', value: '3x' },
        { label: 'Vitamin F', value: '2x' },
        { label: 'Elasticity', value: '+40%' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0015] text-white pt-24 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4A148C]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00BCD4]/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Beaker className="w-4 h-4 text-[#00BCD4]" />
            <span className="text-sm font-medium tracking-wider uppercase text-[#D7CCC8]">Scientific Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#D7CCC8] via-white to-[#00BCD4] bg-clip-text text-transparent">
            {t('science.title')}
          </h1>
          <p className="text-xl text-[#D7CCC8]/70 leading-relaxed">
            {t('science.subtitle')}
          </p>
        </motion.div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-40">
          {ingredients.map((ing, idx) => (
            <motion.div
              key={ing.name}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#00BCD4]/30 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {ing.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{ing.name}</h3>
              <p className="text-[#D7CCC8]/70 mb-8 leading-relaxed">
                {ing.description}
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {ing.stats.map(stat => (
                  <div key={stat.label}>
                    <p className="text-[10px] uppercase tracking-widest text-[#D7CCC8]/40 mb-1">{stat.label}</p>
                    <p className="text-sm font-bold text-[#00BCD4]">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="relative">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A148C]/20 to-[#00BCD4]/20 blur-3xl rounded-full" />
                <img 
                  src="/images/brand/baobab_ad_3.png" 
                  alt="Extraction Process" 
                  className="relative z-10 w-full rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#00BCD4]" />
                <span className="text-sm font-medium text-[#D7CCC8]">Quality Assurance</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {t('science.process.title')}
              </h2>
              <p className="text-xl text-[#D7CCC8]/70 leading-relaxed">
                {t('science.process.description')}
              </p>
              <div className="space-y-4">
                {[
                  'Cold-pressed extraction at < 40°C',
                  'UV-blocking violet glass protection',
                  'Small-batch production for freshness',
                  'Rigorous third-party purity testing'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#D7CCC8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

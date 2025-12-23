import { motion } from 'framer-motion';
import { useTranslate } from '@/hooks/useTranslate';
import { Sparkles, Moon, Sun, ArrowRight } from 'lucide-react';

export default function Rituals() {
  const { t } = useTranslate();

  const rituals = [
    {
      id: 'morning',
      icon: <Sun className="w-8 h-8 text-[#00BCD4]" />,
      title: t('rituals.morning.title'),
      description: t('rituals.morning.description'),
      steps: t('rituals.morning.steps') as unknown as string[],
      image: '/images/brand/prickly_pear_ad_3.png',
      color: 'from-[#00BCD4]/20 to-transparent'
    },
    {
      id: 'evening',
      icon: <Moon className="w-8 h-8 text-[#4A148C]" />,
      title: t('rituals.evening.title'),
      description: t('rituals.evening.description'),
      steps: t('rituals.evening.steps') as unknown as string[],
      image: '/images/brand/baobab_ad_2.png',
      color: 'from-[#4A148C]/20 to-transparent'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0015] text-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#00BCD4]" />
            <span className="text-sm font-medium tracking-wider uppercase text-[#D7CCC8]">Mindful Beauty</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#D7CCC8] via-white to-[#00BCD4] bg-clip-text text-transparent">
            {t('rituals.title')}
          </h1>
          <p className="text-xl text-[#D7CCC8]/70 max-w-2xl mx-auto">
            {t('rituals.subtitle')}
          </p>
        </motion.div>

        {/* Rituals Grid */}
        <div className="space-y-32">
          {rituals.map((ritual, index) => (
            <motion.div 
              key={ritual.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${ritual.color} rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
                  <img 
                    src={ritual.image} 
                    alt={ritual.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                  {ritual.icon}
                  <h2 className="text-4xl font-bold text-white">{ritual.title}</h2>
                </div>
                <p className="text-xl text-[#D7CCC8]/80 leading-relaxed">
                  {ritual.description}
                </p>
                
                <div className="space-y-6">
                  {ritual.steps.map((step, stepIdx) => (
                    <motion.div 
                      key={stepIdx}
                      className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: stepIdx * 0.1 }}
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#4A148C] to-[#00BCD4] flex items-center justify-center text-sm font-bold">
                        {stepIdx + 1}
                      </span>
                      <p className="text-lg text-[#D7CCC8] group-hover:text-white transition-colors">
                        {step}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#4A148C] to-[#00BCD4] text-white font-bold text-lg hover:shadow-lg hover:shadow-[#00BCD4]/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop the Ritual <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Drop Guide Section */}
        <motion.div 
          className="mt-40 p-12 rounded-[3rem] bg-gradient-to-br from-[#1a0a2e] to-[#0A0015] border border-white/10 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00BCD4]/10 blur-[100px] rounded-full" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-white">Precision in Every Drop</h2>
              <p className="text-xl text-[#D7CCC8]/70">
                Our concentrated formulas are designed for maximum efficacy. Follow our drop guide to ensure your skin receives the perfect amount of nourishment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#D7CCC8]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                  Face: 2-3 drops for a radiant glow
                </li>
                <li className="flex items-center gap-3 text-[#D7CCC8]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                  Scalp: 4-6 drops for deep nourishment
                </li>
                <li className="flex items-center gap-3 text-[#D7CCC8]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                  Ends: 1-2 drops for silky smoothness
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <img 
                src="/images/brand/drop_guide.png" 
                alt="Drop Guide" 
                className="w-full rounded-2xl shadow-2xl shadow-black/50"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslate } from '@/hooks/useTranslate';
import { Link } from 'wouter';
import { ArrowRight, Sparkles, ShieldCheck, Leaf, Droplets } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const { t } = useTranslate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const products = [
    {
      id: 'prickly-pear',
      name: t('products.pricklyPear.name'),
      tagline: t('products.pricklyPear.tagline'),
      image: '/images/brand/prickly_pear_ad_1.png',
      color: '#4A148C',
      link: '/products'
    },
    {
      id: 'baobab-cacay',
      name: t('products.baobabCacay.name'),
      tagline: t('products.baobabCacay.tagline'),
      image: '/images/brand/baobab_ad_1.png',
      color: '#0047AB',
      link: '/products'
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#0A0015] overflow-hidden">
      {/* Interactive Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#4A148C]/10 blur-[120px] rounded-full"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00BCD4]/10 blur-[120px] rounded-full"
          animate={{
            x: mousePosition.x * -50,
            y: mousePosition.y * -50,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/brand/brand_hero.jpg" 
            alt="Valianè Collection" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0015] via-[#0A0015]/80 to-[#0A0015]" />
        </div>

        <motion.div 
          style={{ opacity, scale, y: y1 }}
          className="container mx-auto text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#00BCD4]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D7CCC8]">The Future of Botanical Luxury</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]"
          >
            <span className="block text-white">Redefining</span>
            <span className="block bg-gradient-to-r from-[#D7CCC8] via-white to-[#00BCD4] bg-clip-text text-transparent">
              Pure Radiance
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-[#D7CCC8]/60 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-[#00BCD4] hover:text-white transition-all duration-500 shadow-2xl shadow-white/10"
              >
                {t('hero.cta')}
              </motion.button>
            </Link>
            <Link href="/rituals">
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-white font-bold text-lg group"
              >
                Explore Rituals <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Collection - Horizontal Scroll Style */}
      <section className="py-40 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Crafted with <br />
                <span className="text-[#00BCD4]">Uncompromising</span> Purity
              </h2>
              <p className="text-xl text-[#D7CCC8]/60">
                Each drop is a testament to our commitment to quality, sourcing the finest botanicals from around the globe.
              </p>
            </div>
            <Link href="/products">
              <span className="text-[#D7CCC8] hover:text-white transition-colors font-bold tracking-widest uppercase text-sm flex items-center gap-2 cursor-pointer">
                View Full Collection <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-white/5 border border-white/10"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-12 w-full">
                  <p className="text-[#00BCD4] font-bold tracking-widest uppercase text-xs mb-4">{product.tagline}</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{product.name}</h3>
                  <Link href={product.link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all"
                    >
                      Explore Product
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values - Minimalist & Professional */}
      <section className="py-40 bg-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              {
                icon: <Leaf className="w-10 h-10 text-[#00BCD4]" />,
                title: "100% Botanical",
                desc: "Pure, cold-pressed oils sourced from sustainable farms, preserving every vital nutrient."
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-[#4A148C]" />,
                title: "Clean Excellence",
                desc: "Free from synthetics, parabens, and fillers. Only what your skin truly needs."
              },
              {
                icon: <Droplets className="w-10 h-10 text-[#D7CCC8]" />,
                title: "Intentional Rituals",
                desc: "Designed to transform your daily routine into a moment of mindful self-care."
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="space-y-6"
              >
                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                <p className="text-lg text-[#D7CCC8]/60 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inmersive Gallery / Carousel Section */}
      <section className="py-40 px-6 overflow-hidden relative z-10">
        <div className="container mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center">Visual Storytelling</h2>
        </div>
        
        <div className="flex gap-8 animate-scroll">
          {[
            '/images/brand/prickly_pear_ad_2.jpg',
            '/images/brand/baobab_ad_2.png',
            '/images/brand/prickly_pear_ad_4.png',
            '/images/brand/baobab_ad_3.png',
            '/images/brand/prickly_pear_ad_5.png',
            '/images/brand/prickly_pear_ad_3.png',
            '/images/brand/prickly_pear_ad_2.jpg',
            '/images/brand/baobab_ad_2.png',
            '/images/brand/prickly_pear_ad_4.png',
            '/images/brand/baobab_ad_3.png',
            '/images/brand/prickly_pear_ad_5.png',
            '/images/brand/prickly_pear_ad_3.png',
          ].map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20 }}
              className="flex-shrink-0 w-[300px] md:w-[450px] aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10"
            >
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl p-20 rounded-[4rem] bg-gradient-to-br from-[#4A148C] to-[#00BCD4] relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">Ready to Glow?</h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
              Join thousands of others who have transformed their skin with Valianè.
            </p>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 rounded-full bg-white text-black font-bold text-xl shadow-2xl"
              >
                Shop the Collection
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-450px * 6 - 2rem * 6)); }
        }
        .animate-scroll {
          display: flex;
          width: calc(450px * 12 + 2rem * 12);
          animation: scroll 80s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

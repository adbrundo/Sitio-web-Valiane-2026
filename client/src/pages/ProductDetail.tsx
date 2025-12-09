import { useTranslate } from '@/hooks/useTranslate';
import { AMAZON_LINKS } from '@shared/const';
import { ImageGallery } from '@/components/ImageGallery';
import { InstagramFeed } from '@/components/InstagramFeed';
import { motion } from 'framer-motion';
import { useParams } from 'wouter';
import { ChevronRight, Star } from 'lucide-react';

const productData = {
  'prickly-pear': {
    name: 'Prickly Pear Seed Oil',
    tagline: 'Radiance Restoring Oil',
    description: 'Experience the transformative power of pure Prickly Pear Seed Oil. Rich in vitamin E, linoleic acid, and antioxidants, this luxurious oil deeply nourishes and revitalizes your skin.',
    benefits: [
      'Restores natural radiance and glow',
      'Deeply hydrates and nourishes skin',
      'Reduces appearance of fine lines',
      'Improves skin texture and elasticity',
      'Rich in antioxidants and vitamins',
      'Lightweight and fast-absorbing',
    ],
    ingredients: 'Opuntia Ficus-Indica Seed Oil, Vitamin E, Natural Antioxidants',
    usage: 'Apply 2-3 drops to clean, damp skin. Gently massage in circular motions. Use morning and evening for best results.',
    sensory: 'Lightweight, silky texture with a subtle, natural aroma. Absorbs quickly without leaving greasy residue.',
    amazonLink: AMAZON_LINKS.pricklyPear,
    icon: '🌵',
    gradient: 'from-[#4A148C] to-[#00BCD4]',
    accentColor: 'text-[#4A148C]',
    images: [
      '/prickly-pear-1.jpg',
      '/prickly-pear-2.jpg',
      '/prickly-pear-3.jpg',
      '/prickly-pear-4.jpg',
      '/prickly-pear-5.jpg',
      '/prickly-pear-6.jpg',
      '/prickly-pear-7.jpg',
      '/prickly-pear-8.jpg',
    ],
  },
  'baobab-cacay': {
    name: 'Baobab & Cacay Blend',
    tagline: 'Nourishing Botanical Elixir',
    description: 'A luxurious blend of Baobab and Cacay oils, this premium formula combines the best of nature to provide comprehensive skincare benefits.',
    benefits: [
      'Intense hydration and nourishment',
      'Improves skin firmness and elasticity',
      'Reduces appearance of wrinkles',
      'Balances skin moisture levels',
      'Promotes natural skin barrier repair',
      'Suitable for all skin types',
    ],
    ingredients: 'Adansonia Digitata Seed Oil, Caryodendron Nut Oil, Vitamin A, Vitamin E, Omega Fatty Acids',
    usage: 'Apply 3-4 drops to clean skin. Massage gently until fully absorbed. Use twice daily for optimal results.',
    sensory: 'Rich, luxurious texture with a warm, earthy aroma. Provides a pampering sensation while absorbing smoothly.',
    amazonLink: AMAZON_LINKS.baobabCacay,
    icon: '🌳',
    gradient: 'from-[#00BCD4] to-[#D7CCC8]',
    accentColor: 'text-[#00BCD4]',
    images: [
      '/baobab-cacay-1.jpg',
      '/baobab-cacay-2.jpg',
      '/baobab-cacay-3.jpg',
      '/baobab-cacay-4.jpg',
      '/baobab-cacay-5.jpg',
      '/baobab-cacay-6.jpg',
      '/baobab-cacay-7.jpg',
      '/baobab-cacay-8.jpg',
    ],
  },
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = productData[slug as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#4A148C] mb-4">Product Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Product Hero with Gallery */}
      <section className={`py-20 bg-gradient-to-br ${product.gradient}`}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-8xl mb-6">{product.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl mb-8 opacity-90">{product.tagline}</p>
            <a
              href={product.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4A148C] font-bold rounded-lg hover:bg-gray-100 transition-all"
            >
              Shop on Amazon
              <ChevronRight size={20} />
            </a>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ImageGallery images={product.images} productName={product.name} />
          </motion.div>
        </div>
      </section>

      {/* Description with Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl font-bold ${product.accentColor} mb-6`}>About This Product</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{product.description}</p>

            {/* Secondary Gallery in Description */}
            <div className="mt-12">
              <h3 className={`text-2xl font-bold ${product.accentColor} mb-6`}>Product Gallery</h3>
              <ImageGallery images={product.images} productName={product.name} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold ${product.accentColor} text-center mb-16`}>Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {product.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Star className={`flex-shrink-0 ${product.accentColor}`} size={24} />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients & Usage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-3xl font-bold ${product.accentColor} mb-4`}>Ingredients</h3>
              <p className="text-gray-600 leading-relaxed">{product.ingredients}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-3xl font-bold ${product.accentColor} mb-4`}>How to Use</h3>
              <p className="text-gray-600 leading-relaxed">{product.usage}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sensory */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl font-bold ${product.accentColor} mb-6`}>Sensory Experience</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{product.sensory}</p>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl font-bold ${product.accentColor} mb-4`}>Follow Us on Instagram</h2>
            <p className="text-gray-600 text-lg">@valianevalkyria</p>
          </motion.div>
          <InstagramFeed />
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 bg-gradient-to-br ${product.gradient}`}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Skin?</h2>
            <a
              href={product.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4A148C] font-bold rounded-lg hover:bg-gray-100 transition-all"
            >
              Shop Now on Amazon
              <ChevronRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

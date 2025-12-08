type DeepKeyOf<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? `${string & K}.${string & DeepKeyOf<T[K]>}`
        : `${string & K}`;
    }[keyof T]
  : never;

export type TranslationKey = DeepKeyOf<typeof translations.en>;

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
      admin: 'Admin',
    },
    
    // Hero Section
    hero: {
      tagline: 'Glow Up to a Better New Life',
      subtitle: 'Premium botanical skincare oils for the discerning beauty enthusiast',
      cta: 'Discover Our Products',
    },
    
    // Products
    products: {
      title: 'Our Collection',
      subtitle: 'Luxury botanical oils crafted with intention',
      pricklyPear: {
        name: 'Enriched Prickly Pear Seed Oil',
        shortDesc: 'Lightweight, fast-absorbing facial oil for radiant skin',
        tagline: 'Liquid Gold for Your Skin',
        benefits: [
          'SUPREME SKIN RENEWAL — Lightweight, fast-absorbing prickly pear seed oil glow oil that layers under moisturizer or makeup without grease. Omega-rich and vitamin-E benefits support a smoother, more elastic look; ideal face oil for women & men, perfect gua sha oil for silky slip and a refined, dewy finish.',
          'ANTIOXIDANT-RICH FORMULA — Enriched with Opuntia ficus-indica plus jojoba, rosehip & plant squalane to deliver linoleic/oleic fatty acids and tocopherols. Helps skin look supple, balanced and radiant; a clean-beauty facial oil for dry, mature, sensitive or combination skin with a comfortable, non-greasy feel.',
          'FACE & HAIR VERSATILITY — 2–3 drops on damp skin; 1–2 on ends or scalp oil pre-wash. Works as hair serum to add shine and tame frizz, a light finishing oil, beard oil for men, and cuticle oil. Multipurpose cactus seed oil care for glow, softness and smoother-looking texture.',
          'COMPACT, RESPONSIBLE PACKAGING — Recyclable violet UV-blocking glass dropper helps protect delicate plant oils from light to preserve freshness and potency; travel-friendly bottle fits any kit. Conscious carton with water-based inks underscores premium, low-impact design.',
          'LUXURIOUS MOISTURIZER — Also known as Barbary Fig Oil / Cactus Seed Oil / Indian Fig Oil, this premium prickly pear oil for face elevates routines as a face & body moisturizer with a minimalist INCI for clean-beauty lovers seeking radiance, comfort and a naturally silky, non-sticky finish.',
        ],
        ingredients: 'Opuntia Ficus-Indica Seed Oil, Squalane, Simmondsia Chinensis (Jojoba) Seed Oil, Rosa Canina Fruit Oil',
        usage: 'Apply 2-3 drops to clean, slightly damp skin. Gently press into face and neck in upward motions. Can be used morning and night as the last step of skincare, or before a heavier moisturizer if extra hydration is needed.',
        sensory: 'Pale golden color with a light natural aroma (nutty-earthy from prickly pear seeds). Silky, lightweight texture that absorbs within minutes, leaving skin feeling velvety, not oily.',
        shopButton: 'Shop on Amazon',
      },
      baobabCacay: {
        name: 'Baobab & Cacay Revitalizing Blend',
        shortDesc: 'Multi-use oil for face, hair, and body nourishment',
        tagline: 'The Natural Retinol Alternative',
        benefits: [
          'LIGHTWEIGHT: Fast-absorbing facial & hair oil that layers cleanly under moisturizer or makeup. Non-greasy finish for AM/PM use; designed to soften dry skin, tame frizz, smooth split ends & add shine. Ideal as a finishing oil or pre-wash scalp massage for a balanced, silky feel.',
          'Powered by COLD PRESSED Baobab & Cacay (aka Kahai) with plant squalane + meadowfoam: rich in linoleic/oleic fatty acids, vitamin E and natural vitamin A for a smoother-looking, more elastic glow. Often called a "natural retinol alternative" due to cacay\'s vitamin A content.',
          'HYDRATION & BARRIER SUPPORT: seals moisture without heaviness and promotes a plush, supple texture. Meadowfoam seed oil adds a velvety, quick-absorbing feel. Pairs well with hyaluronic acid; apply 2–3 drops on damp skin, then moisturizer or SPF. Designed for dry, mature, sensitive & combo skin types.',
          'HAIR & SCALP CARE: use 1–2 drops on ends to fight dryness, frizz & flyaways; add shine without buildup. As a scalp oil, massage pre-wash to nourish and comfort; rinse clean. Works as a hair serum, finishing oil, or mix-in with leave-ins for glossy, touchable hair.',
          'SUPER CLEAN-BEAUTY FORMULA: vegan, non-GMO, cruelty-free; made without added fragrance, alcohol, silicones, mineral oil, parabens, phthalates or sulfates. Naturally scented by the oils themselves—subtle and comforting for daily wear.',
          'UV BLUE GLASS + precision dropper: premium recyclable UV-blocking bottle helps protect sensitive plant oils from light to preserve freshness and potency, supporting shelf life versus standard glass. Designed for refills or reuse to help reduce waste.',
        ],
        ingredients: 'Adansonia Digitata (Baobab) Seed Oil, Caryodendron Orinocense (Cacay) Seed Oil',
        usage: 'For face: Apply 2-3 drops to cleansed skin, ideally at night. For hair: Rub a few drops between palms and smooth over lengths and ends. Can also be used as a nourishing body oil.',
        sensory: 'Lightweight to medium viscosity with a velvety feel. Mild natural scent (baobab almost odorless with faint nutty note, cacay with subtle woody-nut aroma). Absorbs readily without greasy after-feel.',
        shopButton: 'Shop on Amazon',
      },
    },
    
    // About Brand
    about: {
      title: 'About Valianė',
      subtitle: 'Where Nature Meets Luxury',
      mission: 'Our mission is to deliver effortless, effective, and elegant skincare solutions to a discerning customer base.',
      tagline: 'Born from connection, inspired by purity, built with intention',
      values: {
        title: 'Our Values',
        cleanBeauty: 'Clean Beauty: 100% vegan, paraben-free, and naturally formulated with premium botanical ingredients',
        luxuryNatural: 'Luxury Natural: Refined aesthetics paired with authentic, nature-sourced ingredients',
        intention: 'Built with Intention: Every product is crafted to inspire a ritualistic, mindful approach to self-care',
      },
      brandEssence: 'Valianė is a premium beauty brand specializing in multi-purpose skincare oils that balance natural purity and modern luxury. Our brand essence is defined by a harmonious blend of natural authenticity and refined luxury.',
      story: 'Founded in 2024 under DuoTwins LLC, Valianė emerged from a vision of creating a "minimal luxury ritual born from nature." We believe that beauty should honor your natural glow rather than mask it, combining nutrient-rich botanicals with premium design standards.',
    },
    
    // Footer
    footer: {
      company: 'Company',
      contact: 'Contact',
      legal: 'Legal',
      followUs: 'Follow Us',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2025 DuoTwins LLC. All rights reserved.',
      email: 'Email',
      address: 'Address',
    },
    
    // Admin
    admin: {
      title: 'Admin Dashboard',
      products: 'Products',
      settings: 'Settings',
      logout: 'Logout',
      edit: 'Edit',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      add: 'Add',
    },
    
    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      language: 'Language',
    },
  },
  
  es: {
    // Navegación
    nav: {
      home: 'Inicio',
      products: 'Productos',
      about: 'Acerca de',
      contact: 'Contacto',
      admin: 'Admin',
    },
    
    // Sección Hero
    hero: {
      tagline: 'Brilla Hacia Una Vida Mejor',
      subtitle: 'Aceites de cuidado de la piel botánicos premium para el entusiasta de la belleza exigente',
      cta: 'Descubre Nuestros Productos',
    },
    
    // Productos
    products: {
      title: 'Nuestra Colección',
      subtitle: 'Aceites botánicos de lujo elaborados con intención',
      pricklyPear: {
        name: 'Aceite Enriquecido de Semilla de Tuna',
        shortDesc: 'Aceite facial ligero y de rápida absorción para una piel radiante',
        tagline: 'Oro Líquido para Tu Piel',
        benefits: [
          'RENOVACIÓN SUPREMA DE LA PIEL — Aceite de semilla de tuna ligero y de rápida absorción que se superpone bajo hidratante o maquillaje sin grasa. Los beneficios ricos en omega y vitamina E apoyan una apariencia más suave y elástica; aceite facial ideal para mujeres y hombres, perfecto para gua sha con deslizamiento sedoso y un acabado radiante y refinado.',
          'FÓRMULA RICA EN ANTIOXIDANTES — Enriquecida con Opuntia ficus-indica más jojoba, rosa mosqueta y escualano vegetal para proporcionar ácidos grasos linoleico/oleico y tocoferoles. Ayuda a que la piel se vea suave, equilibrada y radiante; un aceite facial de belleza limpia para piel seca, madura, sensible o combinada con una sensación cómoda y sin grasa.',
          'VERSATILIDAD FACIAL Y CAPILAR — 2-3 gotas en piel ligeramente húmeda; 1-2 en puntas o aceite del cuero cabelludo antes del lavado. Funciona como suero capilar para agregar brillo y domar el encrespamiento, un aceite de acabado ligero, aceite de barba para hombres y aceite de cutícula. Cuidado multiusos de aceite de semilla de cactus para brillo, suavidad y textura más suave.',
          'EMBALAJE COMPACTO Y RESPONSABLE — El gotero de vidrio violeta reciclable que bloquea los rayos UV ayuda a proteger los delicados aceites de plantas de la luz para preservar la frescura y potencia; la botella de viaje se adapta a cualquier kit. El cartón consciente con tintas a base de agua subraya el diseño premium y de bajo impacto.',
          'HIDRATANTE LUJOSO — También conocido como Aceite de Higo de Berbería / Aceite de Semilla de Cactus / Aceite de Higo Indio, este aceite de tuna premium para la cara eleva las rutinas como un hidratante facial y corporal con un INCI minimalista para los amantes de la belleza limpia que buscan radiancia, comodidad y un acabado naturalmente sedoso y no pegajoso.',
        ],
        ingredients: 'Aceite de Semilla de Opuntia Ficus-Indica, Escualano, Aceite de Semilla de Simmondsia Chinensis (Jojoba), Aceite de Fruto de Rosa Canina',
        usage: 'Aplicar 2-3 gotas en piel limpia y ligeramente húmeda. Presionar suavemente en la cara y el cuello en movimientos hacia arriba. Puede usarse mañana y noche como último paso del cuidado de la piel, o antes de un hidratante más pesado si se necesita hidratación adicional.',
        sensory: 'Color dorado pálido con aroma natural ligero (terroso-nuez de la semilla de tuna). Textura sedosa y ligera que se absorbe en minutos, dejando la piel suave, no grasosa.',
        shopButton: 'Comprar en Amazon',
      },
      baobabCacay: {
        name: 'Mezcla Revitalizante de Baobab y Cacay',
        shortDesc: 'Aceite multiusos para el cuidado del rostro, cabello y cuerpo',
        tagline: 'La Alternativa Natural al Retinol',
        benefits: [
          'LIGERO: Aceite facial y capilar de rápida absorción que se superpone limpiamente bajo hidratante o maquillaje. Acabado sin grasa para uso AM/PM; diseñado para suavizar piel seca, domar el encrespamiento, suavizar puntas abiertas y agregar brillo. Ideal como aceite de acabado o masaje del cuero cabelludo antes del lavado para una sensación equilibrada y sedosa.',
          'Impulsado por BAOBAB Y CACAY PRENSADOS EN FRÍO (también conocido como Kahai) con escualano vegetal + aceite de meadowfoam: rico en ácidos grasos linoleico/oleico, vitamina E y vitamina A natural para un brillo más suave y elástico. A menudo llamado "alternativa natural al retinol" debido al contenido de vitamina A del cacay.',
          'SOPORTE DE HIDRATACIÓN Y BARRERA: sella la humedad sin pesadez y promueve una textura suave y lujosa. El aceite de semilla de meadowfoam agrega una sensación aterciopelada y de rápida absorción. Se combina bien con ácido hialurónico; aplicar 2-3 gotas en piel ligeramente húmeda, luego hidratante o SPF. Diseñado para piel seca, madura, sensible y combinada.',
          'CUIDADO CAPILAR Y DEL CUERO CABELLUDO: usa 1-2 gotas en las puntas para combatir la sequedad, el encrespamiento y los pelos sueltos; agrega brillo sin acumulación. Como aceite del cuero cabelludo, masajea antes del lavado para nutrir y confortar; enjuaga bien. Funciona como suero capilar, aceite de acabado o mezcla con acondicionadores sin enjuague para cabello brillante y suave.',
          'FÓRMULA SUPER BELLEZA LIMPIA: vegana, no transgénica, libre de crueldad animal; elaborada sin fragancia añadida, alcohol, siliconas, aceite mineral, parabenos, ftalatos o sulfatos. Naturalmente perfumada por los aceites mismos, sutil y reconfortante para el uso diario.',
          'VIDRIO AZUL UV + gotero de precisión: botella reciclable premium que bloquea los rayos UV ayuda a proteger los delicados aceites de plantas de la luz para preservar la frescura y potencia, apoyando la vida útil versus vidrio estándar. Diseñado para recargas o reutilización para ayudar a reducir residuos.',
        ],
        ingredients: 'Aceite de Semilla de Adansonia Digitata (Baobab), Aceite de Semilla de Caryodendron Orinocense (Cacay)',
        usage: 'Para la cara: Aplicar 2-3 gotas en piel limpia, idealmente por la noche. Para el cabello: Frotar algunas gotas entre las palmas y deslizar sobre las puntas y largos. También puede usarse como aceite corporal nutritivo.',
        sensory: 'Viscosidad ligera a media con una sensación aterciopelada. Aroma natural suave (baobab casi inodoro con nota de nuez suave, cacay con aroma sutil de madera-nuez). Se absorbe fácilmente sin sensación grasosa.',
        shopButton: 'Comprar en Amazon',
      },
    },
    
    // Acerca de la Marca
    about: {
      title: 'Acerca de Valianė',
      subtitle: 'Donde la Naturaleza se Encuentra con el Lujo',
      mission: 'Nuestra misión es ofrecer soluciones de cuidado de la piel sin esfuerzo, efectivas y elegantes a una base de clientes exigente.',
      tagline: 'Nacida de la conexión, inspirada por la pureza, construida con intención',
      values: {
        title: 'Nuestros Valores',
        cleanBeauty: 'Belleza Limpia: 100% vegana, sin parabenos y formulada naturalmente con ingredientes botánicos premium',
        luxuryNatural: 'Lujo Natural: Estética refinada combinada con ingredientes auténticos y de origen natural',
        intention: 'Construida con Intención: Cada producto está elaborado para inspirar un enfoque ritual y consciente del autocuidado',
      },
      brandEssence: 'Valianė es una marca de belleza premium especializada en aceites de cuidado de la piel multiusos que equilibran la pureza natural y el lujo moderno. La esencia de nuestra marca se define por una mezcla armoniosa de autenticidad natural y lujo refinado.',
      story: 'Fundada en 2024 bajo DuoTwins LLC, Valianė surgió de una visión de crear un "ritual de lujo minimalista nacido de la naturaleza". Creemos que la belleza debe honrar tu brillo natural en lugar de ocultarlo, combinando botánicos ricos en nutrientes con estándares de diseño premium.',
    },
    
    // Pie de página
    footer: {
      company: 'Empresa',
      contact: 'Contacto',
      legal: 'Legal',
      followUs: 'Síguenos',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      copyright: '© 2025 DuoTwins LLC. Todos los derechos reservados.',
      email: 'Correo Electrónico',
      address: 'Dirección',
    },
    
    // Admin
    admin: {
      title: 'Panel de Administración',
      products: 'Productos',
      settings: 'Configuración',
      logout: 'Cerrar Sesión',
      edit: 'Editar',
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      add: 'Agregar',
    },
    
    // Común
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      language: 'Idioma',
    },
  },
} as const;

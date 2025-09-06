import { Product } from '../types';

export const products: Product[] = [
  {
    id: "1",
    name: "Sérum Vitamina C Brillante",
    brand: "Luka Natural",
    price: 89000,
    originalPrice: 110000,
    category: "facial",
    subcategory: "serums",
    images: [
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4041394/pexels-photo-4041394.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Nuestro sérum insignia con 20% de vitamina C estabilizada y ácido hialurónico. Ilumina y unifica el tono de la piel mientras proporciona una hidratación profunda.",
    keyIngredients: ["Vitamina C 20%", "Ácido Hialurónico", "Vitamina E", "Extracto de Rosa Mosqueta"],
    allIngredients: ["Aqua", "Sodium Ascorbyl Phosphate", "Hyaluronic Acid", "Tocopherol", "Rosa Canina Fruit Extract", "Glycerin", "Phenoxyethanol"],
    skinConcerns: ["Manchas", "Opacidad", "Líneas de expresión"],
    skinTypes: ["Normal", "Mixta", "Grasa"],
    attributes: ["Vegano", "Libre de crueldad", "Sin parabenos"],
    rating: 4.8,
    reviewCount: 234,
    isNew: false,
    isBestSeller: true,
    howToUse: {
      morning: "Aplica 2-3 gotas sobre el rostro limpio. Masajea suavemente hasta absorción completa. Siempre usar protector solar.",
      evening: "Aplica 2-3 gotas después del limpiador y antes de la hidratante nocturna."
    }
  },
  {
    id: "2",
    name: "Limpiador Facial Suave",
    brand: "Luka Natural",
    price: 65000,
    category: "facial",
    subcategory: "limpiadores",
    images: [
      "https://images.pexels.com/photos/4041413/pexels-photo-4041413.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4041411/pexels-photo-4041411.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Gel limpiador suave con extractos botánicos que elimina impurezas sin resecar la piel. Perfecto para uso diario.",
    keyIngredients: ["Extracto de Manzanilla", "Aloe Vera", "Glucósidos Suaves", "Extracto de Té Verde"],
    allIngredients: ["Aqua", "Coco Glucoside", "Chamomilla Recutita Extract", "Aloe Barbadensis Leaf Juice", "Camellia Sinensis Extract", "Glycerin", "Citric Acid"],
    skinConcerns: ["Sensibilidad", "Sequedad"],
    skinTypes: ["Sensible", "Seca", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Sin sulfatos"],
    rating: 4.6,
    reviewCount: 189,
    howToUse: {
      general: "Aplicar sobre el rostro húmedo, masajear suavemente y enjuagar con agua tibia. Usar mañana y noche."
    }
  },
  {
    id: "3",
    name: "Hidratante Anti-Edad",
    brand: "Luka Natural",
    price: 125000,
    category: "facial",
    subcategory: "hidratantes",
    images: [
      "https://images.pexels.com/photos/4041421/pexels-photo-4041421.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema hidratante con péptidos naturales y extractos botánicos que ayuda a reducir las líneas de expresión mientras nutre profundamente.",
    keyIngredients: ["Péptidos Vegetales", "Aceite de Jojoba", "Extracto de Bakuchiol", "Ceramidas"],
    allIngredients: ["Aqua", "Simmondsia Chinensis Oil", "Psoralea Corylifolia Seed Extract", "Palmitoyl Pentapeptide-4", "Ceramide NP", "Glycerin", "Tocopherol"],
    skinConcerns: ["Líneas de expresión", "Sequedad", "Pérdida de firmeza"],
    skinTypes: ["Normal", "Seca", "Mixta"],
    attributes: ["Vegano", "Libre de crueldad", "Ecológico"],
    rating: 4.9,
    reviewCount: 156,
    isNew: true,
    howToUse: {
      morning: "Aplicar sobre el rostro limpio después del sérum. Masajear hasta absorción.",
      evening: "Aplicar como último paso de la rutina nocturna para nutrición profunda."
    }
  },
  {
    id: "4",
    name: "Exfoliante Enzimático",
    brand: "Luka Natural",
    price: 78000,
    category: "facial",
    subcategory: "exfoliantes",
    images: [
      "https://images.pexels.com/photos/4041426/pexels-photo-4041426.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Mascarilla exfoliante suave con enzimas de papaya y piña que renueva la piel sin irritación.",
    keyIngredients: ["Enzimas de Papaya", "Enzimas de Piña", "Extracto de Calabaza", "Ácido Láctico"],
    allIngredients: ["Papain", "Bromelain", "Cucurbita Pepo Fruit Extract", "Lactic Acid", "Aqua", "Glycerin", "Xanthan Gum"],
    skinConcerns: ["Textura irregular", "Poros dilatados", "Opacidad"],
    skinTypes: ["Normal", "Mixta", "Grasa"],
    attributes: ["Vegano", "Libre de crueldad", "Sin microplásticos"],
    rating: 4.7,
    reviewCount: 98,
    howToUse: {
      general: "Aplicar 1-2 veces por semana sobre rostro limpio y seco. Dejar actuar 10-15 minutos y enjuagar."
    }
  },
  {
    id: "5",
    name: "Base Natural Cobertura Media",
    brand: "Luka Natural",
    price: 95000,
    category: "maquillaje",
    subcategory: "base",
    images: [
      "https://images.pexels.com/photos/4041433/pexels-photo-4041433.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Base líquida con ingredientes naturales que proporciona cobertura natural y un acabado saludable.",
    keyIngredients: ["Extracto de Bambú", "Aceite de Argán", "Óxidos Minerales", "Vitamina E"],
    allIngredients: ["Aqua", "Bambusa Arundinacea Stem Extract", "Argania Spinosa Kernel Oil", "Iron Oxides", "Tocopherol", "Cyclopentasiloxane"],
    skinConcerns: ["Unificar tono", "Hidratación"],
    skinTypes: ["Normal", "Seca", "Sensible"],
    attributes: ["Vegano", "Libre de crueldad", "Sin parabenos"],
    rating: 4.5,
    reviewCount: 67,
    howToUse: {
      general: "Aplicar con brocha o esponja húmeda desde el centro del rostro hacia afuera. Difuminar bien."
    }
  },
  {
    id: "6",
    name: "Aceite Corporal Nutritivo",
    brand: "Luka Natural",
    price: 72000,
    category: "corporal",
    subcategory: "hidratantes",
    images: [
      "https://images.pexels.com/photos/4041437/pexels-photo-4041437.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Blend de aceites naturales que nutre intensamente la piel corporal, ideal para después del baño.",
    keyIngredients: ["Aceite de Coco", "Aceite de Almendras", "Aceite de Rosa Mosqueta", "Vitamina E"],
    allIngredients: ["Cocos Nucifera Oil", "Prunus Amygdalus Dulcis Oil", "Rosa Canina Fruit Oil", "Tocopherol", "Parfum Natural"],
    skinConcerns: ["Sequedad", "Estrías", "Piel áspera"],
    skinTypes: ["Seca", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Ecológico"],
    rating: 4.4,
    reviewCount: 89,
    howToUse: {
      general: "Aplicar sobre piel húmeda después del baño. Masajear hasta absorción completa."
    }
  },
  {
    id: "7",
    name: "Sérum Niacinamida Purificante",
    brand: "Luka Natural",
    price: 82000,
    category: "facial",
    subcategory: "serums",
    images: [
      "https://images.pexels.com/photos/4041400/pexels-photo-4041400.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Sérum con 10% de niacinamida que minimiza poros y controla la producción de grasa.",
    keyIngredients: ["Niacinamida 10%", "Zinc PCA", "Extracto de Té Verde", "Ácido Salicílico"],
    allIngredients: ["Aqua", "Niacinamide", "Zinc PCA", "Camellia Sinensis Extract", "Salicylic Acid", "Glycerin", "Phenoxyethanol"],
    skinConcerns: ["Poros dilatados", "Grasa excesiva", "Textura irregular"],
    skinTypes: ["Grasa", "Mixta", "Acneica"],
    attributes: ["Vegano", "Libre de crueldad", "Sin parabenos"],
    rating: 4.6,
    reviewCount: 145,
    isBestSeller: true,
    howToUse: {
      morning: "Aplicar 2-3 gotas después del limpiador. Usar protector solar.",
      evening: "Aplicar antes de la hidratante nocturna."
    }
  },
  {
    id: "8",
    name: "Mascarilla Hidratante Intensiva",
    brand: "Luka Natural",
    price: 68000,
    category: "facial",
    subcategory: "mascarillas",
    images: [
      "https://images.pexels.com/photos/4041408/pexels-photo-4041408.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Mascarilla de hidrogel con ácido hialurónico y extractos marinos para hidratación profunda.",
    keyIngredients: ["Ácido Hialurónico", "Algas Marinas", "Colágeno Vegetal", "Extracto de Pepino"],
    allIngredients: ["Aqua", "Hyaluronic Acid", "Laminaria Digitata Extract", "Hydrolyzed Vegetable Protein", "Cucumis Sativus Extract", "Glycerin"],
    skinConcerns: ["Sequedad extrema", "Deshidratación", "Piel apagada"],
    skinTypes: ["Seca", "Normal", "Sensible"],
    attributes: ["Vegano", "Libre de crueldad", "Biodegradable"],
    rating: 4.8,
    reviewCount: 203,
    isNew: true,
    howToUse: {
      general: "Aplicar sobre rostro limpio, dejar actuar 15-20 minutos y retirar. Usar 2-3 veces por semana."
    }
  },
  {
    id: "9",
    name: "Tónico Equilibrante",
    brand: "Luka Natural",
    price: 58000,
    category: "facial",
    subcategory: "tonicos",
    images: [
      "https://images.pexels.com/photos/4041415/pexels-photo-4041415.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Tónico sin alcohol con agua de rosas y extractos botánicos que equilibra el pH de la piel.",
    keyIngredients: ["Agua de Rosas", "Extracto de Hamamelis", "Ácido Láctico", "Glicerina Vegetal"],
    allIngredients: ["Rosa Damascena Flower Water", "Hamamelis Virginiana Extract", "Lactic Acid", "Glycerin", "Aqua", "Phenoxyethanol"],
    skinConcerns: ["Desequilibrio del pH", "Poros dilatados", "Sensibilidad"],
    skinTypes: ["Todos los tipos", "Sensible"],
    attributes: ["Vegano", "Libre de crueldad", "Sin alcohol"],
    rating: 4.5,
    reviewCount: 167,
    howToUse: {
      general: "Aplicar con algodón después del limpiador, mañana y noche."
    }
  },
  {
    id: "10",
    name: "Protector Solar Mineral",
    brand: "Luka Natural",
    price: 95000,
    category: "facial",
    subcategory: "proteccion",
    images: [
      "https://images.pexels.com/photos/4041419/pexels-photo-4041419.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Protector solar FPS 50 con filtros minerales y antioxidantes naturales.",
    keyIngredients: ["Óxido de Zinc", "Dióxido de Titanio", "Vitamina E", "Extracto de Té Verde"],
    allIngredients: ["Zinc Oxide", "Titanium Dioxide", "Tocopherol", "Camellia Sinensis Extract", "Aqua", "Glycerin", "Caprylic/Capric Triglyceride"],
    skinConcerns: ["Protección UV", "Envejecimiento", "Manchas"],
    skinTypes: ["Todos los tipos", "Sensible"],
    attributes: ["Vegano", "Libre de crueldad", "Reef Safe"],
    rating: 4.7,
    reviewCount: 189,
    isBestSeller: true,
    howToUse: {
      morning: "Aplicar generosamente como último paso de la rutina matutina. Reaplicar cada 2 horas."
    }
  },
  {
    id: "11",
    name: "Corrector Natural",
    brand: "Luka Natural",
    price: 68000,
    category: "maquillaje",
    subcategory: "correctores",
    images: [
      "https://images.pexels.com/photos/4041430/pexels-photo-4041430.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Corrector cremoso con cobertura completa y ingredientes hidratantes.",
    keyIngredients: ["Aceite de Jojoba", "Vitamina E", "Extracto de Manzanilla", "Óxidos Minerales"],
    allIngredients: ["Simmondsia Chinensis Oil", "Tocopherol", "Chamomilla Recutita Extract", "Iron Oxides", "Mica", "Candelilla Wax"],
    skinConcerns: ["Ojeras", "Imperfecciones", "Enrojecimiento"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Larga duración"],
    rating: 4.4,
    reviewCount: 98,
    howToUse: {
      general: "Aplicar con pincel o dedo sobre las áreas a corregir. Difuminar suavemente."
    }
  },
  {
    id: "12",
    name: "Labial Hidratante Natural",
    brand: "Luka Natural",
    price: 45000,
    category: "maquillaje",
    subcategory: "labiales",
    images: [
      "https://images.pexels.com/photos/4041435/pexels-photo-4041435.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Labial con color natural y propiedades hidratantes que cuida tus labios.",
    keyIngredients: ["Manteca de Karité", "Aceite de Coco", "Cera de Candelilla", "Vitamina E"],
    allIngredients: ["Butyrospermum Parkii Butter", "Cocos Nucifera Oil", "Euphorbia Cerifera Wax", "Tocopherol", "Natural Pigments"],
    skinConcerns: ["Labios secos", "Falta de color", "Descamación"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Sin plomo"],
    rating: 4.6,
    reviewCount: 234,
    isNew: true,
    howToUse: {
      general: "Aplicar directamente sobre los labios. Reaplicar según necesidad."
    }
  },
  {
    id: "13",
    name: "Rubor Natural Cremoso",
    brand: "Luka Natural",
    price: 72000,
    category: "maquillaje",
    subcategory: "rubor",
    images: [
      "https://images.pexels.com/photos/4041438/pexels-photo-4041438.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Rubor cremoso con pigmentos naturales que se difumina perfectamente.",
    keyIngredients: ["Aceite de Argán", "Pigmentos Minerales", "Vitamina E", "Cera de Abejas"],
    allIngredients: ["Argania Spinosa Kernel Oil", "Iron Oxides", "Tocopherol", "Beeswax", "Mica", "Caprylic/Capric Triglyceride"],
    skinConcerns: ["Falta de color", "Aspecto cansado"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Buildable"],
    rating: 4.5,
    reviewCount: 156,
    howToUse: {
      general: "Aplicar con los dedos o brocha sobre las mejillas. Difuminar hacia las sienes."
    }
  },
  {
    id: "14",
    name: "Máscara de Pestañas Natural",
    brand: "Luka Natural",
    price: 85000,
    category: "maquillaje",
    subcategory: "ojos",
    images: [
      "https://images.pexels.com/photos/4041440/pexels-photo-4041440.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Máscara que alarga y da volumen con ingredientes naturales que cuidan las pestañas.",
    keyIngredients: ["Cera de Carnauba", "Aceite de Ricino", "Vitamina E", "Extracto de Bambú"],
    allIngredients: ["Copernicia Cerifera Wax", "Ricinus Communis Oil", "Tocopherol", "Bambusa Arundinacea Extract", "Iron Oxides", "Aqua"],
    skinConcerns: ["Pestañas cortas", "Falta de volumen", "Pestañas débiles"],
    skinTypes: ["Todos los tipos", "Ojos sensibles"],
    attributes: ["Vegano", "Libre de crueldad", "Resistente al agua"],
    rating: 4.7,
    reviewCount: 189,
    isBestSeller: true,
    howToUse: {
      general: "Aplicar desde la raíz hasta las puntas con movimientos zigzag. Aplicar capas adicionales si se desea."
    }
  },
  {
    id: "15",
    name: "Crema Corporal Regeneradora",
    brand: "Luka Natural",
    price: 78000,
    category: "corporal",
    subcategory: "hidratantes",
    images: [
      "https://images.pexels.com/photos/4041442/pexels-photo-4041442.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema corporal rica en mantecas naturales que regenera y suaviza la piel.",
    keyIngredients: ["Manteca de Karité", "Manteca de Cacao", "Aceite de Almendras", "Vitamina E"],
    allIngredients: ["Butyrospermum Parkii Butter", "Theobroma Cacao Seed Butter", "Prunus Amygdalus Dulcis Oil", "Tocopherol", "Aqua", "Glycerin"],
    skinConcerns: ["Piel muy seca", "Aspereza", "Descamación"],
    skinTypes: ["Seca", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Absorción rápida"],
    rating: 4.8,
    reviewCount: 267,
    howToUse: {
      general: "Aplicar sobre piel limpia con masajes circulares hasta absorción completa."
    }
  },
  {
    id: "16",
    name: "Exfoliante Corporal Azúcar",
    brand: "Luka Natural",
    price: 65000,
    category: "corporal",
    subcategory: "exfoliantes",
    images: [
      "https://images.pexels.com/photos/4041444/pexels-photo-4041444.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Exfoliante corporal con azúcar morena y aceites esenciales que renueva la piel.",
    keyIngredients: ["Azúcar Morena", "Aceite de Coco", "Aceite de Lavanda", "Vitamina E"],
    allIngredients: ["Sucrose", "Cocos Nucifera Oil", "Lavandula Angustifolia Oil", "Tocopherol", "Natural Fragrance"],
    skinConcerns: ["Piel áspera", "Células muertas", "Falta de suavidad"],
    skinTypes: ["Normal", "Grasa"],
    attributes: ["Vegano", "Libre de crueldad", "Aromático"],
    rating: 4.6,
    reviewCount: 145,
    isNew: true,
    howToUse: {
      general: "Aplicar sobre piel húmeda con movimientos circulares. Enjuagar con agua tibia. Usar 2-3 veces por semana."
    }
  },
  {
    id: "17",
    name: "Desodorante Natural",
    brand: "Luka Natural",
    price: 48000,
    category: "corporal",
    subcategory: "desodorantes",
    images: [
      "https://images.pexels.com/photos/4041446/pexels-photo-4041446.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Desodorante natural sin aluminio con bicarbonato y aceites esenciales.",
    keyIngredients: ["Bicarbonato de Sodio", "Aceite de Coco", "Manteca de Karité", "Aceite de Tea Tree"],
    allIngredients: ["Sodium Bicarbonate", "Cocos Nucifera Oil", "Butyrospermum Parkii Butter", "Melaleuca Alternifolia Oil", "Cornstarch", "Beeswax"],
    skinConcerns: ["Sudoración", "Olor corporal", "Sensibilidad a químicos"],
    skinTypes: ["Todos los tipos", "Sensible"],
    attributes: ["Vegano", "Libre de crueldad", "Sin aluminio"],
    rating: 4.3,
    reviewCount: 198,
    howToUse: {
      general: "Aplicar sobre piel limpia y seca. Dejar absorber antes de vestirse."
    }
  },
  {
    id: "18",
    name: "Gel de Ducha Nutritivo",
    brand: "Luka Natural",
    price: 52000,
    category: "corporal",
    subcategory: "limpiadores",
    images: [
      "https://images.pexels.com/photos/4041448/pexels-photo-4041448.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Gel de ducha suave con glicerina vegetal y extractos naturales que no reseca la piel.",
    keyIngredients: ["Glicerina Vegetal", "Extracto de Avena", "Aceite de Almendras", "Aloe Vera"],
    allIngredients: ["Aqua", "Glycerin", "Avena Sativa Extract", "Prunus Amygdalus Dulcis Oil", "Aloe Barbadensis Leaf Juice", "Coco Glucoside"],
    skinConcerns: ["Piel seca", "Sensibilidad", "Irritación"],
    skinTypes: ["Seca", "Sensible", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Sin sulfatos"],
    rating: 4.5,
    reviewCount: 234,
    howToUse: {
      general: "Aplicar sobre piel húmeda, hacer espuma y enjuagar abundantemente."
    }
  },
  {
    id: "19",
    name: "Kit Rutina Facial Básica",
    brand: "Luka Natural",
    price: 185000,
    originalPrice: 220000,
    category: "kits",
    subcategory: "facial",
    images: [
      "https://images.pexels.com/photos/4041450/pexels-photo-4041450.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Kit completo con limpiador, tónico, sérum y hidratante para una rutina facial básica.",
    keyIngredients: ["Múltiples ingredientes activos", "Extractos botánicos", "Vitaminas", "Antioxidantes"],
    allIngredients: ["Ver productos individuales incluidos en el kit"],
    skinConcerns: ["Rutina completa", "Cuidado diario", "Hidratación"],
    skinTypes: ["Normal", "Mixta"],
    attributes: ["Vegano", "Libre de crueldad", "Kit completo"],
    rating: 4.9,
    reviewCount: 89,
    isBestSeller: true,
    howToUse: {
      general: "Seguir el orden: limpiador, tónico, sérum, hidratante. Mañana y noche."
    }
  },
  {
    id: "20",
    name: "Kit Anti-Edad Premium",
    brand: "Luka Natural",
    price: 285000,
    originalPrice: 340000,
    category: "kits",
    subcategory: "antiedad",
    images: [
      "https://images.pexels.com/photos/4041452/pexels-photo-4041452.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Kit premium con productos especializados para combatir los signos del envejecimiento.",
    keyIngredients: ["Retinol", "Péptidos", "Vitamina C", "Ácido Hialurónico"],
    allIngredients: ["Ver productos individuales incluidos en el kit"],
    skinConcerns: ["Líneas de expresión", "Pérdida de firmeza", "Manchas"],
    skinTypes: ["Normal", "Seca", "Madura"],
    attributes: ["Vegano", "Libre de crueldad", "Resultados visibles"],
    rating: 4.8,
    reviewCount: 156,
    isNew: true,
    howToUse: {
      general: "Usar según instrucciones de cada producto. Introducir gradualmente en la rutina."
    }
  },
  // Continuando con más productos...
  {
    id: "21",
    name: "Sérum Retinol Renovador",
    brand: "Luka Natural",
    price: 145000,
    category: "facial",
    subcategory: "serums",
    images: [
      "https://images.pexels.com/photos/4041454/pexels-photo-4041454.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Sérum con retinol encapsulado que estimula la renovación celular sin irritación.",
    keyIngredients: ["Retinol Encapsulado", "Escualano", "Vitamina E", "Extracto de Centella"],
    allIngredients: ["Retinol", "Squalane", "Tocopherol", "Centella Asiatica Extract", "Aqua", "Glycerin", "Phenoxyethanol"],
    skinConcerns: ["Líneas de expresión", "Textura irregular", "Falta de luminosidad"],
    skinTypes: ["Normal", "Mixta", "Madura"],
    attributes: ["Vegano", "Libre de crueldad", "Liberación gradual"],
    rating: 4.7,
    reviewCount: 178,
    isBestSeller: true,
    howToUse: {
      evening: "Aplicar 2-3 gotas por la noche después del limpiador. Comenzar 2 veces por semana."
    }
  },
  {
    id: "22",
    name: "Contorno de Ojos Iluminador",
    brand: "Luka Natural",
    price: 98000,
    category: "facial",
    subcategory: "contorno",
    images: [
      "https://images.pexels.com/photos/4041456/pexels-photo-4041456.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Contorno de ojos con cafeína y péptidos que reduce ojeras y líneas de expresión.",
    keyIngredients: ["Cafeína", "Péptidos", "Ácido Hialurónico", "Extracto de Pepino"],
    allIngredients: ["Caffeine", "Palmitoyl Pentapeptide-4", "Hyaluronic Acid", "Cucumis Sativus Extract", "Aqua", "Glycerin"],
    skinConcerns: ["Ojeras", "Bolsas", "Líneas de expresión"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Efecto inmediato"],
    rating: 4.6,
    reviewCount: 234,
    howToUse: {
      general: "Aplicar con pequeños toques alrededor del contorno de ojos, mañana y noche."
    }
  },
  {
    id: "23",
    name: "Mascarilla Purificante Arcilla",
    brand: "Luka Natural",
    price: 72000,
    category: "facial",
    subcategory: "mascarillas",
    images: [
      "https://images.pexels.com/photos/4041458/pexels-photo-4041458.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Mascarilla con arcilla bentonita y carbón activado que purifica profundamente los poros.",
    keyIngredients: ["Arcilla Bentonita", "Carbón Activado", "Extracto de Tea Tree", "Aloe Vera"],
    allIngredients: ["Bentonite", "Charcoal Powder", "Melaleuca Alternifolia Extract", "Aloe Barbadensis Leaf Juice", "Aqua", "Glycerin"],
    skinConcerns: ["Poros obstruidos", "Grasa excesiva", "Puntos negros"],
    skinTypes: ["Grasa", "Mixta", "Acneica"],
    attributes: ["Vegano", "Libre de crueldad", "Detox"],
    rating: 4.5,
    reviewCount: 189,
    howToUse: {
      general: "Aplicar capa uniforme, evitar contorno de ojos. Dejar 10-15 minutos y enjuagar. Usar 1-2 veces por semana."
    }
  },
  {
    id: "24",
    name: "Aceite Facial Nutritivo",
    brand: "Luka Natural",
    price: 125000,
    category: "facial",
    subcategory: "aceites",
    images: [
      "https://images.pexels.com/photos/4041460/pexels-photo-4041460.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Blend de aceites preciosos que nutre intensamente y restaura la barrera cutánea.",
    keyIngredients: ["Aceite de Rosa Mosqueta", "Aceite de Argán", "Aceite de Jojoba", "Vitamina E"],
    allIngredients: ["Rosa Canina Fruit Oil", "Argania Spinosa Kernel Oil", "Simmondsia Chinensis Oil", "Tocopherol"],
    skinConcerns: ["Sequedad extrema", "Pérdida de elasticidad", "Cicatrices"],
    skinTypes: ["Seca", "Normal", "Madura"],
    attributes: ["Vegano", "Libre de crueldad", "Prensado en frío"],
    rating: 4.8,
    reviewCount: 145,
    isNew: true,
    howToUse: {
      evening: "Aplicar 3-4 gotas sobre rostro limpio por la noche. Masajear suavemente."
    }
  },
  {
    id: "25",
    name: "Bruma Facial Hidratante",
    brand: "Luka Natural",
    price: 58000,
    category: "facial",
    subcategory: "brumas",
    images: [
      "https://images.pexels.com/photos/4041462/pexels-photo-4041462.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Bruma refrescante con agua termal y extractos botánicos para hidratación instantánea.",
    keyIngredients: ["Agua Termal", "Extracto de Rosa", "Ácido Hialurónico", "Glicerina"],
    allIngredients: ["Thermal Water", "Rosa Damascena Extract", "Hyaluronic Acid", "Glycerin", "Aqua", "Phenoxyethanol"],
    skinConcerns: ["Deshidratación", "Piel cansada", "Falta de frescura"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Portátil"],
    rating: 4.4,
    reviewCount: 267,
    howToUse: {
      general: "Pulverizar sobre rostro limpio o sobre el maquillaje. Usar cuando sea necesario."
    }
  },
  {
    id: "26",
    name: "Polvo Compacto Natural",
    brand: "Luka Natural",
    price: 85000,
    category: "maquillaje",
    subcategory: "polvos",
    images: [
      "https://images.pexels.com/photos/4041464/pexels-photo-4041464.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Polvo compacto con minerales naturales que fija el maquillaje sin resecar.",
    keyIngredients: ["Minerales Naturales", "Sílice", "Vitamina E", "Extracto de Té Verde"],
    allIngredients: ["Mica", "Silica", "Tocopherol", "Camellia Sinensis Extract", "Iron Oxides", "Zinc Stearate"],
    skinConcerns: ["Brillo excesivo", "Fijación de maquillaje", "Poros visibles"],
    skinTypes: ["Grasa", "Mixta", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Larga duración"],
    rating: 4.5,
    reviewCount: 156,
    howToUse: {
      general: "Aplicar con brocha o esponja sobre la base para fijar. Retocar durante el día si es necesario."
    }
  },
  {
    id: "27",
    name: "Iluminador Natural",
    brand: "Luka Natural",
    price: 78000,
    category: "maquillaje",
    subcategory: "iluminadores",
    images: [
      "https://images.pexels.com/photos/4041466/pexels-photo-4041466.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Iluminador con partículas minerales que aporta luminosidad natural al rostro.",
    keyIngredients: ["Mica Natural", "Óxidos Minerales", "Aceite de Jojoba", "Vitamina E"],
    allIngredients: ["Mica", "Iron Oxides", "Simmondsia Chinensis Oil", "Tocopherol", "Titanium Dioxide"],
    skinConcerns: ["Falta de luminosidad", "Aspecto apagado", "Definición facial"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Buildable"],
    rating: 4.7,
    reviewCount: 198,
    isBestSeller: true,
    howToUse: {
      general: "Aplicar en pómulos, puente nasal, arco de cejas y mentón con brocha o dedos."
    }
  },
  {
    id: "28",
    name: "Sombras Naturales Paleta",
    brand: "Luka Natural",
    price: 125000,
    category: "maquillaje",
    subcategory: "ojos",
    images: [
      "https://images.pexels.com/photos/4041468/pexels-photo-4041468.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Paleta de 12 sombras con pigmentos naturales en tonos neutros y tierra.",
    keyIngredients: ["Pigmentos Minerales", "Mica", "Aceite de Argán", "Vitamina E"],
    allIngredients: ["Mica", "Iron Oxides", "Argania Spinosa Kernel Oil", "Tocopherol", "Titanium Dioxide", "Zinc Stearate"],
    skinConcerns: ["Definición de ojos", "Duración del maquillaje", "Pigmentación"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Altamente pigmentado"],
    rating: 4.8,
    reviewCount: 234,
    isNew: true,
    howToUse: {
      general: "Aplicar con brochas sobre párpados. Combinar tonos para crear diferentes looks."
    }
  },
  {
    id: "29",
    name: "Delineador Natural",
    brand: "Luka Natural",
    price: 65000,
    category: "maquillaje",
    subcategory: "ojos",
    images: [
      "https://images.pexels.com/photos/4041470/pexels-photo-4041470.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Delineador de ojos con fórmula cremosa y pigmentos naturales de larga duración.",
    keyIngredients: ["Ceras Vegetales", "Pigmentos Minerales", "Vitamina E", "Aceite de Jojoba"],
    allIngredients: ["Candelilla Wax", "Iron Oxides", "Tocopherol", "Simmondsia Chinensis Oil", "Mica"],
    skinConcerns: ["Definición de ojos", "Duración", "Precisión"],
    skinTypes: ["Todos los tipos", "Ojos sensibles"],
    attributes: ["Vegano", "Libre de crueldad", "Resistente al agua"],
    rating: 4.6,
    reviewCount: 167,
    howToUse: {
      general: "Aplicar desde el lagrimal hacia el exterior del ojo. Difuminar si se desea un look ahumado."
    }
  },
  {
    id: "30",
    name: "Bálsamo Labial Reparador",
    brand: "Luka Natural",
    price: 35000,
    category: "maquillaje",
    subcategory: "labiales",
    images: [
      "https://images.pexels.com/photos/4041472/pexels-photo-4041472.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Bálsamo labial intensivo que repara y protege los labios agrietados.",
    keyIngredients: ["Manteca de Karité", "Cera de Abejas", "Aceite de Coco", "Vitamina E"],
    allIngredients: ["Butyrospermum Parkii Butter", "Beeswax", "Cocos Nucifera Oil", "Tocopherol", "Natural Flavor"],
    skinConcerns: ["Labios secos", "Agrietamiento", "Descamación"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Reparador"],
    rating: 4.7,
    reviewCount: 345,
    howToUse: {
      general: "Aplicar sobre labios limpios cuantas veces sea necesario."
    }
  },
  {
    id: "31",
    name: "Loción Corporal Calmante",
    brand: "Luka Natural",
    price: 68000,
    category: "corporal",
    subcategory: "hidratantes",
    images: [
      "https://images.pexels.com/photos/4041474/pexels-photo-4041474.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Loción corporal con extracto de avena y manzanilla que calma la piel irritada.",
    keyIngredients: ["Extracto de Avena", "Manzanilla", "Aloe Vera", "Glicerina"],
    allIngredients: ["Avena Sativa Extract", "Chamomilla Recutita Extract", "Aloe Barbadensis Leaf Juice", "Glycerin", "Aqua", "Caprylic/Capric Triglyceride"],
    skinConcerns: ["Irritación", "Sensibilidad", "Sequedad"],
    skinTypes: ["Sensible", "Seca", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Hipoalergénico"],
    rating: 4.6,
    reviewCount: 189,
    howToUse: {
      general: "Aplicar sobre piel limpia con masajes suaves hasta absorción completa."
    }
  },
  {
    id: "32",
    name: "Aceite de Masaje Relajante",
    brand: "Luka Natural",
    price: 85000,
    category: "corporal",
    subcategory: "aceites",
    images: [
      "https://images.pexels.com/photos/4041476/pexels-photo-4041476.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Aceite de masaje con lavanda y bergamota que relaja y nutre la piel.",
    keyIngredients: ["Aceite de Almendras", "Aceite de Lavanda", "Aceite de Bergamota", "Vitamina E"],
    allIngredients: ["Prunus Amygdalus Dulcis Oil", "Lavandula Angustifolia Oil", "Citrus Bergamia Oil", "Tocopherol"],
    skinConcerns: ["Tensión muscular", "Estrés", "Piel seca"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Aromático"],
    rating: 4.8,
    reviewCount: 156,
    isNew: true,
    howToUse: {
      general: "Aplicar sobre piel limpia con masajes circulares. Ideal para uso nocturno."
    }
  },
  {
    id: "33",
    name: "Jabón Natural Artesanal",
    brand: "Luka Natural",
    price: 28000,
    category: "corporal",
    subcategory: "limpiadores",
    images: [
      "https://images.pexels.com/photos/4041478/pexels-photo-4041478.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Jabón artesanal con aceite de oliva y extractos herbales que limpia sin resecar.",
    keyIngredients: ["Aceite de Oliva", "Manteca de Karité", "Extracto de Romero", "Glicerina"],
    allIngredients: ["Olea Europaea Oil", "Butyrospermum Parkii Butter", "Rosmarinus Officinalis Extract", "Glycerin", "Sodium Hydroxide"],
    skinConcerns: ["Sequedad", "Sensibilidad", "Limpieza suave"],
    skinTypes: ["Sensible", "Seca", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Artesanal"],
    rating: 4.5,
    reviewCount: 234,
    howToUse: {
      general: "Hacer espuma con agua y aplicar sobre piel húmeda. Enjuagar abundantemente."
    }
  },
  {
    id: "34",
    name: "Crema para Manos Intensiva",
    brand: "Luka Natural",
    price: 42000,
    category: "corporal",
    subcategory: "manos",
    images: [
      "https://images.pexels.com/photos/4041480/pexels-photo-4041480.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema para manos con urea y manteca de karité que repara manos muy secas.",
    keyIngredients: ["Urea", "Manteca de Karité", "Glicerina", "Vitamina E"],
    allIngredients: ["Urea", "Butyrospermum Parkii Butter", "Glycerin", "Tocopherol", "Aqua", "Cetyl Alcohol"],
    skinConcerns: ["Manos muy secas", "Agrietamiento", "Aspereza"],
    skinTypes: ["Seca", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Absorción rápida"],
    rating: 4.7,
    reviewCount: 298,
    howToUse: {
      general: "Aplicar sobre manos limpias y secas. Masajear hasta absorción. Usar cuantas veces sea necesario."
    }
  },
  {
    id: "35",
    name: "Bálsamo para Pies",
    brand: "Luka Natural",
    price: 55000,
    category: "corporal",
    subcategory: "pies",
    images: [
      "https://images.pexels.com/photos/4041482/pexels-photo-4041482.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Bálsamo reparador para pies con mentol y aceite de tea tree que refresca y suaviza.",
    keyIngredients: ["Mentol", "Aceite de Tea Tree", "Urea", "Manteca de Karité"],
    allIngredients: ["Menthol", "Melaleuca Alternifolia Oil", "Urea", "Butyrospermum Parkii Butter", "Aqua", "Glycerin"],
    skinConcerns: ["Pies secos", "Callosidades", "Cansancio"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Efecto refrescante"],
    rating: 4.6,
    reviewCount: 167,
    howToUse: {
      general: "Aplicar sobre pies limpios y secos, especialmente en talones y zonas ásperas. Masajear bien."
    }
  },
  {
    id: "36",
    name: "Kit Cuidado Corporal Completo",
    brand: "Luka Natural",
    price: 225000,
    originalPrice: 280000,
    category: "kits",
    subcategory: "corporal",
    images: [
      "https://images.pexels.com/photos/4041484/pexels-photo-4041484.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Kit completo para el cuidado corporal con gel de ducha, exfoliante, crema y aceite.",
    keyIngredients: ["Múltiples ingredientes activos", "Extractos naturales", "Aceites esenciales", "Vitaminas"],
    allIngredients: ["Ver productos individuales incluidos en el kit"],
    skinConcerns: ["Cuidado integral", "Hidratación", "Suavidad"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Kit completo"],
    rating: 4.8,
    reviewCount: 123,
    isBestSeller: true,
    howToUse: {
      general: "Usar productos según instrucciones individuales para una rutina corporal completa."
    }
  },
  {
    id: "37",
    name: "Kit Maquillaje Natural",
    brand: "Luka Natural",
    price: 285000,
    originalPrice: 350000,
    category: "kits",
    subcategory: "maquillaje",
    images: [
      "https://images.pexels.com/photos/4041486/pexels-photo-4041486.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Kit de maquillaje completo con base, corrector, rubor, labial y máscara de pestañas.",
    keyIngredients: ["Pigmentos minerales", "Aceites naturales", "Ceras vegetales", "Vitaminas"],
    allIngredients: ["Ver productos individuales incluidos en el kit"],
    skinConcerns: ["Look completo", "Cobertura natural", "Duración"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Look natural"],
    rating: 4.7,
    reviewCount: 189,
    isNew: true,
    howToUse: {
      general: "Aplicar productos en orden: base, corrector, rubor, labial y máscara."
    }
  },
  {
    id: "38",
    name: "Kit Regalo Spa en Casa",
    brand: "Luka Natural",
    price: 195000,
    originalPrice: 240000,
    category: "kits",
    subcategory: "spa",
    images: [
      "https://images.pexels.com/photos/4041488/pexels-photo-4041488.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Kit spa con mascarillas, exfoliante, aceite de masaje y vela aromática.",
    keyIngredients: ["Extractos relajantes", "Aceites esenciales", "Arcillas naturales", "Mantecas vegetales"],
    allIngredients: ["Ver productos individuales incluidos en el kit"],
    skinConcerns: ["Relajación", "Cuidado integral", "Experiencia spa"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Experiencia completa"],
    rating: 4.9,
    reviewCount: 145,
    howToUse: {
      general: "Crear ambiente relajante y usar productos según instrucciones para experiencia spa completa."
    }
  },
  {
    id: "39",
    name: "Sérum Bakuchiol Anti-Edad",
    brand: "Luka Natural",
    price: 135000,
    category: "facial",
    subcategory: "serums",
    images: [
      "https://images.pexels.com/photos/4041490/pexels-photo-4041490.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Sérum con bakuchiol, la alternativa natural al retinol que estimula la renovación celular.",
    keyIngredients: ["Bakuchiol", "Ácido Hialurónico", "Vitamina E", "Extracto de Ginseng"],
    allIngredients: ["Psoralea Corylifolia Seed Extract", "Hyaluronic Acid", "Tocopherol", "Panax Ginseng Extract", "Aqua", "Glycerin"],
    skinConcerns: ["Líneas de expresión", "Pérdida de firmeza", "Textura irregular"],
    skinTypes: ["Sensible", "Normal", "Madura"],
    attributes: ["Vegano", "Libre de crueldad", "Apto embarazo"],
    rating: 4.8,
    reviewCount: 167,
    isNew: true,
    howToUse: {
      general: "Aplicar 2-3 gotas mañana y noche después del limpiador."
    }
  },
  {
    id: "40",
    name: "Agua Micelar Natural",
    brand: "Luka Natural",
    price: 58000,
    category: "facial",
    subcategory: "limpiadores",
    images: [
      "https://images.pexels.com/photos/4041492/pexels-photo-4041492.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Agua micelar suave que limpia y desmaquilla sin necesidad de enjuague.",
    keyIngredients: ["Micelas Suaves", "Extracto de Pepino", "Agua de Rosas", "Glicerina"],
    allIngredients: ["Aqua", "Poloxamer 184", "Cucumis Sativus Extract", "Rosa Damascena Flower Water", "Glycerin", "Phenoxyethanol"],
    skinConcerns: ["Desmaquillado", "Limpieza suave", "Practicidad"],
    skinTypes: ["Todos los tipos", "Sensible"],
    attributes: ["Vegano", "Libre de crueldad", "Sin enjuague"],
    rating: 4.5,
    reviewCount: 234,
    howToUse: {
      general: "Aplicar con algodón sobre rostro y ojos. No requiere enjuague."
    }
  },
  // Continuando con productos 41-100...
  {
    id: "41",
    name: "Crema Hidratante Ligera",
    brand: "Luka Natural",
    price: 75000,
    category: "facial",
    subcategory: "hidratantes",
    images: [
      "https://images.pexels.com/photos/4041494/pexels-photo-4041494.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema hidratante de textura ligera ideal para pieles grasas y mixtas.",
    keyIngredients: ["Ácido Hialurónico", "Niacinamida", "Extracto de Té Verde", "Glicerina"],
    allIngredients: ["Hyaluronic Acid", "Niacinamide", "Camellia Sinensis Extract", "Glycerin", "Aqua", "Caprylic/Capric Triglyceride"],
    skinConcerns: ["Hidratación sin grasa", "Control de brillo", "Poros"],
    skinTypes: ["Grasa", "Mixta", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "No comedogénico"],
    rating: 4.6,
    reviewCount: 198,
    howToUse: {
      general: "Aplicar sobre rostro limpio mañana y noche."
    }
  },
  {
    id: "42",
    name: "Sérum Ácido Salicílico",
    brand: "Luka Natural",
    price: 88000,
    category: "facial",
    subcategory: "serums",
    images: [
      "https://images.pexels.com/photos/4041496/pexels-photo-4041496.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Sérum con ácido salicílico que desobstruye poros y previene imperfecciones.",
    keyIngredients: ["Ácido Salicílico 2%", "Niacinamida", "Extracto de Sauce", "Aloe Vera"],
    allIngredients: ["Salicylic Acid", "Niacinamide", "Salix Alba Bark Extract", "Aloe Barbadensis Leaf Juice", "Aqua", "Glycerin"],
    skinConcerns: ["Acné", "Puntos negros", "Poros obstruidos"],
    skinTypes: ["Grasa", "Mixta", "Acneica"],
    attributes: ["Vegano", "Libre de crueldad", "No comedogénico"],
    rating: 4.7,
    reviewCount: 156,
    isBestSeller: true,
    howToUse: {
      evening: "Aplicar por la noche después del limpiador. Comenzar 3 veces por semana."
    }
  },
  {
    id: "43",
    name: "Mascarilla Vitamina C",
    brand: "Luka Natural",
    price: 78000,
    category: "facial",
    subcategory: "mascarillas",
    images: [
      "https://images.pexels.com/photos/4041498/pexels-photo-4041498.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Mascarilla iluminadora con vitamina C que aporta luminosidad instantánea.",
    keyIngredients: ["Vitamina C", "Extracto de Naranja", "Ácido Hialurónico", "Glicerina"],
    allIngredients: ["Sodium Ascorbyl Phosphate", "Citrus Aurantium Dulcis Extract", "Hyaluronic Acid", "Glycerin", "Aqua", "Xanthan Gum"],
    skinConcerns: ["Opacidad", "Manchas", "Falta de luminosidad"],
    skinTypes: ["Normal", "Mixta", "Apagada"],
    attributes: ["Vegano", "Libre de crueldad", "Efecto inmediato"],
    rating: 4.6,
    reviewCount: 189,
    howToUse: {
      general: "Aplicar capa uniforme, dejar 15-20 minutos y enjuagar. Usar 2 veces por semana."
    }
  },
  {
    id: "44",
    name: "Aceite Limpiador Suave",
    brand: "Luka Natural",
    price: 85000,
    category: "facial",
    subcategory: "limpiadores",
    images: [
      "https://images.pexels.com/photos/4041500/pexels-photo-4041500.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Aceite limpiador que disuelve maquillaje y protector solar sin resecar.",
    keyIngredients: ["Aceite de Jojoba", "Aceite de Girasol", "Vitamina E", "Extracto de Manzanilla"],
    allIngredients: ["Simmondsia Chinensis Oil", "Helianthus Annuus Oil", "Tocopherol", "Chamomilla Recutita Extract"],
    skinConcerns: ["Desmaquillado profundo", "Limpieza suave", "Sequedad"],
    skinTypes: ["Seca", "Normal", "Sensible"],
    attributes: ["Vegano", "Libre de crueldad", "Doble limpieza"],
    rating: 4.8,
    reviewCount: 145,
    howToUse: {
      evening: "Masajear sobre piel seca, añadir agua tibia y enjuagar. Seguir con limpiador."
    }
  },
  {
    id: "45",
    name: "Crema Nocturna Reparadora",
    brand: "Luka Natural",
    price: 145000,
    category: "facial",
    subcategory: "hidratantes",
    images: [
      "https://images.pexels.com/photos/4041502/pexels-photo-4041502.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema nocturna rica que repara y regenera la piel durante el descanso.",
    keyIngredients: ["Péptidos", "Ceramidas", "Aceite de Rosa Mosqueta", "Vitamina E"],
    allIngredients: ["Palmitoyl Pentapeptide-4", "Ceramide NP", "Rosa Canina Fruit Oil", "Tocopherol", "Aqua", "Glycerin"],
    skinConcerns: ["Regeneración nocturna", "Líneas de expresión", "Sequedad"],
    skinTypes: ["Normal", "Seca", "Madura"],
    attributes: ["Vegano", "Libre de crueldad", "Textura rica"],
    rating: 4.9,
    reviewCount: 167,
    isNew: true,
    howToUse: {
      evening: "Aplicar sobre rostro limpio como último paso de la rutina nocturna."
    }
  },
  {
    id: "46",
    name: "Primer Natural",
    brand: "Luka Natural",
    price: 78000,
    category: "maquillaje",
    subcategory: "primers",
    images: [
      "https://images.pexels.com/photos/4041504/pexels-photo-4041504.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Primer con ingredientes naturales que prepara la piel para el maquillaje.",
    keyIngredients: ["Sílice Natural", "Extracto de Té Verde", "Vitamina E", "Glicerina"],
    allIngredients: ["Silica", "Camellia Sinensis Extract", "Tocopherol", "Glycerin", "Aqua", "Cyclopentasiloxane"],
    skinConcerns: ["Duración del maquillaje", "Textura de poros", "Preparación"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Base perfecta"],
    rating: 4.5,
    reviewCount: 134,
    howToUse: {
      general: "Aplicar sobre rostro limpio antes de la base. Dejar secar 1 minuto."
    }
  },
  {
    id: "47",
    name: "Gloss Labial Natural",
    brand: "Luka Natural",
    price: 52000,
    category: "maquillaje",
    subcategory: "labiales",
    images: [
      "https://images.pexels.com/photos/4041506/pexels-photo-4041506.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Gloss labial con brillo natural y propiedades hidratantes.",
    keyIngredients: ["Aceite de Coco", "Cera de Candelilla", "Vitamina E", "Extracto de Vainilla"],
    allIngredients: ["Cocos Nucifera Oil", "Euphorbia Cerifera Wax", "Tocopherol", "Vanilla Planifolia Extract", "Natural Pigments"],
    skinConcerns: ["Brillo natural", "Hidratación labial", "Color sutil"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "No pegajoso"],
    rating: 4.4,
    reviewCount: 198,
    howToUse: {
      general: "Aplicar sobre labios limpios o sobre labial para mayor brillo."
    }
  },
  {
    id: "48",
    name: "Bronceador Natural",
    brand: "Luka Natural",
    price: 88000,
    category: "maquillaje",
    subcategory: "bronceadores",
    images: [
      "https://images.pexels.com/photos/4041508/pexels-photo-4041508.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Bronceador con pigmentos minerales que aporta calidez natural al rostro.",
    keyIngredients: ["Óxidos Minerales", "Mica", "Aceite de Jojoba", "Vitamina E"],
    allIngredients: ["Iron Oxides", "Mica", "Simmondsia Chinensis Oil", "Tocopherol", "Zinc Stearate"],
    skinConcerns: ["Falta de calidez", "Palidez", "Definición facial"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Buildable"],
    rating: 4.6,
    reviewCount: 156,
    howToUse: {
      general: "Aplicar con brocha en frente, mejillas, nariz y mentón para efecto bronceado natural."
    }
  },
  {
    id: "49",
    name: "Fijador de Maquillaje",
    brand: "Luka Natural",
    price: 68000,
    category: "maquillaje",
    subcategory: "fijadores",
    images: [
      "https://images.pexels.com/photos/4041510/pexels-photo-4041510.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Spray fijador con extractos naturales que prolonga la duración del maquillaje.",
    keyIngredients: ["Extracto de Té Verde", "Glicerina", "Agua de Rosas", "Ácido Hialurónico"],
    allIngredients: ["Camellia Sinensis Extract", "Glycerin", "Rosa Damascena Flower Water", "Hyaluronic Acid", "Aqua", "Phenoxyethanol"],
    skinConcerns: ["Duración del maquillaje", "Hidratación", "Fijación"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Larga duración"],
    rating: 4.5,
    reviewCount: 189,
    howToUse: {
      general: "Pulverizar sobre el maquillaje terminado manteniendo 20cm de distancia."
    }
  },
  {
    id: "50",
    name: "Manteca Corporal Nutritiva",
    brand: "Luka Natural",
    price: 95000,
    category: "corporal",
    subcategory: "hidratantes",
    images: [
      "https://images.pexels.com/photos/4041512/pexels-photo-4041512.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Manteca corporal ultra nutritiva para pieles muy secas y ásperas.",
    keyIngredients: ["Manteca de Karité", "Manteca de Cacao", "Aceite de Coco", "Vitamina E"],
    allIngredients: ["Butyrospermum Parkii Butter", "Theobroma Cacao Seed Butter", "Cocos Nucifera Oil", "Tocopherol"],
    skinConcerns: ["Sequedad extrema", "Piel áspera", "Nutrición profunda"],
    skinTypes: ["Muy seca", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Textura rica"],
    rating: 4.8,
    reviewCount: 234,
    isBestSeller: true,
    howToUse: {
      general: "Aplicar sobre piel limpia con masajes hasta absorción. Ideal después del baño."
    }
  },
  // Continuando con más productos hasta llegar a 100...
  {
    id: "51",
    name: "Sérum Centella Calmante",
    brand: "Luka Natural",
    price: 92000,
    category: "facial",
    subcategory: "serums",
    images: [
      "https://images.pexels.com/photos/4041514/pexels-photo-4041514.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Sérum con centella asiática que calma la piel irritada y reduce el enrojecimiento.",
    keyIngredients: ["Centella Asiática", "Niacinamida", "Ácido Hialurónico", "Pantenol"],
    allIngredients: ["Centella Asiatica Extract", "Niacinamide", "Hyaluronic Acid", "Panthenol", "Aqua", "Glycerin"],
    skinConcerns: ["Irritación", "Enrojecimiento", "Sensibilidad"],
    skinTypes: ["Sensible", "Reactiva", "Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Calmante"],
    rating: 4.7,
    reviewCount: 178,
    howToUse: {
      general: "Aplicar 2-3 gotas sobre piel limpia mañana y noche."
    }
  },
  {
    id: "52",
    name: "Exfoliante Facial Suave",
    brand: "Luka Natural",
    price: 68000,
    category: "facial",
    subcategory: "exfoliantes",
    images: [
      "https://images.pexels.com/photos/4041516/pexels-photo-4041516.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Exfoliante facial con microperlas de jojoba que renueva suavemente la piel.",
    keyIngredients: ["Microperlas de Jojoba", "Extracto de Avena", "Aloe Vera", "Vitamina E"],
    allIngredients: ["Jojoba Esters", "Avena Sativa Extract", "Aloe Barbadensis Leaf Juice", "Tocopherol", "Aqua", "Glycerin"],
    skinConcerns: ["Textura irregular", "Células muertas", "Opacidad"],
    skinTypes: ["Normal", "Mixta", "Sensible"],
    attributes: ["Vegano", "Libre de crueldad", "Biodegradable"],
    rating: 4.5,
    reviewCount: 145,
    howToUse: {
      general: "Aplicar sobre rostro húmedo, masajear suavemente y enjuagar. Usar 2-3 veces por semana."
    }
  },
  {
    id: "53",
    name: "Crema Contorno Ojos",
    brand: "Luka Natural",
    price: 115000,
    category: "facial",
    subcategory: "contorno",
    images: [
      "https://images.pexels.com/photos/4041518/pexels-photo-4041518.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema específica para el contorno de ojos con péptidos y cafeína.",
    keyIngredients: ["Péptidos", "Cafeína", "Ácido Hialurónico", "Vitamina K"],
    allIngredients: ["Palmitoyl Pentapeptide-4", "Caffeine", "Hyaluronic Acid", "Phytonadione", "Aqua", "Glycerin"],
    skinConcerns: ["Ojeras", "Bolsas", "Líneas de expresión"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Oftalmológicamente testado"],
    rating: 4.8,
    reviewCount: 189,
    isNew: true,
    howToUse: {
      general: "Aplicar con pequeños toques alrededor del contorno de ojos mañana y noche."
    }
  },
  {
    id: "54",
    name: "Mascarilla Arcilla Verde",
    brand: "Luka Natural",
    price: 75000,
    category: "facial",
    subcategory: "mascarillas",
    images: [
      "https://images.pexels.com/photos/4041520/pexels-photo-4041520.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Mascarilla con arcilla verde francesa que purifica y matifica la piel grasa.",
    keyIngredients: ["Arcilla Verde", "Extracto de Menta", "Tea Tree", "Caolín"],
    allIngredients: ["Montmorillonite", "Mentha Piperita Extract", "Melaleuca Alternifolia Oil", "Kaolin", "Aqua", "Glycerin"],
    skinConcerns: ["Exceso de grasa", "Poros dilatados", "Impurezas"],
    skinTypes: ["Grasa", "Mixta", "Acneica"],
    attributes: ["Vegano", "Libre de crueldad", "Purificante"],
    rating: 4.6,
    reviewCount: 167,
    howToUse: {
      general: "Aplicar capa uniforme evitando contorno de ojos. Dejar 10-15 minutos y enjuagar."
    }
  },
  {
    id: "55",
    name: "Sérum Péptidos Firmeza",
    brand: "Luka Natural",
    price: 165000,
    category: "facial",
    subcategory: "serums",
    images: [
      "https://images.pexels.com/photos/4041522/pexels-photo-4041522.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Sérum con péptidos avanzados que mejora la firmeza y elasticidad de la piel.",
    keyIngredients: ["Péptidos Hexapéptidos", "Colágeno Vegetal", "Elastina Marina", "Vitamina C"],
    allIngredients: ["Acetyl Hexapeptide-8", "Hydrolyzed Vegetable Protein", "Hydrolyzed Elastin", "Sodium Ascorbyl Phosphate", "Aqua", "Glycerin"],
    skinConcerns: ["Pérdida de firmeza", "Flacidez", "Líneas profundas"],
    skinTypes: ["Madura", "Normal", "Seca"],
    attributes: ["Vegano", "Libre de crueldad", "Tecnología avanzada"],
    rating: 4.9,
    reviewCount: 123,
    isNew: true,
    howToUse: {
      general: "Aplicar 3-4 gotas mañana y noche después del limpiador."
    }
  },
  // Continuando hasta completar 100 productos...
  {
    id: "56",
    name: "Base Mineral Líquida",
    brand: "Luka Natural",
    price: 105000,
    category: "maquillaje",
    subcategory: "base",
    images: [
      "https://images.pexels.com/photos/4041524/pexels-photo-4041524.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Base mineral líquida con cobertura buildable y acabado natural.",
    keyIngredients: ["Minerales Puros", "Ácido Hialurónico", "Vitamina E", "Extracto de Té Verde"],
    allIngredients: ["Iron Oxides", "Hyaluronic Acid", "Tocopherol", "Camellia Sinensis Extract", "Aqua", "Cyclopentasiloxane"],
    skinConcerns: ["Cobertura natural", "Hidratación", "Duración"],
    skinTypes: ["Todos los tipos", "Sensible"],
    attributes: ["Vegano", "Libre de crueldad", "SPF 15"],
    rating: 4.7,
    reviewCount: 198,
    howToUse: {
      general: "Aplicar con brocha húmeda o esponja desde el centro hacia afuera."
    }
  },
  {
    id: "57",
    name: "Aceite Facial Nocturno",
    brand: "Luka Natural",
    price: 135000,
    category: "facial",
    subcategory: "aceites",
    images: [
      "https://images.pexels.com/photos/4041526/pexels-photo-4041526.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Aceite facial nocturno con retinol natural y aceites preciosos para regeneración.",
    keyIngredients: ["Aceite de Rosa Mosqueta", "Bakuchiol", "Aceite de Argán", "Vitamina E"],
    allIngredients: ["Rosa Canina Fruit Oil", "Psoralea Corylifolia Seed Extract", "Argania Spinosa Kernel Oil", "Tocopherol"],
    skinConcerns: ["Regeneración nocturna", "Sequedad", "Anti-edad"],
    skinTypes: ["Seca", "Normal", "Madura"],
    attributes: ["Vegano", "Libre de crueldad", "Prensado en frío"],
    rating: 4.8,
    reviewCount: 156,
    isBestSeller: true,
    howToUse: {
      evening: "Aplicar 3-5 gotas sobre rostro limpio como último paso nocturno."
    }
  },
  {
    id: "58",
    name: "Gel Limpiador Purificante",
    brand: "Luka Natural",
    price: 62000,
    category: "facial",
    subcategory: "limpiadores",
    images: [
      "https://images.pexels.com/photos/4041528/pexels-photo-4041528.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Gel limpiador con ácido salicílico que purifica sin resecar la piel grasa.",
    keyIngredients: ["Ácido Salicílico", "Tea Tree", "Extracto de Sauce", "Aloe Vera"],
    allIngredients: ["Salicylic Acid", "Melaleuca Alternifolia Oil", "Salix Alba Bark Extract", "Aloe Barbadensis Leaf Juice", "Aqua", "Coco Glucoside"],
    skinConcerns: ["Exceso de grasa", "Poros obstruidos", "Impurezas"],
    skinTypes: ["Grasa", "Mixta", "Acneica"],
    attributes: ["Vegano", "Libre de crueldad", "No comedogénico"],
    rating: 4.6,
    reviewCount: 234,
    howToUse: {
      general: "Aplicar sobre rostro húmedo, masajear y enjuagar. Usar mañana y noche."
    }
  },
  {
    id: "59",
    name: "Crema Solar Facial",
    brand: "Luka Natural",
    price: 88000,
    category: "facial",
    subcategory: "proteccion",
    images: [
      "https://images.pexels.com/photos/4041530/pexels-photo-4041530.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema solar facial FPS 30 con antioxidantes y textura no grasa.",
    keyIngredients: ["Filtros Minerales", "Vitamina C", "Extracto de Té Verde", "Niacinamida"],
    allIngredients: ["Zinc Oxide", "Titanium Dioxide", "Sodium Ascorbyl Phosphate", "Camellia Sinensis Extract", "Niacinamide", "Aqua"],
    skinConcerns: ["Protección UV", "Prevención manchas", "Antioxidación"],
    skinTypes: ["Todos los tipos", "Sensible"],
    attributes: ["Vegano", "Libre de crueldad", "Reef Safe"],
    rating: 4.7,
    reviewCount: 189,
    howToUse: {
      morning: "Aplicar generosamente 30 minutos antes de la exposición solar. Reaplicar cada 2 horas."
    }
  },
  {
    id: "60",
    name: "Mascarilla Oro 24K",
    brand: "Luka Natural",
    price: 185000,
    category: "facial",
    subcategory: "mascarillas",
    images: [
      "https://images.pexels.com/photos/4041532/pexels-photo-4041532.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Mascarilla premium con oro 24K y péptidos para un tratamiento de lujo.",
    keyIngredients: ["Oro 24K", "Péptidos", "Colágeno Marino", "Ácido Hialurónico"],
    allIngredients: ["Gold", "Palmitoyl Pentapeptide-4", "Hydrolyzed Marine Collagen", "Hyaluronic Acid", "Aqua", "Glycerin"],
    skinConcerns: ["Luminosidad", "Firmeza", "Tratamiento premium"],
    skinTypes: ["Todos los tipos", "Madura"],
    attributes: ["Vegano", "Libre de crueldad", "Lujo"],
    rating: 4.9,
    reviewCount: 89,
    isNew: true,
    howToUse: {
      general: "Aplicar capa generosa, dejar 20-30 minutos y retirar con agua tibia. Usar 1 vez por semana."
    }
  },
  // Continuando con productos 61-100 para completar el catálogo...
  {
    id: "61",
    name: "Tónico Exfoliante AHA",
    brand: "Luka Natural",
    price: 78000,
    category: "facial",
    subcategory: "tonicos",
    images: [
      "https://images.pexels.com/photos/4041534/pexels-photo-4041534.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Tónico con ácidos AHA que exfolia suavemente y mejora la textura de la piel.",
    keyIngredients: ["Ácido Glicólico", "Ácido Láctico", "Extracto de Caña de Azúcar", "Aloe Vera"],
    allIngredients: ["Glycolic Acid", "Lactic Acid", "Saccharum Officinarum Extract", "Aloe Barbadensis Leaf Juice", "Aqua", "Glycerin"],
    skinConcerns: ["Textura irregular", "Opacidad", "Poros"],
    skinTypes: ["Normal", "Mixta", "Grasa"],
    attributes: ["Vegano", "Libre de crueldad", "Renovador"],
    rating: 4.6,
    reviewCount: 167,
    howToUse: {
      evening: "Aplicar con algodón 3 veces por semana por la noche. Usar protector solar."
    }
  },
  {
    id: "62",
    name: "Sérum Vitamina E",
    brand: "Luka Natural",
    price: 85000,
    category: "facial",
    subcategory: "serums",
    images: [
      "https://images.pexels.com/photos/4041536/pexels-photo-4041536.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Sérum antioxidante con vitamina E que protege contra el daño ambiental.",
    keyIngredients: ["Vitamina E", "Escualano", "Extracto de Romero", "Vitamina C"],
    allIngredients: ["Tocopherol", "Squalane", "Rosmarinus Officinalis Extract", "Sodium Ascorbyl Phosphate", "Aqua", "Glycerin"],
    skinConcerns: ["Protección antioxidante", "Hidratación", "Prevención"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Antioxidante"],
    rating: 4.5,
    reviewCount: 145,
    howToUse: {
      general: "Aplicar 2-3 gotas mañana y noche después del limpiador."
    }
  },
  {
    id: "63",
    name: "Crema Hidratante Hombre",
    brand: "Luka Natural",
    price: 68000,
    category: "facial",
    subcategory: "hidratantes",
    images: [
      "https://images.pexels.com/photos/4041538/pexels-photo-4041538.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema hidratante específicamente formulada para la piel masculina.",
    keyIngredients: ["Ácido Hialurónico", "Cafeína", "Extracto de Bambú", "Mentol"],
    allIngredients: ["Hyaluronic Acid", "Caffeine", "Bambusa Arundinacea Extract", "Menthol", "Aqua", "Glycerin"],
    skinConcerns: ["Hidratación masculina", "Piel cansada", "After shave"],
    skinTypes: ["Todos los tipos", "Masculina"],
    attributes: ["Vegano", "Libre de crueldad", "Absorción rápida"],
    rating: 4.4,
    reviewCount: 198,
    howToUse: {
      general: "Aplicar sobre rostro limpio mañana y noche, especialmente después del afeitado."
    }
  },
  {
    id: "64",
    name: "Mascarilla Colágeno",
    brand: "Luka Natural",
    price: 95000,
    category: "facial",
    subcategory: "mascarillas",
    images: [
      "https://images.pexels.com/photos/4041540/pexels-photo-4041540.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Mascarilla de hidrogel con colágeno marino que reafirma y hidrata intensamente.",
    keyIngredients: ["Colágeno Marino", "Elastina", "Ácido Hialurónico", "Péptidos"],
    allIngredients: ["Hydrolyzed Marine Collagen", "Hydrolyzed Elastin", "Hyaluronic Acid", "Palmitoyl Pentapeptide-4", "Aqua", "Glycerin"],
    skinConcerns: ["Pérdida de firmeza", "Hidratación profunda", "Anti-edad"],
    skinTypes: ["Madura", "Seca", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Reafirmante"],
    rating: 4.8,
    reviewCount: 156,
    isBestSeller: true,
    howToUse: {
      general: "Aplicar sobre rostro limpio, dejar 20-25 minutos y retirar. Usar 2 veces por semana."
    }
  },
  {
    id: "65",
    name: "Aceite Corporal Reafirmante",
    brand: "Luka Natural",
    price: 95000,
    category: "corporal",
    subcategory: "aceites",
    images: [
      "https://images.pexels.com/photos/4041542/pexels-photo-4041542.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Aceite corporal con cafeína y extractos reafirmantes que mejora la elasticidad.",
    keyIngredients: ["Cafeína", "Aceite de Rosa Mosqueta", "Extracto de Centella", "Vitamina E"],
    allIngredients: ["Caffeine", "Rosa Canina Fruit Oil", "Centella Asiatica Extract", "Tocopherol", "Prunus Amygdalus Dulcis Oil"],
    skinConcerns: ["Flacidez", "Celulitis", "Pérdida de firmeza"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Reafirmante"],
    rating: 4.6,
    reviewCount: 189,
    howToUse: {
      general: "Aplicar con masajes circulares sobre piel limpia, especialmente en zonas problemáticas."
    }
  },
  // Continuando hasta completar los 100 productos...
  {
    id: "66",
    name: "Crema Antiestrías",
    brand: "Luka Natural",
    price: 85000,
    category: "corporal",
    subcategory: "tratamientos",
    images: [
      "https://images.pexels.com/photos/4041544/pexels-photo-4041544.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema especializada para prevenir y reducir la apariencia de estrías.",
    keyIngredients: ["Centella Asiática", "Aceite de Rosa Mosqueta", "Colágeno Vegetal", "Vitamina E"],
    allIngredients: ["Centella Asiatica Extract", "Rosa Canina Fruit Oil", "Hydrolyzed Vegetable Protein", "Tocopherol", "Aqua", "Glycerin"],
    skinConcerns: ["Estrías", "Elasticidad", "Cicatrización"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Embarazo seguro"],
    rating: 4.7,
    reviewCount: 234,
    howToUse: {
      general: "Aplicar 2 veces al día con masajes circulares en zonas propensas a estrías."
    }
  },
  {
    id: "67",
    name: "Gel Íntimo Natural",
    brand: "Luka Natural",
    price: 45000,
    category: "corporal",
    subcategory: "higiene",
    images: [
      "https://images.pexels.com/photos/4041546/pexels-photo-4041546.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Gel de higiene íntima con pH balanceado y extractos calmantes.",
    keyIngredients: ["Ácido Láctico", "Extracto de Manzanilla", "Aloe Vera", "Caléndula"],
    allIngredients: ["Lactic Acid", "Chamomilla Recutita Extract", "Aloe Barbadensis Leaf Juice", "Calendula Officinalis Extract", "Aqua", "Coco Glucoside"],
    skinConcerns: ["Higiene íntima", "Sensibilidad", "pH balanceado"],
    skinTypes: ["Sensible", "Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Ginecológicamente testado"],
    rating: 4.5,
    reviewCount: 167,
    howToUse: {
      general: "Aplicar sobre zona íntima húmeda, hacer espuma suave y enjuagar abundantemente."
    }
  },
  {
    id: "68",
    name: "Champú Seco Natural",
    brand: "Luka Natural",
    price: 52000,
    category: "corporal",
    subcategory: "cabello",
    images: [
      "https://images.pexels.com/photos/4041548/pexels-photo-4041548.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Champú seco con almidón de arroz que absorbe grasa y da volumen al cabello.",
    keyIngredients: ["Almidón de Arroz", "Arcilla Blanca", "Extracto de Ortiga", "Aceite de Romero"],
    allIngredients: ["Oryza Sativa Starch", "Kaolin", "Urtica Dioica Extract", "Rosmarinus Officinalis Oil", "Talc"],
    skinConcerns: ["Cabello graso", "Falta de volumen", "Practicidad"],
    skinTypes: ["Todos los tipos de cabello"],
    attributes: ["Vegano", "Libre de crueldad", "Sin sulfatos"],
    rating: 4.4,
    reviewCount: 145,
    howToUse: {
      general: "Pulverizar sobre raíces, masajear y cepillar para eliminar residuos."
    }
  },
  {
    id: "69",
    name: "Aceite Capilar Nutritivo",
    brand: "Luka Natural",
    price: 68000,
    category: "corporal",
    subcategory: "cabello",
    images: [
      "https://images.pexels.com/photos/4041550/pexels-photo-4041550.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Aceite capilar con argán y coco que nutre y da brillo al cabello.",
    keyIngredients: ["Aceite de Argán", "Aceite de Coco", "Aceite de Jojoba", "Vitamina E"],
    allIngredients: ["Argania Spinosa Kernel Oil", "Cocos Nucifera Oil", "Simmondsia Chinensis Oil", "Tocopherol"],
    skinConcerns: ["Cabello seco", "Falta de brillo", "Puntas abiertas"],
    skinTypes: ["Cabello seco", "Dañado"],
    attributes: ["Vegano", "Libre de crueldad", "Multiuso"],
    rating: 4.6,
    reviewCount: 198,
    howToUse: {
      general: "Aplicar sobre cabello húmedo o seco, especialmente en medios y puntas."
    }
  },
  {
    id: "70",
    name: "Kit Manicura Natural",
    brand: "Luka Natural",
    price: 125000,
    originalPrice: 155000,
    category: "kits",
    subcategory: "manos",
    images: [
      "https://images.pexels.com/photos/4041552/pexels-photo-4041552.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Kit completo para manicura con productos naturales y herramientas.",
    keyIngredients: ["Aceites naturales", "Extractos botánicos", "Vitaminas", "Minerales"],
    allIngredients: ["Ver productos individuales incluidos en el kit"],
    skinConcerns: ["Cuidado de uñas", "Hidratación manos", "Manicura completa"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Kit completo"],
    rating: 4.7,
    reviewCount: 123,
    howToUse: {
      general: "Seguir pasos del kit para manicura completa en casa."
    }
  },
  // Completando hasta 100 productos...
  {
    id: "71",
    name: "Sérum Despigmentante",
    brand: "Luka Natural",
    price: 145000,
    category: "facial",
    subcategory: "serums",
    images: [
      "https://images.pexels.com/photos/4041554/pexels-photo-4041554.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Sérum especializado para reducir manchas y unificar el tono de la piel.",
    keyIngredients: ["Arbutina", "Vitamina C", "Niacinamida", "Extracto de Regaliz"],
    allIngredients: ["Arbutin", "Sodium Ascorbyl Phosphate", "Niacinamide", "Glycyrrhiza Glabra Extract", "Aqua", "Glycerin"],
    skinConcerns: ["Manchas", "Hiperpigmentación", "Tono desigual"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Despigmentante"],
    rating: 4.8,
    reviewCount: 189,
    isNew: true,
    howToUse: {
      evening: "Aplicar por la noche sobre manchas específicas. Usar protector solar durante el día."
    }
  },
  {
    id: "72",
    name: "Crema BB Natural",
    brand: "Luka Natural",
    price: 88000,
    category: "maquillaje",
    subcategory: "base",
    images: [
      "https://images.pexels.com/photos/4041556/pexels-photo-4041556.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema BB con cobertura ligera, hidratación y protección solar SPF 20.",
    keyIngredients: ["Filtros Solares", "Ácido Hialurónico", "Vitamina E", "Extractos Botánicos"],
    allIngredients: ["Zinc Oxide", "Hyaluronic Acid", "Tocopherol", "Plant Extracts", "Iron Oxides", "Aqua"],
    skinConcerns: ["Cobertura ligera", "Hidratación", "Protección"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Multifuncional"],
    rating: 4.5,
    reviewCount: 156,
    howToUse: {
      general: "Aplicar sobre rostro limpio como base de maquillaje o solo para cobertura natural."
    }
  },
  {
    id: "73",
    name: "Exfoliante Labial",
    brand: "Luka Natural",
    price: 32000,
    category: "maquillaje",
    subcategory: "labiales",
    images: [
      "https://images.pexels.com/photos/4041558/pexels-photo-4041558.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Exfoliante labial con azúcar y miel que suaviza y prepara los labios.",
    keyIngredients: ["Azúcar Orgánico", "Miel", "Aceite de Coco", "Vitamina E"],
    allIngredients: ["Sucrose", "Honey", "Cocos Nucifera Oil", "Tocopherol", "Natural Flavor"],
    skinConcerns: ["Labios ásperos", "Descamación", "Preparación"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Suavizante"],
    rating: 4.6,
    reviewCount: 234,
    howToUse: {
      general: "Masajear suavemente sobre labios húmedos, enjuagar y aplicar bálsamo."
    }
  },
  {
    id: "74",
    name: "Agua Termal Calmante",
    brand: "Luka Natural",
    price: 48000,
    category: "facial",
    subcategory: "brumas",
    images: [
      "https://images.pexels.com/photos/4041560/pexels-photo-4041560.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Agua termal pura que calma, refresca e hidrata la piel sensible.",
    keyIngredients: ["Agua Termal", "Minerales Naturales", "Oligoelementos"],
    allIngredients: ["Thermal Spring Water", "Natural Minerals", "Trace Elements"],
    skinConcerns: ["Sensibilidad", "Irritación", "Hidratación"],
    skinTypes: ["Sensible", "Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Puro"],
    rating: 4.4,
    reviewCount: 167,
    howToUse: {
      general: "Pulverizar sobre rostro a 20cm de distancia. Dejar secar naturalmente."
    }
  },
  {
    id: "75",
    name: "Crema Corporal Antiedad",
    brand: "Luka Natural",
    price: 95000,
    category: "corporal",
    subcategory: "antiedad",
    images: [
      "https://images.pexels.com/photos/4041562/pexels-photo-4041562.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema corporal con retinol y péptidos que combate el envejecimiento de la piel.",
    keyIngredients: ["Retinol", "Péptidos", "Colágeno Vegetal", "Vitamina C"],
    allIngredients: ["Retinol", "Palmitoyl Pentapeptide-4", "Hydrolyzed Vegetable Protein", "Sodium Ascorbyl Phosphate", "Aqua", "Glycerin"],
    skinConcerns: ["Envejecimiento corporal", "Flacidez", "Textura"],
    skinTypes: ["Madura", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Anti-edad"],
    rating: 4.7,
    reviewCount: 145,
    isNew: true,
    howToUse: {
      evening: "Aplicar por la noche sobre piel limpia con masajes ascendentes."
    }
  },
  // Continuando con los últimos productos hasta 100...
  {
    id: "76",
    name: "Mascarilla Detox Carbón",
    brand: "Luka Natural",
    price: 78000,
    category: "facial",
    subcategory: "mascarillas",
    images: [
      "https://images.pexels.com/photos/4041564/pexels-photo-4041564.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Mascarilla peel-off con carbón activado que elimina impurezas y puntos negros.",
    keyIngredients: ["Carbón Activado", "Arcilla Bentonita", "Extracto de Bambú", "Tea Tree"],
    allIngredients: ["Charcoal Powder", "Bentonite", "Bambusa Arundinacea Extract", "Melaleuca Alternifolia Oil", "Aqua", "PVA"],
    skinConcerns: ["Puntos negros", "Poros obstruidos", "Impurezas"],
    skinTypes: ["Grasa", "Mixta", "Acneica"],
    attributes: ["Vegano", "Libre de crueldad", "Detox"],
    rating: 4.5,
    reviewCount: 198,
    howToUse: {
      general: "Aplicar capa gruesa evitando contorno de ojos. Dejar secar 20 minutos y retirar."
    }
  },
  {
    id: "77",
    name: "Sérum Reparador Nocturno",
    brand: "Luka Natural",
    price: 125000,
    category: "facial",
    subcategory: "serums",
    images: [
      "https://images.pexels.com/photos/4041566/pexels-photo-4041566.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Sérum nocturno con factores de crecimiento que repara y regenera la piel.",
    keyIngredients: ["Factores de Crecimiento", "Péptidos", "Ceramidas", "Ácido Hialurónico"],
    allIngredients: ["Growth Factors", "Palmitoyl Pentapeptide-4", "Ceramide NP", "Hyaluronic Acid", "Aqua", "Glycerin"],
    skinConcerns: ["Reparación nocturna", "Anti-edad", "Regeneración"],
    skinTypes: ["Madura", "Dañada", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Tecnología avanzada"],
    rating: 4.9,
    reviewCount: 123,
    isBestSeller: true,
    howToUse: {
      evening: "Aplicar 3-4 gotas por la noche después del limpiador."
    }
  },
  {
    id: "78",
    name: "Polvo Suelto Mineral",
    brand: "Luka Natural",
    price: 75000,
    category: "maquillaje",
    subcategory: "polvos",
    images: [
      "https://images.pexels.com/photos/4041568/pexels-photo-4041568.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Polvo suelto mineral que fija el maquillaje y controla el brillo naturalmente.",
    keyIngredients: ["Minerales Puros", "Sílice", "Mica", "Vitamina E"],
    allIngredients: ["Mica", "Silica", "Iron Oxides", "Tocopherol", "Zinc Stearate"],
    skinConcerns: ["Fijación", "Control de brillo", "Acabado natural"],
    skinTypes: ["Grasa", "Mixta", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Translúcido"],
    rating: 4.6,
    reviewCount: 167,
    howToUse: {
      general: "Aplicar con brocha grande sobre el maquillaje para fijar y matificar."
    }
  },
  {
    id: "79",
    name: "Crema Manos Anti-Edad",
    brand: "Luka Natural",
    price: 58000,
    category: "corporal",
    subcategory: "manos",
    images: [
      "https://images.pexels.com/photos/4041570/pexels-photo-4041570.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema para manos con retinol y vitamina C que previene el envejecimiento.",
    keyIngredients: ["Retinol", "Vitamina C", "Ácido Hialurónico", "Manteca de Karité"],
    allIngredients: ["Retinol", "Sodium Ascorbyl Phosphate", "Hyaluronic Acid", "Butyrospermum Parkii Butter", "Aqua", "Glycerin"],
    skinConcerns: ["Envejecimiento de manos", "Manchas", "Sequedad"],
    skinTypes: ["Madura", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Anti-edad"],
    rating: 4.7,
    reviewCount: 189,
    howToUse: {
      general: "Aplicar sobre manos limpias, especialmente por la noche."
    }
  },
  {
    id: "80",
    name: "Gel Contorno Ojos",
    brand: "Luka Natural",
    price: 85000,
    category: "facial",
    subcategory: "contorno",
    images: [
      "https://images.pexels.com/photos/4041572/pexels-photo-4041572.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Gel refrescante para contorno de ojos que reduce bolsas y ojeras.",
    keyIngredients: ["Cafeína", "Extracto de Pepino", "Ácido Hialurónico", "Mentol"],
    allIngredients: ["Caffeine", "Cucumis Sativus Extract", "Hyaluronic Acid", "Menthol", "Aqua", "Glycerin"],
    skinConcerns: ["Bolsas", "Ojeras", "Hinchazón"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Efecto frío"],
    rating: 4.5,
    reviewCount: 234,
    howToUse: {
      general: "Aplicar con pequeños toques alrededor de los ojos mañana y noche."
    }
  },
  // Completando los últimos 20 productos...
  {
    id: "81",
    name: "Aceite Desmaquillante",
    brand: "Luka Natural",
    price: 72000,
    category: "facial",
    subcategory: "limpiadores",
    images: [
      "https://images.pexels.com/photos/4041574/pexels-photo-4041574.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Aceite desmaquillante que elimina maquillaje resistente al agua sin irritar.",
    keyIngredients: ["Aceite de Girasol", "Aceite de Jojoba", "Vitamina E", "Extracto de Manzanilla"],
    allIngredients: ["Helianthus Annuus Oil", "Simmondsia Chinensis Oil", "Tocopherol", "Chamomilla Recutita Extract"],
    skinConcerns: ["Desmaquillado", "Maquillaje waterproof", "Suavidad"],
    skinTypes: ["Todos los tipos", "Sensible"],
    attributes: ["Vegano", "Libre de crueldad", "Suave"],
    rating: 4.6,
    reviewCount: 156,
    howToUse: {
      evening: "Masajear sobre piel seca, emulsionar con agua y enjuagar."
    }
  },
  {
    id: "82",
    name: "Crema Cuello y Escote",
    brand: "Luka Natural",
    price: 115000,
    category: "facial",
    subcategory: "antiedad",
    images: [
      "https://images.pexels.com/photos/4041576/pexels-photo-4041576.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema específica para cuello y escote con péptidos reafirmantes.",
    keyIngredients: ["Péptidos Reafirmantes", "Colágeno Vegetal", "Elastina", "Vitamina C"],
    allIngredients: ["Palmitoyl Pentapeptide-4", "Hydrolyzed Vegetable Protein", "Hydrolyzed Elastin", "Sodium Ascorbyl Phosphate", "Aqua", "Glycerin"],
    skinConcerns: ["Flacidez cuello", "Líneas horizontales", "Pérdida firmeza"],
    skinTypes: ["Madura", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Reafirmante"],
    rating: 4.8,
    reviewCount: 145,
    isNew: true,
    howToUse: {
      general: "Aplicar con movimientos ascendentes desde escote hasta mentón."
    }
  },
  {
    id: "83",
    name: "Sérum Poros Minimizador",
    brand: "Luka Natural",
    price: 95000,
    category: "facial",
    subcategory: "serums",
    images: [
      "https://images.pexels.com/photos/4041578/pexels-photo-4041578.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Sérum que minimiza la apariencia de poros y refina la textura de la piel.",
    keyIngredients: ["Niacinamida", "Ácido Salicílico", "Extracto de Sauce", "Zinc PCA"],
    allIngredients: ["Niacinamide", "Salicylic Acid", "Salix Alba Bark Extract", "Zinc PCA", "Aqua", "Glycerin"],
    skinConcerns: ["Poros dilatados", "Textura irregular", "Grasa"],
    skinTypes: ["Grasa", "Mixta", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Refinador"],
    rating: 4.7,
    reviewCount: 198,
    howToUse: {
      general: "Aplicar 2-3 gotas mañana y noche después del limpiador."
    }
  },
  {
    id: "84",
    name: "Mascarilla Iluminadora",
    brand: "Luka Natural",
    price: 88000,
    category: "facial",
    subcategory: "mascarillas",
    images: [
      "https://images.pexels.com/photos/4041580/pexels-photo-4041580.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Mascarilla con perlas y vitamina C que aporta luminosidad instantánea.",
    keyIngredients: ["Extracto de Perlas", "Vitamina C", "Ácido Hialurónico", "Niacinamida"],
    allIngredients: ["Pearl Extract", "Sodium Ascorbyl Phosphate", "Hyaluronic Acid", "Niacinamide", "Aqua", "Glycerin"],
    skinConcerns: ["Opacidad", "Falta de luminosidad", "Tono apagado"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Iluminador"],
    rating: 4.6,
    reviewCount: 167,
    howToUse: {
      general: "Aplicar capa uniforme, dejar 15-20 minutos y enjuagar con agua tibia."
    }
  },
  {
    id: "85",
    name: "Crema Solar Corporal",
    brand: "Luka Natural",
    price: 78000,
    category: "corporal",
    subcategory: "proteccion",
    images: [
      "https://images.pexels.com/photos/4041582/pexels-photo-4041582.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema solar corporal FPS 30 resistente al agua con antioxidantes.",
    keyIngredients: ["Filtros Minerales", "Vitamina E", "Extracto de Té Verde", "Aloe Vera"],
    allIngredients: ["Zinc Oxide", "Titanium Dioxide", "Tocopherol", "Camellia Sinensis Extract", "Aloe Barbadensis Leaf Juice", "Aqua"],
    skinConcerns: ["Protección UV corporal", "Resistencia agua", "Antioxidación"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Water resistant"],
    rating: 4.5,
    reviewCount: 234,
    howToUse: {
      general: "Aplicar generosamente 30 minutos antes de la exposición. Reaplicar cada 2 horas."
    }
  },
  {
    id: "86",
    name: "Bálsamo After Sun",
    brand: "Luka Natural",
    price: 65000,
    category: "corporal",
    subcategory: "after-sun",
    images: [
      "https://images.pexels.com/photos/4041584/pexels-photo-4041584.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Bálsamo reparador after sun con aloe vera y extractos calmantes.",
    keyIngredients: ["Aloe Vera", "Extracto de Caléndula", "Mentol", "Vitamina E"],
    allIngredients: ["Aloe Barbadensis Leaf Juice", "Calendula Officinalis Extract", "Menthol", "Tocopherol", "Aqua", "Glycerin"],
    skinConcerns: ["Piel quemada", "Irritación solar", "Deshidratación"],
    skinTypes: ["Todos los tipos", "Sensible"],
    attributes: ["Vegano", "Libre de crueldad", "Refrescante"],
    rating: 4.7,
    reviewCount: 189,
    howToUse: {
      general: "Aplicar generosamente sobre piel limpia después de la exposición solar."
    }
  },
  {
    id: "87",
    name: "Tratamiento Uñas Fortalecedor",
    brand: "Luka Natural",
    price: 42000,
    category: "corporal",
    subcategory: "uñas",
    images: [
      "https://images.pexels.com/photos/4041586/pexels-photo-4041586.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Tratamiento fortalecedor para uñas débiles y quebradizas con biotina.",
    keyIngredients: ["Biotina", "Queratina", "Calcio", "Vitamina E"],
    allIngredients: ["Biotin", "Keratin", "Calcium Pantothenate", "Tocopherol", "Aqua", "Glycerin"],
    skinConcerns: ["Uñas débiles", "Quebradizas", "Crecimiento lento"],
    skinTypes: ["Todos los tipos de uñas"],
    attributes: ["Vegano", "Libre de crueldad", "Fortalecedor"],
    rating: 4.6,
    reviewCount: 156,
    howToUse: {
      general: "Aplicar sobre uñas limpias una vez al día. Masajear cutículas."
    }
  },
  {
    id: "88",
    name: "Esmalte Natural Base",
    brand: "Luka Natural",
    price: 35000,
    category: "corporal",
    subcategory: "uñas",
    images: [
      "https://images.pexels.com/photos/4041588/pexels-photo-4041588.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Esmalte base natural que protege y fortalece las uñas.",
    keyIngredients: ["Extractos Vegetales", "Vitamina E", "Calcio", "Proteínas"],
    allIngredients: ["Plant Extracts", "Tocopherol", "Calcium", "Hydrolyzed Protein", "Ethyl Acetate", "Butyl Acetate"],
    skinConcerns: ["Protección uñas", "Base para esmalte", "Fortalecimiento"],
    skinTypes: ["Todos los tipos de uñas"],
    attributes: ["Vegano", "Libre de crueldad", "5-free"],
    rating: 4.4,
    reviewCount: 198,
    howToUse: {
      general: "Aplicar como base antes del esmalte de color o solo para protección."
    }
  },
  {
    id: "89",
    name: "Kit Viaje Esenciales",
    brand: "Luka Natural",
    price: 95000,
    originalPrice: 125000,
    category: "kits",
    subcategory: "viaje",
    images: [
      "https://images.pexels.com/photos/4041590/pexels-photo-4041590.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Kit de viaje con productos esenciales en tamaño mini para llevar a cualquier lugar.",
    keyIngredients: ["Múltiples ingredientes activos", "Extractos naturales", "Vitaminas", "Antioxidantes"],
    allIngredients: ["Ver productos individuales incluidos en el kit"],
    skinConcerns: ["Cuidado en viaje", "Practicidad", "Rutina básica"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Tamaño viaje"],
    rating: 4.7,
    reviewCount: 145,
    howToUse: {
      general: "Usar productos según rutina habitual adaptada al viaje."
    }
  },
  {
    id: "90",
    name: "Kit Novias Completo",
    brand: "Luka Natural",
    price: 385000,
    originalPrice: 450000,
    category: "kits",
    subcategory: "novias",
    images: [
      "https://images.pexels.com/photos/4041592/pexels-photo-4041592.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Kit completo para novias con tratamientos faciales y maquillaje para el día especial.",
    keyIngredients: ["Ingredientes premium", "Oro 24K", "Péptidos", "Vitaminas"],
    allIngredients: ["Ver productos individuales incluidos en el kit"],
    skinConcerns: ["Preparación boda", "Look perfecto", "Cuidado premium"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Premium"],
    rating: 4.9,
    reviewCount: 89,
    isNew: true,
    howToUse: {
      general: "Comenzar tratamiento 3 meses antes de la boda según guía incluida."
    }
  },
  // Últimos 10 productos para completar 100
  {
    id: "91",
    name: "Sérum Lifting Instantáneo",
    brand: "Luka Natural",
    price: 185000,
    category: "facial",
    subcategory: "serums",
    images: [
      "https://images.pexels.com/photos/4041594/pexels-photo-4041594.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Sérum con efecto lifting inmediato que tensa y reafirma la piel al instante.",
    keyIngredients: ["Péptidos Tensor", "Extracto de Quinoa", "Ácido Hialurónico", "Colágeno Marino"],
    allIngredients: ["Acetyl Hexapeptide-8", "Chenopodium Quinoa Extract", "Hyaluronic Acid", "Hydrolyzed Marine Collagen", "Aqua", "Glycerin"],
    skinConcerns: ["Flacidez", "Pérdida firmeza", "Efecto inmediato"],
    skinTypes: ["Madura", "Normal"],
    attributes: ["Vegano", "Libre de crueldad", "Efecto inmediato"],
    rating: 4.8,
    reviewCount: 123,
    isNew: true,
    howToUse: {
      general: "Aplicar antes de eventos especiales para efecto lifting inmediato."
    }
  },
  {
    id: "92",
    name: "Mascarilla Oxígeno Burbujas",
    brand: "Luka Natural",
    price: 125000,
    category: "facial",
    subcategory: "mascarillas",
    images: [
      "https://images.pexels.com/photos/4041596/pexels-photo-4041596.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Mascarilla innovadora que libera oxígeno en burbujas para oxigenar la piel.",
    keyIngredients: ["Perfluorocarbono", "Extracto de Algas", "Vitamina C", "Niacinamida"],
    allIngredients: ["Perfluorocarbon", "Algae Extract", "Sodium Ascorbyl Phosphate", "Niacinamide", "Aqua", "Glycerin"],
    skinConcerns: ["Piel apagada", "Falta oxigenación", "Luminosidad"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Innovador"],
    rating: 4.7,
    reviewCount: 167,
    isNew: true,
    howToUse: {
      general: "Aplicar capa uniforme, dejar hacer burbujas 10 minutos y enjuagar."
    }
  },
  {
    id: "93",
    name: "Crema Manos Reparadora Noche",
    brand: "Luka Natural",
    price: 68000,
    category: "corporal",
    subcategory: "manos",
    images: [
      "https://images.pexels.com/photos/4041598/pexels-photo-4041598.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema nocturna intensiva para manos muy secas y agrietadas.",
    keyIngredients: ["Urea 10%", "Lanolina", "Manteca de Karité", "Vitamina E"],
    allIngredients: ["Urea", "Lanolin", "Butyrospermum Parkii Butter", "Tocopherol", "Aqua", "Glycerin"],
    skinConcerns: ["Manos muy secas", "Grietas", "Reparación nocturna"],
    skinTypes: ["Muy seca", "Dañada"],
    attributes: ["Vegano", "Libre de crueldad", "Reparador"],
    rating: 4.8,
    reviewCount: 234,
    howToUse: {
      evening: "Aplicar generosamente por la noche. Usar guantes de algodón si es posible."
    }
  },
  {
    id: "94",
    name: "Aceite Facial Vitamina C",
    brand: "Luka Natural",
    price: 145000,
    category: "facial",
    subcategory: "aceites",
    images: [
      "https://images.pexels.com/photos/4041600/pexels-photo-4041600.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Aceite facial con vitamina C estabilizada que ilumina y protege contra radicales libres.",
    keyIngredients: ["Vitamina C Liposoluble", "Aceite de Rosa Mosqueta", "Vitamina E", "Escualano"],
    allIngredients: ["Magnesium Ascorbyl Phosphate", "Rosa Canina Fruit Oil", "Tocopherol", "Squalane"],
    skinConcerns: ["Opacidad", "Daño ambiental", "Hidratación"],
    skinTypes: ["Seca", "Normal", "Madura"],
    attributes: ["Vegano", "Libre de crueldad", "Antioxidante"],
    rating: 4.9,
    reviewCount: 156,
    isBestSeller: true,
    howToUse: {
      morning: "Aplicar 3-4 gotas por la mañana antes del protector solar."
    }
  },
  {
    id: "95",
    name: "Gel Limpiador Espumoso",
    brand: "Luka Natural",
    price: 58000,
    category: "facial",
    subcategory: "limpiadores",
    images: [
      "https://images.pexels.com/photos/4041602/pexels-photo-4041602.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Gel limpiador que se transforma en espuma suave para limpieza profunda sin resecar.",
    keyIngredients: ["Aminoácidos", "Extracto de Coco", "Glicerina", "Extracto de Pepino"],
    allIngredients: ["Amino Acids", "Cocos Nucifera Extract", "Glycerin", "Cucumis Sativus Extract", "Aqua", "Coco Glucoside"],
    skinConcerns: ["Limpieza profunda", "Suavidad", "Hidratación"],
    skinTypes: ["Normal", "Mixta", "Sensible"],
    attributes: ["Vegano", "Libre de crueldad", "Suave"],
    rating: 4.5,
    reviewCount: 198,
    howToUse: {
      general: "Aplicar sobre rostro húmedo, hacer espuma y enjuagar abundantemente."
    }
  },
  {
    id: "96",
    name: "Crema Corporal Perfumada",
    brand: "Luka Natural",
    price: 75000,
    category: "corporal",
    subcategory: "hidratantes",
    images: [
      "https://images.pexels.com/photos/4041604/pexels-photo-4041604.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Crema corporal hidratante con fragancia natural de flores que perdura suavemente.",
    keyIngredients: ["Manteca de Karité", "Aceites Esenciales", "Glicerina", "Vitamina E"],
    allIngredients: ["Butyrospermum Parkii Butter", "Essential Oils", "Glycerin", "Tocopherol", "Aqua", "Natural Fragrance"],
    skinConcerns: ["Hidratación", "Fragancia natural", "Suavidad"],
    skinTypes: ["Normal", "Seca"],
    attributes: ["Vegano", "Libre de crueldad", "Perfumada"],
    rating: 4.6,
    reviewCount: 189,
    howToUse: {
      general: "Aplicar sobre piel limpia con masajes circulares hasta absorción."
    }
  },
  {
    id: "97",
    name: "Mascarilla Pies Exfoliante",
    brand: "Luka Natural",
    price: 48000,
    category: "corporal",
    subcategory: "pies",
    images: [
      "https://images.pexels.com/photos/4041606/pexels-photo-4041606.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Mascarilla exfoliante para pies que elimina durezas y callosidades.",
    keyIngredients: ["Ácidos de Frutas", "Urea", "Extracto de Menta", "Aloe Vera"],
    allIngredients: ["Fruit Acids", "Urea", "Mentha Piperita Extract", "Aloe Barbadensis Leaf Juice", "Aqua", "Glycerin"],
    skinConcerns: ["Durezas", "Callosidades", "Piel áspera"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Exfoliante"],
    rating: 4.7,
    reviewCount: 167,
    howToUse: {
      general: "Aplicar en pies limpios, cubrir con calcetines, dejar 60 minutos y enjuagar."
    }
  },
  {
    id: "98",
    name: "Kit Adolescentes",
    brand: "Luka Natural",
    price: 125000,
    originalPrice: 155000,
    category: "kits",
    subcategory: "adolescentes",
    images: [
      "https://images.pexels.com/photos/4041608/pexels-photo-4041608.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Kit especialmente diseñado para el cuidado de la piel adolescente con tendencia acneica.",
    keyIngredients: ["Ácido Salicílico", "Niacinamida", "Tea Tree", "Extractos calmantes"],
    allIngredients: ["Ver productos individuales incluidos en el kit"],
    skinConcerns: ["Acné adolescente", "Grasa excesiva", "Rutina simple"],
    skinTypes: ["Grasa", "Acneica", "Joven"],
    attributes: ["Vegano", "Libre de crueldad", "Suave"],
    rating: 4.6,
    reviewCount: 234,
    howToUse: {
      general: "Seguir rutina simple: limpiador, tónico, tratamiento y hidratante."
    }
  },
  {
    id: "99",
    name: "Perfume Natural Floral",
    brand: "Luka Natural",
    price: 125000,
    category: "corporal",
    subcategory: "fragancias",
    images: [
      "https://images.pexels.com/photos/4041610/pexels-photo-4041610.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Perfume natural con notas florales de rosa, jazmín y bergamota.",
    keyIngredients: ["Aceites Esenciales", "Extracto de Rosa", "Jazmín", "Bergamota"],
    allIngredients: ["Essential Oils", "Rosa Damascena Extract", "Jasminum Officinale Oil", "Citrus Bergamia Oil", "Ethanol"],
    skinConcerns: ["Fragancia natural", "Duración", "Elegancia"],
    skinTypes: ["Todos los tipos"],
    attributes: ["Vegano", "Libre de crueldad", "Natural"],
    rating: 4.8,
    reviewCount: 145,
    isNew: true,
    howToUse: {
      general: "Aplicar en puntos de pulso: muñecas, cuello y detrás de las orejas."
    }
  },
  {
    id: "100",
    name: "Kit Edición Limitada Oro",
    brand: "Luka Natural",
    price: 485000,
    originalPrice: 580000,
    category: "kits",
    subcategory: "premium",
    images: [
      "https://images.pexels.com/photos/4041612/pexels-photo-4041612.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Kit de edición limitada con productos premium con oro 24K y ingredientes de lujo.",
    keyIngredients: ["Oro 24K", "Caviar", "Péptidos Premium", "Diamante en polvo"],
    allIngredients: ["Ver productos individuales incluidos en el kit"],
    skinConcerns: ["Lujo máximo", "Anti-edad premium", "Experiencia única"],
    skinTypes: ["Todos los tipos", "Madura"],
    attributes: ["Vegano", "Libre de crueldad", "Edición limitada"],
    rating: 5.0,
    reviewCount: 67,
    isNew: true,
    howToUse: {
      general: "Seguir ritual de lujo incluido en la guía premium del kit."
    }
  }
];
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
  }
];
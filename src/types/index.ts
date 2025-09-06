export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  images: string[];
  description: string;
  keyIngredients: string[];
  allIngredients: string[];
  skinConcerns: string[];
  skinTypes: string[];
  attributes: string[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  howToUse: {
    morning?: string;
    evening?: string;
    general?: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  skinType?: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  readTime: number;
}

export interface FilterOptions {
  skinConcerns: string[];
  skinTypes: string[];
  keyIngredients: string[];
  attributes: string[];
  priceRange: [number, number];
  categories: string[];
}
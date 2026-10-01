export interface Product {
  id: string;
  name: string;
  category: string;
  categoryLabel?: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  badgeType?: 'discount' | 'bestseller' | 'icon' | 'heritage' | 'new';
  image: string;
  imageAlt?: string;
  subtitle?: string;
  description?: string;
  options?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedMetal?: string;
}

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface Review {
  id: string;
  rating: number;
  headline: string;
  content: string;
  author: string;
  location: string;
  isVerified: boolean;
}

export interface InstagramPost {
  id: string;
  image: string;
  imageAlt: string;
  likes: string;
  comments: string;
  url: string;
}

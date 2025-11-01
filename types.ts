export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrls: string[];
  category: 'Clothing' | 'Tech';
  bestSeller?: boolean;
  colors?: { name: string; hex: string }[];
  sizes?: string[];
}
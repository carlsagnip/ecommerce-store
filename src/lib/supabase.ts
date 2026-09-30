import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  original_price?: number;
  image_url: string;
  category: string;
  rating: number;
  reviews_count: number;
  in_stock: boolean;
  featured: boolean;
  created_at: string;
};

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  image_url: string;
  product_count: number;
};

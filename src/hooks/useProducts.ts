'use client';

import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types';

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useProduct = (productId: string) => {
  return useQuery({
    queryKey: ['products', productId],
    queryFn: async () => {
      const products = await fetchProducts();
      const product = products.find(p => p.id === productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    },
    staleTime: 1000 * 60 * 5,
  });
};
'use client';

import Header from '@/components/layout/Header';
import ProductCard from '@/components/product/ProductCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useProducts } from '@/hooks/useProducts';

export default function Home() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="flex items-center justify-center py-20">
          <LoadingSpinner size="lg" />
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-dark-blue mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-grayish-blue">
              Unable to load products. Please try again later.
            </p>
          </div>
        </main>
      </div>
    );
  }

  const featuredProduct = products?.[0];

  if (!featuredProduct) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-dark-blue mb-4">
              No products found
            </h2>
            <p className="text-grayish-blue">
              Check back soon for new arrivals!
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <ProductCard product={featuredProduct} />
      </main>
    </div>
  );
}
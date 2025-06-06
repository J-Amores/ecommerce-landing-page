'use client';

import { Product } from '@/types';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import AddToCart from './AddToCart';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
      {/* Product Gallery */}
      <div className="lg:pr-8">
        <ProductGallery product={product} />
      </div>

      {/* Product Details */}
      <div className="lg:pl-8 flex flex-col justify-center space-y-8">
        <ProductInfo product={product} />
        <AddToCart product={product} />
      </div>
    </div>
  );
}
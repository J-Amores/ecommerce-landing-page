'use client';

import { Product } from '@/types';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      {/* Company Name */}
      <div className="text-orange-500 text-sm font-bold uppercase tracking-wider">
        {product.company}
      </div>

      {/* Product Name */}
      <h1 className="text-3xl md:text-4xl font-bold text-dark-blue leading-tight">
        {product.name}
      </h1>

      {/* Description */}
      <p className="text-grayish-blue text-base leading-relaxed">
        {product.description}
      </p>

      {/* Pricing */}
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-dark-blue">
            ${product.price.toFixed(2)}
          </span>
          {product.discount && (
            <span className="bg-pale-orange text-orange-500 px-2 py-1 rounded-md text-sm font-bold">
              {product.discount}%
            </span>
          )}
        </div>
        {product.originalPrice && (
          <div className="text-grayish-blue line-through text-base">
            ${product.originalPrice.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
}
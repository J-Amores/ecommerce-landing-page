'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { useCartActions } from '@/stores/cartStore';
import Button from '@/components/ui/Button';
import Counter from '@/components/ui/Counter';

interface AddToCartProps {
  product: Product;
}

export default function AddToCart({ product }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { addItem } = useCartActions();

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate loading state
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addItem(product, quantity);
    setIsAdding(false);
    setShowSuccess(true);
    
    // Hide success message after 2 seconds
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Quantity and Add to Cart */}
      <div className="flex flex-col md:flex-row gap-4">
        <Counter
          value={quantity}
          onChange={setQuantity}
          min={1}
          max={10}
          className="flex-shrink-0 md:w-40"
        />
        
        <Button
          onClick={handleAddToCart}
          isLoading={isAdding}
          className="flex-1 flex items-center justify-center gap-3"
          disabled={isAdding}
        >
          <Image 
            src="/images/icon-cart.svg" 
            alt="Cart" 
            width={20} 
            height={20}
            className="w-5 h-5 filter brightness-0 invert"
          />
          Add to cart
        </Button>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            Added {quantity} item{quantity > 1 ? 's' : ''} to cart!
          </div>
        </div>
      )}
    </div>
  );
}
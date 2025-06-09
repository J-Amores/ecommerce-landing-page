'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useCartStore from '@/stores/cartStore';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { CartItem } from '@/types';

const DEMO_PROCESSING_TIME = 1500; // 1.5 seconds

export default function CheckoutPage(): JSX.Element | null {
  const router = useRouter();
  const items = useCartStore((state: { items: CartItem[] }) => state.items);
  const total = useCartStore((state: { total: number }) => state.total);
  const [isProcessing, setIsProcessing] = useState(false);

  // Redirect if cart is empty
  if (items.length === 0 && !isProcessing) {
    router.push('/');
    return null;
  }

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate order processing
    setTimeout(() => {
      router.push('/checkout/success');
    }, DEMO_PROCESSING_TIME);
  };

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <h2 className="text-xl font-semibold text-dark-blue mt-4">
            Processing your order...
          </h2>
          <p className="text-grayish-blue mt-2">
            Please wait while we confirm your purchase
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <button
            onClick={() => router.push('/')}
            className="text-grayish-blue hover:text-dark-blue transition-colors"
          >
            ← Back to shopping
          </button>
          <h1 className="text-2xl font-bold text-dark-blue mt-2">Checkout</h1>
        </div>

        {/* Order Summary */}
        <div className="bg-light-grayish-blue rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-dark-blue mb-4">Order Summary</h2>
          
          {/* Cart Items */}
          <div className="divide-y divide-gray-200">
            {items.map((item: CartItem) => (
              <div key={item.id} className="py-4 flex items-center gap-4">
                {/* Product Image */}
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-dark-blue font-medium">{item.product.name}</h3>
                  <div className="text-sm text-grayish-blue">
                    ${item.product.price.toFixed(2)} × {item.quantity}
                  </div>
                </div>

                {/* Item Total */}
                <div className="text-dark-blue font-semibold">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order Total */}
          <div className="border-t border-gray-200 mt-4 pt-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span className="text-grayish-blue">Total</span>
              <span className="text-dark-blue">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <Button
          onClick={handleCheckout}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-bold"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center gap-2">
              <LoadingSpinner size="sm" />
              Processing Order...
            </span>
          ) : (
            'Complete Purchase'
          )}
        </Button>

        {/* Demo Notice */}
        <p className="text-center text-sm text-grayish-blue mt-4">
          🛍️ This is a demo checkout - no real payment will be processed
        </p>
      </div>
    </div>
  );
}

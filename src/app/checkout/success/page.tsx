'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useCartStore from '@/stores/cartStore';
import Button from '@/components/ui/Button';

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const clearCart = useCartStore((state: { clearCart: () => void }) => state.clearCart);

  // Generate a mock order number
  const orderNumber = `ORD-${Date.now().toString().slice(-6)}`;

  useEffect(() => {
    // Clear the cart after successful payment
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-dark-blue mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-grayish-blue mb-6">
          Thank you for your purchase. Your order has been confirmed and will be processed shortly.
        </p>

        {/* Order Details */}
        <div className="bg-light-grayish-blue rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-dark-blue mb-2">Order Details</h2>
          <p className="text-sm text-grayish-blue mb-1">
            Order Number: <span className="font-medium text-dark-blue">{orderNumber}</span>
          </p>
          <p className="text-sm text-grayish-blue">
            Confirmation sent to your email
          </p>
        </div>

        {/* Demo Notice */}
        <div className="bg-orange/10 border border-orange/20 rounded-lg p-4 mb-8">
          <p className="text-sm text-dark-blue">
            <strong>Demo Notice:</strong> This is a demonstration order.
            No actual order will be processed or shipped.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => router.push('/')}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            Continue Shopping
          </Button>
          
          <button
            onClick={() => router.push('/')}
            className="w-full text-grayish-blue hover:text-dark-blue text-sm"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
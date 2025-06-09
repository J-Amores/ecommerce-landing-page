'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCartItems, useCartTotal } from '@/stores/cartStore';
import CartItem from './CartItem';
import Button from '@/components/ui/Button';

interface CartDropdownProps {
  onClose: () => void;
}

export default function CartDropdown({ onClose }: CartDropdownProps) {
  const router = useRouter();
  const items = useCartItems();
  const total = useCartTotal();

  return (
    <div className="bg-white rounded-lg shadow-2xl border w-80 max-w-[90vw] animate-fade-in">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-bold text-dark-blue">Cart</h3>
        <button
          onClick={onClose}
          className="p-2 text-grayish-blue hover:text-dark-blue transition-colors"
          aria-label="Close cart"
        >
          <Image 
            src="/images/icon-close.svg" 
            alt="Close" 
            width={14} 
            height={15}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-grayish-blue font-medium">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Cart Items */}
            <div className="divide-y divide-gray-100 max-h-[60vh] overflow-y-auto">
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Total */}
            <div className="pt-4 border-t space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-grayish-blue">Total:</span>
                <span className="font-bold text-xl text-dark-blue">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors"
                onClick={() => {
                  router.push('/checkout');
                  onClose();
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
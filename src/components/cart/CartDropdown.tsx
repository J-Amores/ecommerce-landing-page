'use client';

import { useCartItems, useCartTotal } from '@/stores/cartStore';
import CartItem from './CartItem';
import Button from '@/components/ui/Button';

interface CartDropdownProps {
  onClose: () => void;
}

export default function CartDropdown({ onClose }: CartDropdownProps) {
  const items = useCartItems();
  const total = useCartTotal();

  return (
    <div className="bg-white rounded-lg shadow-2xl border w-80 max-w-[90vw]">
      {/* Header */}
      <div className="p-4 border-b">
        <h3 className="font-bold text-dark-blue">Cart</h3>
      </div>

      {/* Content */}
      <div className="p-4">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-grayish-blue font-medium">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-2">
            {/* Cart Items */}
            <div className="divide-y divide-gray-100">
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Total */}
            <div className="pt-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-grayish-blue">Total:</span>
                <span className="font-bold text-xl text-dark-blue">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <Button 
                className="w-full"
                onClick={() => {
                  // TODO: Implement checkout functionality
                  alert('Checkout functionality coming soon!');
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
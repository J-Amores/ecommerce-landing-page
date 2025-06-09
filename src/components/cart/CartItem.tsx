'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '@/types';
import { useCartActions } from '@/stores/cartStore';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCartActions();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(item.product.id);
    } else {
      updateQuantity(item.product.id, newQuantity);
    }
  };

  const total = item.product.price * item.quantity;

  return (
    <div className="flex flex-col gap-3 py-4">
      <div className="flex items-center gap-3">
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
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-dark-blue truncate">
            {item.product.name}
          </h4>
          <div className="flex items-center gap-2 text-sm mt-1">
            <span className="text-grayish-blue">
              ${item.product.price.toFixed(2)} x {item.quantity}
            </span>
            <span className="font-bold text-dark-blue">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => removeItem(item.product.id)}
          className="p-2 text-grayish-blue hover:text-red-500 transition-colors"
          aria-label="Remove item"
        >
          <Image
            src="/images/icon-delete.svg"
            alt="Remove"
            width={14}
            height={16}
          />
        </button>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center justify-center gap-4 bg-gray-50 rounded-lg p-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-2 text-orange-500 hover:text-orange-600 transition-colors"
          aria-label="Decrease quantity"
        >
          <Image
            src="/images/icon-minus.svg"
            alt="Decrease"
            width={12}
            height={4}
          />
        </button>
        <span className="font-bold text-dark-blue min-w-[2rem] text-center">
          {item.quantity}
        </span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-2 text-orange-500 hover:text-orange-600 transition-colors"
          aria-label="Increase quantity"
        >
          <Image
            src="/images/icon-plus.svg"
            alt="Increase"
            width={12}
            height={12}
          />
        </button>
      </div>
    </div>
  );
}
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
    <div className="flex items-center gap-3 py-4">
      {/* Product Image */}
      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm text-grayish-blue truncate">
          {item.product.name}
        </h4>
        <div className="flex items-center gap-2 text-sm">
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
        className="p-1 hover:opacity-75 transition-opacity"
        aria-label={`Remove ${item.product.name} from cart`}
      >
        <Image
          src="/images/icon-delete.svg"
          alt="Delete"
          width={14}
          height={16}
          className="w-3.5 h-4"
        />
      </button>
    </div>
  );
}
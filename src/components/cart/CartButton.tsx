'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCartCount } from '@/stores/cartStore';
import CartDropdown from './CartDropdown';

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = useCartCount();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:opacity-75 transition-opacity"
        aria-label="View cart"
      >
        <Image 
          src="/images/icon-cart.svg" 
          alt="Cart" 
          width={22} 
          height={20}
          className="w-6 h-5"
        />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[1.25rem] h-5 flex items-center justify-center animate-bounce-once">
            {itemCount > 99 ? '99+' : itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 z-20">
            <CartDropdown onClose={() => setIsOpen(false)} />
          </div>
        </>
      )}
    </div>
  );
}
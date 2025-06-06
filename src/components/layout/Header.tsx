'use client';

import { useState } from 'react';
import Image from 'next/image';
import CartButton from '@/components/cart/CartButton';

const navigation = [
  { name: 'Collections', href: '#' },
  { name: 'Men', href: '#' },
  { name: 'Women', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 hover:opacity-75 transition-opacity"
                aria-label="Open menu"
              >
                <Image 
                  src="/images/icon-menu.svg" 
                  alt="Menu" 
                  width={16} 
                  height={15}
                />
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src="/images/logo.svg" 
                alt="Sneakers" 
                width={138} 
                height={20}
                className="h-5 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center lg:space-x-8 lg:ml-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-grayish-blue hover:text-dark-blue transition-colors relative py-8 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-1 hover:after:bg-orange-500"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <CartButton />
              
              {/* Avatar */}
              <button className="relative w-8 h-8 lg:w-12 lg:h-12 rounded-full overflow-hidden hover:ring-2 hover:ring-orange-500 transition-all">
                <Image
                  src="/images/image-avatar.png"
                  alt="User avatar"
                  fill
                  className="object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/75 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 left-0 h-full w-64 bg-white z-50 lg:hidden">
            <div className="p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mb-8 hover:opacity-75 transition-opacity"
                aria-label="Close menu"
              >
                <Image 
                  src="/images/icon-close.svg" 
                  alt="Close" 
                  width={14} 
                  height={15}
                />
              </button>
              
              <nav className="space-y-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-lg font-bold text-dark-blue hover:text-orange-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
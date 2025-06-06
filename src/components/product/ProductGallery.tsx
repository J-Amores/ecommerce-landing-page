'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative mb-6">
        <div 
          className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
        
        {/* Mobile Navigation Arrows */}
        <div className="md:hidden">
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
            aria-label="Previous image"
          >
            <Image src="/images/icon-previous.svg" alt="Previous" width={8} height={14} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
            aria-label="Next image"
          >
            <Image src="/images/icon-next.svg" alt="Next" width={8} height={14} />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="hidden md:grid grid-cols-4 gap-4">
        {product.thumbnails.map((thumbnail, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-200 ${
              selectedImage === index
                ? 'ring-2 ring-orange-500 opacity-75'
                : 'hover:opacity-75'
            }`}
          >
            <Image
              src={thumbnail}
              alt={`${product.name} thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
            {selectedImage === index && (
              <div className="absolute inset-0 bg-white/75" />
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-lg w-full">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
              aria-label="Close lightbox"
            >
              <Image src="/images/icon-close.svg" alt="Close" width={20} height={20} />
            </button>
            
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:text-orange-500"
                aria-label="Previous image"
              >
                <Image src="/images/icon-previous.svg" alt="Previous" width={8} height={14} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:text-orange-500"
                aria-label="Next image"
              >
                <Image src="/images/icon-next.svg" alt="Next" width={8} height={14} />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.thumbnails.map((thumbnail, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-200 ${
                    selectedImage === index
                      ? 'ring-2 ring-orange-500 opacity-75'
                      : 'hover:opacity-75'
                  }`}
                >
                  <Image
                    src={thumbnail}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-white/75" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
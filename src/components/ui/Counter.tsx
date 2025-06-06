'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export default function Counter({
  value,
  onChange,
  min = 0,
  max = 99,
  className = '',
}: CounterProps) {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className={`flex items-center bg-light-grayish-blue rounded-lg ${className}`}>
      <button
        onClick={handleDecrement}
        disabled={value <= min}
        className="p-4 hover:opacity-75 disabled:opacity-25 disabled:cursor-not-allowed transition-opacity"
        aria-label="Decrease quantity"
      >
        <Image 
          src="/images/icon-minus.svg" 
          alt="Minus" 
          width={12} 
          height={4}
          className="w-3 h-1"
        />
      </button>
      
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="w-16 text-center bg-transparent font-bold text-dark-blue focus:outline-none"
        aria-label="Quantity"
      />
      
      <button
        onClick={handleIncrement}
        disabled={value >= max}
        className="p-4 hover:opacity-75 disabled:opacity-25 disabled:cursor-not-allowed transition-opacity"
        aria-label="Increase quantity"
      >
        <Image 
          src="/images/icon-plus.svg" 
          alt="Plus" 
          width={12} 
          height={12}
          className="w-3 h-3"
        />
      </button>
    </div>
  );
}
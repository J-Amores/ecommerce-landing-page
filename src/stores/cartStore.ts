'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem, CartState, CartActions } from '@/types';

interface CartStore extends CartState, CartActions {}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,
      total: 0,
      itemCount: 0,

      addItem: (product: Product, quantity: number) => {
        set({ isLoading: true });
        
        const { items } = get();
        const existingItem = items.find(item => item.product.id === product.id);
        
        let newItems: CartItem[];
        
        if (existingItem) {
          newItems = items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          newItems = [...items, { id: product.id, product, quantity }];
        }
        
        const total = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
        
        set({ 
          items: newItems, 
          total, 
          itemCount, 
          isLoading: false 
        });
      },

      removeItem: (productId: string) => {
        set({ isLoading: true });
        
        const { items } = get();
        const newItems = items.filter(item => item.product.id !== productId);
        
        const total = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
        
        set({ 
          items: newItems, 
          total, 
          itemCount, 
          isLoading: false 
        });
      },

      updateQuantity: (productId: string, quantity: number) => {
        set({ isLoading: true });
        
        const { items } = get();
        
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        const newItems = items.map(item =>
          item.product.id === productId
            ? { ...item, quantity }
            : item
        );
        
        const total = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
        
        set({ 
          items: newItems, 
          total, 
          itemCount, 
          isLoading: false 
        });
      },

      clearCart: () => {
        set({ 
          items: [], 
          total: 0, 
          itemCount: 0, 
          isLoading: false 
        });
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useCartStore;

export const useCartCount = () => useCartStore(state => state.itemCount);
export const useCartItems = () => useCartStore(state => state.items);
export const useCartTotal = () => useCartStore(state => state.total);
export const useCartActions = () => useCartStore(state => ({
  addItem: state.addItem,
  removeItem: state.removeItem,
  updateQuantity: state.updateQuantity,
  clearCart: state.clearCart,
}));
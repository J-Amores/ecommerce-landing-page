# E-commerce PoC Development Plan - Phase-by-Phase ToDos

## 🎯 User Stories Overview
1. **"As a user I would like to select an item and add it to my cart"**
2. **"As a user I would like to view my cart to view the product I have selected"**
3. **"As a user I would like to quickly pay for my selected product"**

---

## 🏗️ Phase 1: Project Setup & Foundation

**Goal**: Set up NextJS project with TanStack Query and Zustand

### ToDos:
- [x] Initialize NextJS project with TypeScript and Tailwind
- [x] Install required dependencies (TanStack Query, Zustand, Stripe)
- [x] Set up project folder structure
- [x] Configure TanStack Query client
- [x] Set up Tailwind with custom color palette
- [x] Create TypeScript interfaces for Product and CartItem
- [x] Set up basic layout component
- [x] Create sample product data (JSON file)
- [x] Test that dev server runs without errors

### Commands:
```bash
npx create-next-app@latest ecommerce-poc --typescript --tailwind --eslint --app --src-dir
cd ecommerce-poc
npm install @tanstack/react-query @tanstack/react-query-devtools zustand stripe @stripe/stripe-js
```

### Key Files to Create:
- [x] `src/types/index.ts` - TypeScript interfaces
- [x] `src/lib/queryClient.ts` - TanStack Query setup
- [x] `tailwind.config.js` - Custom colors
- [x] `public/api/products.json` - Sample data
- [x] `src/app/layout.tsx` - Root layout with providers

### Deliverable:
✅ **Clean NextJS app that starts without errors with all dependencies installed**

---

## 🛍️ Phase 2: User Story 1 - Product Selection & Add to Cart

**Goal**: User can view product and add it to cart with quantity selection

### ToDos:

#### 2.1 Zustand Cart Store
- [x] Create `src/stores/cartStore.ts`
- [x] Implement cart state interface (items, total, itemCount, isLoading)
- [x] Add cart actions (addItem, removeItem, updateQuantity, clearCart)
- [x] Set up localStorage persistence
- [x] Create optimized selectors (useCartCount, useCartItems, etc.)
- [x] Test store actions work correctly

#### 2.2 Product Data Fetching
- [x] Create `src/hooks/useProducts.ts` with TanStack Query
- [x] Set up API route `src/app/api/products/route.ts`
- [x] Implement product fetching with caching
- [x] Test product data loads correctly

#### 2.3 UI Components
- [x] Create `src/components/ui/Button.tsx` (reusable button)
- [x] Create `src/components/ui/Counter.tsx` (quantity selector)
- [x] Create `src/components/ui/LoadingSpinner.tsx`
- [x] Test all UI components render correctly

#### 2.4 Product Display
- [ ] Create `src/components/product/ProductCard.tsx`
- [ ] Create `src/components/product/ProductGallery.tsx`
- [ ] Create `src/components/product/ProductInfo.tsx`
- [ ] Create `src/components/product/AddToCart.tsx`
- [ ] Update `src/app/page.tsx` to display products

#### 2.5 Add to Cart Functionality
- [ ] Implement quantity selection in AddToCart component
- [ ] Add loading states during cart operations
- [ ] Show success message when item added
- [ ] Test adding different quantities
- [ ] Test adding same product multiple times
- [ ] Verify cart persistence across page refreshes

### Acceptance Criteria:
- [ ] User can see product details (image, name, price, description)
- [ ] User can select quantity with +/- buttons
- [ ] User can click "Add to Cart" and see loading state
- [ ] User sees success confirmation after adding
- [ ] Cart data persists in localStorage
- [ ] Multiple items can be added to cart

### Deliverable:
✅ **Working product page where users can add items to cart**

---

## 🛒 Phase 3: User Story 2 - Cart Management

**Goal**: User can view, modify, and manage cart contents

### ToDos:

#### 3.1 Header & Cart Button
- [x] Create `src/components/layout/Header.tsx`
- [x] Create `src/components/cart/CartButton.tsx`
- [x] Add cart icon with item counter badge
- [x] Implement cart dropdown toggle
- [x] Add bounce animation to cart counter when items added
- [x] Update layout to include header

#### 3.2 Cart Dropdown
- [x] Create `src/components/cart/CartDropdown.tsx`
- [x] Implement dropdown positioning and styling
- [x] Add click-outside-to-close functionality
- [x] Create empty cart state with appropriate messaging
- [x] Add cart summary with total price
- [x] Test dropdown opens/closes correctly

#### 3.3 Cart Item Management
- [x] Create `src/components/cart/CartItem.tsx`
- [x] Display item image, name, price, and quantity
- [x] Implement quantity editing within cart
- [x] Add remove item functionality
- [x] Show loading states during cart updates
- [x] Test quantity changes update total correctly

#### 3.4 Cart State Management
- [x] Test cart updates work smoothly
- [x] Verify cart counter updates immediately
- [x] Test removing items from cart
- [x] Test cart persistence across browser sessions
- [x] Handle edge cases (removing last item, etc.)

### Acceptance Criteria:
- [x] Cart icon shows current item count
- [x] Cart dropdown opens when icon clicked
- [x] All cart items display with correct information
- [x] User can modify quantities directly in cart
- [x] User can remove items from cart
- [x] Total price calculates correctly
- [x] Empty cart shows appropriate message
- [x] Cart persists across browser sessions

### Deliverable:
✅ **Fully functional cart management system**

---

## 💳 Phase 4: User Story 3 - Quick Checkout

**Goal**: User can quickly complete their order (Demo Mode)

### ToDos:

#### 4.1 Checkout Page
- [x] Create `src/app/checkout/page.tsx`
- [x] Display order summary with all cart items
- [x] Show total price prominently
- [x] Add purchase button
- [x] Implement loading states during processing
- [x] Redirect empty cart to homepage
- [x] Add demo mode notice

#### 4.2 Success Page
- [x] Create `src/app/checkout/success/page.tsx`
- [x] Clear cart after successful order
- [x] Display order confirmation
- [x] Show demo mode notice
- [x] Add links to continue shopping

#### 4.3 Order Flow Testing
- [x] Test complete order flow
- [x] Test success page redirection
- [x] Test cart clearing after order
- [x] Verify empty cart redirection
- [x] Test continue shopping links

### Acceptance Criteria:
- [x] User can proceed to checkout from cart
- [x] Checkout page shows complete order summary
- [x] User can complete demo purchase
- [x] Success page displays order confirmation
- [x] Cart is cleared after successful payment
- [x] Payment errors are handled gracefully
- [x] User can retry failed payments

### Deliverable:
✅ **Complete payment system with Stripe integration**

---

## 🧪 Phase 5: Testing & Polish

**Goal**: Ensure everything works smoothly and handle edge cases

### ToDos:

#### 5.1 User Experience Testing
- [ ] Test complete user journey (browse → add → pay)
- [ ] Test on mobile devices (responsive design)
- [ ] Test cart persistence across browser tabs
- [ ] Test with multiple products and quantities
- [ ] Test edge cases (empty cart, network errors, etc.)
- [ ] Verify loading states are smooth and informative

#### 5.2 Error Handling
- [ ] Add error boundaries for React components
- [ ] Handle network failures gracefully
- [ ] Add retry mechanisms for failed operations
- [ ] Test offline behavior
- [ ] Add proper error messages for users

#### 5.3 Performance Optimization
- [ ] Optimize images with Next.js Image component
- [ ] Implement proper loading states
- [ ] Check bundle size and optimize if needed
- [ ] Test page load speeds
- [ ] Verify TanStack Query caching works correctly

#### 5.4 Accessibility
- [ ] Add proper ARIA labels to interactive elements
- [ ] Test keyboard navigation
- [ ] Ensure proper color contrast
- [ ] Add screen reader support
- [ ] Test with accessibility tools

#### 5.5 Code Quality
- [ ] Add TypeScript strict mode if not enabled
- [ ] Fix any TypeScript errors or warnings
- [ ] Add JSDoc comments to complex functions
- [ ] Review code for potential improvements
- [ ] Ensure consistent code formatting

### Acceptance Criteria:
- [ ] All user stories work end-to-end
- [ ] No console errors or warnings
- [ ] Responsive design works on all screen sizes
- [ ] Accessibility requirements met
- [ ] Performance is smooth and fast
- [ ] Error states are user-friendly

### Deliverable:
✅ **Polished, production-ready PoC**

---

## 🚀 Phase 6: Deployment

**Goal**: Deploy the PoC to production

### ToDos:

#### 6.1 Environment Configuration
- [ ] Set up Vercel account
- [ ] Configure environment variables in Vercel
- [ ] Set up custom domain (optional)
- [ ] Configure build settings

#### 6.2 Deployment
- [ ] Connect GitHub repository to Vercel
- [ ] Deploy to production
- [ ] Test production deployment
- [ ] Verify Stripe webhooks work (if implemented)
- [ ] Test payment flow in production

#### 6.3 Monitoring & Analytics
- [ ] Set up Vercel Analytics (optional)
- [ ] Add basic error monitoring

---

## 📋 Quick Reference Checklist

### User Story Completion:
- [x] ✅ User can select and add items to cart
- [x] ✅ User can view and manage cart contents  
- [x] ✅ User can quickly pay for selected products
- [ ] ✅ User can select and add items to cart
- [ ] ✅ User can view and manage cart contents  
- [ ] ✅ User can quickly pay for selected products

### Technical Stack:
- [ ] ✅ NextJS 14+ with App Router
- [ ] ✅ TypeScript throughout
- [ ] ✅ TanStack Query for server state
- [ ] ✅ Zustand for client state
- [ ] ✅ Stripe for payments
- [ ] ✅ Tailwind CSS for styling

### Key Features:
- [ ] ✅ Product browsing and selection
- [ ] ✅ Quantity selection with counter
- [ ] ✅ Cart persistence across sessions
- [ ] ✅ Real-time cart updates
- [ ] ✅ Secure payment processing
- [ ] ✅ Order confirmation
- [ ] ✅ Responsive design
- [ ] ✅ Loading states and error handling

---

## 🎯 Success Metrics

### Technical:
- [ ] Page load time < 2 seconds
- [ ] No console errors
- [ ] 100% TypeScript coverage
- [ ] Lighthouse score > 90

### User Experience:
- [ ] Complete user journey works smoothly
- [ ] Cart updates are instantaneous
- [ ] Payment flow is intuitive
- [ ] Mobile experience is excellent

**Estimated Total Time: 3-5 days** (depending on experience level)

Each phase builds upon the previous one, so complete them in order. You can check off ToDos as you complete them to track your progress!
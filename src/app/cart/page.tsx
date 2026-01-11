'use client'

import Link from 'next/link'
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Premium Cotton Shirt',
      price: 89.99,
      originalPrice: 119.99,
      quantity: 2,
      size: 'M',
      color: 'Black',
      image: '/images/product-1.jpg'
    },
    {
      id: '2',
      name: 'Designer Handbag',
      price: 299.99,
      quantity: 1,
      size: 'One Size',
      color: 'Brown',
      image: '/images/product-2.jpg'
    },
    {
      id: '3',
      name: 'Casual Sneakers',
      price: 149.99,
      quantity: 1,
      size: '42',
      color: 'White',
      image: '/images/product-3.jpg'
    }
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-primary mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some items to your cart to get started</p>
          <Link
            href="/"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Shopping Cart</h1>
          <p className="text-gray-600">{cartItems.length} items in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">P</span>
                      </div>
                      <p className="text-gray-600 text-xs">Product</p>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Size: {item.size}</p>
                      <p>Color: {item.color}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-primary">Rs {item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">Rs {item.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end space-y-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 border border-gray-300 rounded hover:border-primary"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-3 py-1 border border-gray-300 rounded font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 border border-gray-300 rounded hover:border-primary"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700 flex items-center space-x-1 text-sm"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-right">
                    <span className="font-semibold text-gray-900">
                      Item Total: Rs {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-primary mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">Rs {subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `Rs ${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">Rs {tax.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">Rs {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center mt-6"
              >
                Proceed to Checkout
              </Link>
            </div>

            {/* Promo Code */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Promo Code</h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Apply
                </button>
              </div>
            </div>

            {/* Continue Shopping */}
            <Link
              href="/"
              className="block w-full text-center text-primary hover:text-primary/80 font-semibold py-3 border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
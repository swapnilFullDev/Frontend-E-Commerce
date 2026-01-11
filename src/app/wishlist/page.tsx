'use client'

import Link from 'next/link'
import { Heart, ShoppingCart, X } from 'lucide-react'
import { useState } from 'react'

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: '1',
      name: 'Premium Cotton Shirt',
      price: 89.99,
      originalPrice: 119.99,
      image: '/images/product-1.jpg',
      inStock: true
    },
    {
      id: '2',
      name: 'Designer Handbag',
      price: 299.99,
      image: '/images/product-2.jpg',
      inStock: true
    },
    {
      id: '3',
      name: 'Casual Sneakers',
      price: 149.99,
      image: '/images/product-3.jpg',
      inStock: false
    }
  ])

  const removeFromWishlist = (id: string) => {
    setWishlistItems(items => items.filter(item => item.id !== id))
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-primary mb-4">Your Wishlist is Empty</h1>
          <p className="text-gray-600 mb-8">Save items you love to your wishlist</p>
          <Link
            href="/"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">My Wishlist</h1>
          <p className="text-gray-600">{wishlistItems.length} items saved</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <div className="relative">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">Product Image</span>
                </div>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                >
                  <X className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-lg font-bold text-primary">Rs {item.price}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">Rs {item.originalPrice}</span>
                  )}
                </div>

                {item.inStock ? (
                  <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                ) : (
                  <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-semibold cursor-not-allowed">
                    Out of Stock
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
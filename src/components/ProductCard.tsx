'use client'

import Link from 'next/link'
import { Star, Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  image: string
  category: string
  isRental?: boolean
  rentalPrice?: number
}

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  return (
    <Link
      href={`/product/${product.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square bg-gray-200 flex items-center justify-center relative overflow-hidden">
          <div className="text-center p-6">
            <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-3xl font-bold">
                {product.name.charAt(0)}
              </span>
            </div>
            <p className="text-gray-600 text-sm">Product Image</p>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Heart
              className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>

          {/* Quick Add to Cart */}
          <button className="absolute bottom-4 left-4 right-4 bg-primary text-white py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-sm font-medium">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
          </div>

          {/* Price */}
          <div className="space-y-1">
            {product.isRental ? (
              <div className="flex flex-col">
                <span className="text-sm text-orange-600 font-medium">Available for Rent</span>
                <span className="text-lg font-bold text-primary">
                  Rs {product.rentalPrice}/month
                </span>
                <span className="text-xs text-gray-500">
                  Buy: Rs {product.price}
                </span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-primary">
                  Rs {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    Rs {product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
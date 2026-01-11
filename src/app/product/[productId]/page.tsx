'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Star, Heart, Share2, Truck, Shield, RotateCcw, Minus, Plus } from 'lucide-react'
import ImageGallery from '@/components/ImageGallery'

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.productId as string
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState('black')
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Mock product data
  const product = {
    id: productId,
    name: 'Premium Cotton Shirt',
    price: 8999,
    originalPrice: 11999,
    rating: 4.8,
    reviewCount: 124,
    description: 'Crafted from the finest Egyptian cotton, this premium shirt offers unparalleled comfort and style. Perfect for both casual and formal occasions.',
    features: [
      '100% Egyptian Cotton',
      'Machine washable',
      'Regular fit',
      'Button-down collar',
      'Long sleeves'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', value: 'black', hex: '#000000' },
      { name: 'White', value: 'white', hex: '#FFFFFF' },
      { name: 'Navy', value: 'navy', hex: '#000080' },
      { name: 'Gray', value: 'gray', hex: '#808080' }
    ],
    images: [
      '/images/product-main.jpg',
      '/images/product-1.jpg',
      '/images/product-2.jpg',
      '/images/product-3.jpg'
    ]
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change))
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name} to cart!`)
  }

  const handleRentNow = () => {
    alert(`Rent ${product.name} for 30 days!`)
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="text-gray-500 hover:text-primary">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/category/men" className="text-gray-500 hover:text-primary">Men</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-primary font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <ImageGallery images={product.images} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-primary">Rs {product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">Rs {product.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color.value ? 'border-primary' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-300 text-gray-700 hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-2 border border-gray-300 rounded-lg hover:border-primary"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border border-gray-300 rounded-lg font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-2 border border-gray-300 rounded-lg hover:border-primary"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                Add to Cart - Rs {(product.price * quantity).toFixed(2)}
              </button>

              <button
                onClick={handleRentNow}
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center"
              >
                Rent Now - Rs {(product.price * 0.3).toFixed(2)}/month
              </button>
            </div>

            {/* Wishlist & Share */}
            <div className="flex space-x-4">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                  isWishlisted
                    ? 'border-red-500 text-red-500 bg-red-50'
                    : 'border-gray-300 text-gray-700 hover:border-primary'
                }`}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                <span>{isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
              </button>

              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-primary">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>

            {/* Shipping Info */}
            <div className="space-y-3 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Truck className="h-5 w-5 text-primary" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Shield className="h-5 w-5 text-primary" />
                <span>2-year warranty included</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mock related products */}
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-4">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-600">Product {i + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Related Product {i + 1}</h3>
                <p className="text-primary font-bold">$89.99</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
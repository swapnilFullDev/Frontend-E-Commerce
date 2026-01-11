'use client'

import Link from 'next/link'
import { Search, Heart, ShoppingCart, User, Menu } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { id: 'men', name: 'Men' },
    { id: 'women', name: 'Women' },
    { id: 'kids', name: 'Kids' },
    { id: 'accessories', name: 'Accessories' }
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className='dancing-script text-primary font-bold text-3xl'>Attire Bandhan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for perfect attire..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Search className="h-5 w-5 text-gray-600" />
            </button>

            {/* Wishlist */}
            <Link href="/wishlist" className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Heart className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-lg relative">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </Link>

            {/* Profile */}
            <Link href="/profile" className="p-2 hover:bg-gray-100 rounded-lg">
              <User className="h-5 w-5 text-gray-600" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { SlidersHorizontal, Grid, List } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import FilterSidebar from '@/components/FilterSidebar'

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.categoryId as string
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const categoryNames = {
    men: 'Men',
    women: 'Women',
    kids: 'Kids',
    accessories: 'Accessories'
  }

  const categoryName = categoryNames[categoryId as keyof typeof categoryNames] || 'Category'

  // Mock products for the category
  const products = Array.from({ length: 24 }, (_, i) => ({
    id: `${categoryId}-${i + 1}`,
    name: `${categoryName} Product ${i + 1}`,
    price: Math.floor(Math.random() * 200) + 50,
    originalPrice: Math.random() > 0.7 ? Math.floor(Math.random() * 300) + 100 : undefined,
    rating: 4 + Math.random(),
    image: `/images/${categoryId}-product-${i + 1}.jpg`,
    category: categoryId || 'all'
  }))

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ]

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="text-gray-500 hover:text-primary">Home</a>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-primary font-medium">{categoryName}</li>
          </ol>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">{categoryName}</h1>
          <p className="text-gray-600">
            Discover our premium {categoryName.toLowerCase()} collection featuring the latest trends and timeless classics.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(true)}
              className="flex items-center space-x-2 bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <SlidersHorizontal className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{products.length} products</span>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-4">
              <FilterSidebar />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
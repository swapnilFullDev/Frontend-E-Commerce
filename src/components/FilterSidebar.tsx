'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FilterSidebar = () => {
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    size: true,
    color: true,
    type: false,
    brand: false
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const priceRanges = [
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: '$200 - $500', value: '200-500' },
    { label: 'Over $500', value: '500+' }
  ]

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Gray', hex: '#808080' },
    { name: 'Navy', hex: '#000080' },
    { name: 'Red', hex: '#FF0000' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Green', hex: '#008000' },
    { name: 'Beige', hex: '#F5F5DC' }
  ]

  const types = ['Buy', 'Rent']
  const brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E']

  return (
    <div className="space-y-6">
      {/* Price Range */}
      <div className="border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
        >
          Price Range
          {expandedSections.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.price && (
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.value} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="ml-2 text-sm text-gray-700">{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Size */}
      <div className="border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection('size')}
          className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
        >
          Size
          {expandedSections.size ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.size && (
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:border-primary hover:text-primary transition-colors"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Color */}
      <div className="border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection('color')}
          className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
        >
          Color
          {expandedSections.color ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.color && (
          <div className="grid grid-cols-4 gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-primary transition-colors"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        )}
      </div>

      {/* Buy/Rent */}
      <div className="border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection('type')}
          className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
        >
          Type
          {expandedSections.type ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.type && (
          <div className="space-y-2">
            {types.map((type) => (
              <label key={type} className="flex items-center">
                <input type="radio" name="type" value={type.toLowerCase()} className="text-primary focus:ring-primary" />
                <span className="ml-2 text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brand */}
      <div className="border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection('brand')}
          className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
        >
          Brand
          {expandedSections.brand ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.brand && (
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="ml-2 text-sm text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Apply Filters Button */}
      <div className="pt-4">
        <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Apply Filters
        </button>
        <button className="w-full mt-2 text-gray-600 py-2 hover:text-primary transition-colors">
          Clear All Filters
        </button>
      </div>
    </div>
  )
}

export default FilterSidebar
import Link from 'next/link'
import ProductCard from './ProductCard'

const ProductSections = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Premium Cotton Shirt',
      price: 8999,
      originalPrice: 11999,
      rating: 4.8,
      image: '/images/product-1.jpg',
      category: 'men'
    },
    {
      id: '2',
      name: 'Elegant Evening Dress',
      price: 19999,
      originalPrice: 24999,
      rating: 4.9,
      image: '/images/product-2.jpg',
      category: 'women'
    },
    {
      id: '3',
      name: 'Designer Handbag',
      price: 29999,
      rating: 4.7,
      image: '/images/product-3.jpg',
      category: 'accessories'
    },
    {
      id: '4',
      name: 'Kids Denim Jacket',
      price: 7999,
      rating: 4.6,
      image: '/images/product-4.jpg',
      category: 'kids'
    }
  ]

  const newArrivals = [
    {
      id: '5',
      name: 'Silk Blouse',
      price: 12999,
      rating: 4.8,
      image: '/images/product-5.jpg',
      category: 'women'
    },
    {
      id: '6',
      name: 'Leather Wallet',
      price: 4999,
      rating: 4.5,
      image: '/images/product-6.jpg',
      category: 'accessories'
    },
    {
      id: '7',
      name: 'Casual Sneakers',
      price: 14999,
      rating: 4.7,
      image: '/images/product-7.jpg',
      category: 'men'
    },
    {
      id: '8',
      name: 'Kids T-Shirt Set',
      price: 3999,
      rating: 4.6,
      image: '/images/product-8.jpg',
      category: 'kids'
    }
  ]

  const rentalProducts = [
    {
      id: 'rental-1',
      name: 'Designer Wedding Dress',
      price: 89999,
      rentalPrice: 24999,
      rating: 4.9,
      image: '/images/rental-1.jpg',
      category: 'dresses',
      isRental: true
    },
    {
      id: 'rental-2',
      name: 'Premium Suit Set',
      price: 59999,
      rentalPrice: 14999,
      rating: 4.8,
      image: '/images/rental-2.jpg',
      category: 'men',
      isRental: true
    },
    {
      id: 'rental-3',
      name: 'Evening Gown',
      price: 45999,
      rentalPrice: 12999,
      rating: 4.9,
      image: '/images/rental-3.jpg',
      category: 'women',
      isRental: true
    },
    {
      id: 'rental-4',
      name: 'Cocktail Dress',
      price: 34999,
      rentalPrice: 9999,
      rating: 4.7,
      image: '/images/rental-4.jpg',
      category: 'dresses',
      isRental: true
    }
  ]

  return (
    <div className="space-y-16">
      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Featured Products</h2>
              <p className="text-gray-600">Discover our most popular and highly rated items</p>
            </div>
            <Link
              href="/category/all"
              className="text-primary hover:text-primary/80 font-semibold flex items-center"
            >
              View All
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">New Arrivals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be the first to explore our latest collection of premium fashion pieces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/category/new-arrivals"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center"
            >
              Explore New Arrivals
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Rental Collection */}
      <section className="py-16 bg-linear-to-r from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">New Rental Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access premium fashion without the commitment. Rent designer pieces for special occasions, events, or just to try something new.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/category/rentals"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center"
            >
              Browse All Rentals
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductSections
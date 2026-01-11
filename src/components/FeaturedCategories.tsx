import Link from 'next/link'

const FeaturedCategories = () => {
  const categories = [
    {
      id: 'women',
      name: 'Women',
      image: '/images/women-category.jpg',
      description: 'Elegant dresses, blouses, and accessories'
    },
    {
      id: 'men',
      name: 'Men',
      image: '/images/men-category.jpg',
      description: 'Sophisticated suits, shirts, and trousers'
    },
    {
      id: 'kids',
      name: 'Kids',
      image: '/images/kids-category.jpg',
      description: 'Comfortable and stylish clothing for children'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      image: '/images/accessories-category.jpg',
      description: 'Bags, jewelry, shoes, and more'
    },
    {
      id: 'dresses',
      name: 'Dresses',
      image: '/images/dresses-category.jpg',
      description: 'Stunning dresses for every occasion'
    },
    {
      id: 'shoes',
      name: 'Shoes',
      image: '/images/shoes-category.jpg',
      description: 'Comfortable and stylish footwear'
    },
    {
      id: 'jewelry',
      name: 'Jewelry',
      image: '/images/jewelry-category.jpg',
      description: 'Elegant jewelry and accessories'
    },
    {
      id: 'sportswear',
      name: 'Sportswear',
      image: '/images/sportswear-category.jpg',
      description: 'Active wear for fitness and sports'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every style and occasion
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 bg-gray-200"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center relative">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-2xl font-bold">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories
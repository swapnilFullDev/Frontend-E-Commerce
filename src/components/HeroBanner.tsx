import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-cream to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Elevate Your Style with
                <span className="block text-3xl lg:text-5xl mt-2">Premium Fashion</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Discover our curated collection of premium clothing and accessories.
                Quality craftsmanship meets modern design for the discerning fashion enthusiast.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/category/women"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center group"
              >
                Shop Women
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/category/men"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center"
              >
                Shop Men
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600">Brands</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">L</span>
                    </div>
                    <p className="text-gray-600">Hero Image Placeholder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
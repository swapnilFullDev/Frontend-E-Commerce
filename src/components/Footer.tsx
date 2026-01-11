import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            {/* <div className="text-2xl font-bold">LUXE</div> */}
            <span className='dancing-script text-primary font-bold text-3xl'>Attire Bandhan</span>
            <p className="text-gray-300 text-sm">
              Premium fashion for the modern lifestyle. Discover your perfect style with our curated collection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/category/men" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Men
              </Link>
              <Link href="/category/women" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Women
              </Link>
              <Link href="/category/kids" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Kids
              </Link>
              <Link href="/category/accessories" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Accessories
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <div className="space-y-2">
              <Link href="/profile" className="block text-gray-300 hover:text-white transition-colors text-sm">
                My Account
              </Link>
              <Link href="/cart" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Shopping Cart
              </Link>
              <Link href="/wishlist" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Wishlist
              </Link>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Size Guide
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Shipping Info
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-300" />
                <span className="text-gray-300 text-sm">+91 9993217578</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-300" />
                <span className="text-gray-300 text-sm">support@attirebandhan.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-300" />
                <span className="text-gray-300 text-sm">9A, Swastik nagar MOG line, Indore, 452009</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Attire Bandhan Fashion. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
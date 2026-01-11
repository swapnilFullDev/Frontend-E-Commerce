'use client'

import { useState } from 'react'

interface ImageGalleryProps {
  images: string[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">P</span>
            </div>
            <p className="text-gray-600">Product Image {selectedImage + 1}</p>
          </div>
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-4 overflow-x-auto">
        {images.map((_image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden border-2 ${
              selectedImage === index ? 'border-primary' : 'border-transparent'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-1 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-600 text-xs">Img {index + 1}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
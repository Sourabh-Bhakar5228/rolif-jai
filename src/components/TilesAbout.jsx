import React from 'react'

const TilesAbout = ({
  image = ""
}) => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-main-color leading-snug">
          Elevate Your Space with  
          <span className="text-gray-600 block text-3xl"> Premium Tiles</span>
        </h2>
        <p className="text-gray-600 text-main-size">
        Transform your home with the timeless elegance and durability of Sumani Tiles. Our exquisite tile collection blends modern aesthetics with unmatched craftsmanship, creating spaces that reflect sophistication and style.

From sleek, contemporary designs to classic textures, our tiles are engineered for lasting beauty and performance. Whether for floors, walls, or statement accents, Sumani Tiles bring luxury and functionality to every corner of your home.
        </p>
        <button className="px-3 py-1 bg-red-300 text-[14px] cursor-pointer text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all">
          Explore Collection
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2">
        <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-xl">
          <img
            src={image}
            alt="Furniture"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default TilesAbout
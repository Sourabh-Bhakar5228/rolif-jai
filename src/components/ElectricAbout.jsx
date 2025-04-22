import React from 'react'

const ElectricAbout = () => {
  return (
    
    <div className="bg-gray-100 py-16 px-6 md:px-16">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-main-color leading-snug">
          Discover Our 
          <span className="text-gray-600 block text-3xl"> Electric Components</span>
        </h2>
        <p className="text-gray-600 text-main-size">
          Discover timeless elegance and modern comfort with our exclusive furniture collection. Designed for sophistication, crafted for comfort. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, iure corporis laboriosam voluptas provident nam eveniet inventore eligendi praesentium culpa corrupti, labore eius consequatur et, fugit voluptatibus. Dolores, ea qui tempore minus quia iusto eius ullam perspiciatis aspernatur nemo fuga?
        </p>
        <button className="px-3 py-1 cursor-pointer text-main-size bg-red-300 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all">
          Explore Collection
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2">
        <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-xl">
          <img
            src="https://www.phantomlighting.com/wp-content/uploads/2022/01/art-lightening.gif"
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

export default ElectricAbout
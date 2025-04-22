import React from 'react'

const FurnitureGrid = ({
  image = "",
  products = []
}) => {

  // const products = [
  //     { id: 1, img: "/images/f2.jpg", name: "Stylish Floating Wall Shelves" },
  //     { id: 2, img: "/images/f2.jpg", name: "Premium King-Size Upholstered Bed" },
  //     { id: 3, img: "/images/f2.jpg", name: "Multi-Purpose Wardrobe" },
  //     { id: 4, img: "/images/f2.jpg", name: "Modern Minimalist Coffee Table" },
  //     { id: 5, img: "/images/f2.jpg", name: "Luxury Recliner Sofa" },
  //     { id: 6, img: "/images/f2.jpg", name: "Elegant Wooden Dining Set" },
  //   ];


  return (
    <>
      <img src={image} alt="" className='w-full' />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-4">
        {products.map((product) => (
          <div key={product.id} className="p-2 bg-blend-lighten  rounded-lg">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-2 text-center font-semibold text-main-size">{product.name}</h3>
          </div>
        ))}
      </div>
    </>

  )
}

export default FurnitureGrid
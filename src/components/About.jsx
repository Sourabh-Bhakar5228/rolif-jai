import React from 'react'

const About = ({ title, content, image, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-8 my-12`}>
    <div className="md:w-1/2">
      <img src={image} alt={title} className="w-full h-auto rounded-lg shadow-lg" />
    </div>
    <div className="md:w-1/2 text-left px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  </div>
  )
}

export default About;
import React from 'react'

const OurProcess = () => {

    const steps = [
        {
          title: "Consultation & Requirement Analysis",
          description:
            "We begin by understanding your specific needs and project requirements. Our team works closely with you to recommend the best products for your space or project.",
        },
        {
          title: "Product Selection & Customization",
          description:
            "After selecting the products that suit your needs, we can also provide customizations to meet your exact specifications.",
        },
        {
          title: "Order Placement & Delivery",
          description:
            "Once the order is confirmed, we ensure a smooth delivery process. We track your order to guarantee timely arrival and product quality.",
        },
        {
          title: "Installation Assistance",
          description:
            "For electrical items, we offer expert guidance on installation, and we provide recommendations for professional installation services if needed.",
        },
        {
          title: "Post-Sale Support",
          description:
            "We offer reliable post-sale services, including warranty support and assistance with any issues you may encounter.",
        },
      ];


  return (
   <>
   <section className="bg-gradient-to-r from-white to-gray-100 py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <h5 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          OUR PROCESS
        </h5>
        <div className="relative border-l-4 border-gray-300 pl-6 space-y-14">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative pl-10 sm:pl-16 transition-all duration-300"
            >
              <div className="absolute -left-6 top-1.5 w-12 h-12 bg-white border-4 border-gray-800 rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                <span className="text-lg font-semibold text-gray-800">
                  {index + 1}
                </span>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 group-hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   
   </>
  )
}

export default OurProcess
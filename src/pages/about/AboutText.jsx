import React from 'react'
import About from '../../components/About.jsx'
const AboutText = () => {
  return (
    <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">ROLIF INDIA – Where Vision Becomes Design, and Design Becomes Reality.</h1>

    <About
      title="Interior & Fit-Out Works"
      content="At ROLIF INDIA, we specialize in delivering tailor-made interior and fit-out solutions that turn your unique vision into a beautifully crafted reality. Whether it's a residential, commercial, or corporate space, our expert team combines creativity, functionality, and precision to create environments that inspire and perform. From concept development and space planning to material selection and final execution, every project is handled with meticulous attention to detail. We focus on quality craftsmanship, efficient timelines, and seamless execution, ensuring a hassle-free experience. Let us help you transform ordinary spaces into extraordinary settings that reflect your style, brand, and purpose."
      image="/images/f2.jpg"
      reverse={false}
    />

    <About
      title="Residential Interior Design"
      content={<>
      <p>
      From stunning living rooms to serene bedrooms and functional kitchens, we bring comfort, elegance, and personality to every corner of your home. Whether you're refreshing a single room or undertaking a full home renovation, our expert designers blend aesthetics with functionality to match your lifestyle.

We specialize in:
      </p>
      <li><b>Living Rooms:</b> Creating stylish, inviting spaces perfect for relaxing or entertaining guests.</li>
      <li><b>Bed Rooms:</b>  Designing peaceful sanctuaries tailored to your comfort and style preferences.</li>
      <li><b>Kitchens:</b>   Building practical, modern kitchens that inspire culinary creativity and family gatherings.</li>
      <li><b> Dining Areas, Bathrooms & More:</b> Every detail thoughtfully planned and beautifully executed.  </li>

     
      </>}
       image="/images/f3.jpg"
      reverse={true}
    />

    <About
      title="Commercial & Office Fit-Out"
      content="We design offices that drive productivity and retail spaces that inspire. Whether you're a startup or a corporate giant, we provide professional interiors tailored to your brand identity. Our commercial fit-outs are strategically planned to enhance workflow, boost team morale, and make a lasting impression on clients and visitors alike. From open-plan workspaces and executive suites to reception areas, conference rooms, and retail displays — every element is thoughtfully designed to reflect your company’s culture and values. We also ensure practical considerations like lighting, acoustics, and ergonomics are integrated seamlessly into the design. With our end-to-end solutions, we transform commercial spaces into dynamic environments where innovation and collaboration thrive."
      image="/images/f4.jpg"
      reverse={false}
    />

    <About
      title="Hospitality & Restaurant Interiors"
      content="We create memorable experiences with restaurant and hotel interiors that combine ambiance, comfort, and functionality — aligned with your brand and customer expectations. From cozy cafés and boutique hotels to fine dining restaurants and luxury resorts, we craft spaces that not only look stunning but also enhance the overall guest experience. Our designs consider every detail — from lighting and acoustics to furniture layout, material selection, and flow of movement — ensuring that every guest feels welcomed and at ease. Whether it’s creating an inviting atmosphere for casual dining or a sophisticated vibe for upscale hospitality, we tailor each project to reflect your brand's personality and story. We work closely with chefs, restaurateurs, and hospitality owners to bring their vision to life, turning ordinary spaces into unforgettable destinations that drive return visits and positive reviews."
     image="/images/f5.jpg"
      reverse={true}
    />

    <About
      title="MEP Services (Mechanical, Electrical, Plumbing)"
      content={
        <>
    <p> Reliable electrical, plumbing, and HVAC systems — seamlessly integrated into your design. We ensure safety, energy efficiency, and comfort across all property types. Our MEP services include:</p>
       
<li><b>Mechanical Systems (HVAC):</b> Design and installation of efficient heating, ventilation, and air conditioning systems tailored to building size and usage.</li>

<li><b>Electrical Systems: </b>Safe and scalable power distribution, lighting design, energy-saving solutions, and smart automation integration.</li>


<li><b>Energy Efficiency:</b> Sustainable design practices that lower utility costs and support green building certifications.</li>

<li><b>System Coordination:</b> MEP solutions planned in harmony with architectural and interior design for a seamless, aesthetic outcome.</li>

<p>We handle everything from concept to execution — ensuring your systems are not just functional, but future-ready.</p>


        
        </>
      }
   image="/images/f6.jpg"
      reverse={false}
    />
  </div>
  )
}

export default AboutText;
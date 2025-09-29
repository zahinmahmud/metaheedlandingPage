import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
           <section
  className="relative bg-cover bg-center bg-fixed text-blue-300"
  style={{
    backgroundImage: "url('https://images.pexels.com/photos/8533756/pexels-photo-8533756.jpeg')",
  }}id='about'>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative max-w-5xl mx-auto px-6 py-32 text-center flex flex-col items-center justify-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">Empowering Innovation</h2>
    <h3 className="text-2xl md:text-3xl font-medium mb-6">with Transformative Solutions</h3>
    <p className="text-base md:text-lg max-w-3xl">
      MetaHeed Limited is driving the future with transformative solutions that empower innovation across industries. By blending cutting-edge technology with visionary strategies, we unlock new opportunities for growth and impact. At MetaHeed, we don't just adapt to change — we lead it.
    </p>
    <div className="mt-8 flex space-x-4">
      <a
        href="#"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium shadow-lg transition"
      >
        Learn More
      </a>
      <a
        href="#"
        className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>


        );
    }
}

export default About;
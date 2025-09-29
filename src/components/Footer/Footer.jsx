import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <>
            <footer className="bg-black text-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
    
    {/* About Section */}
    <div>
      <h2 className="text-2xl font-bold mb-4">MetaHeed</h2>
      <p className="text-gray-300">
        At MetaHeed, we redefine business strategy through AI-driven solutions, cloud consulting, and cybersecurity, enabling sustainable growth in a digital landscape.
      </p>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
      <ul className="space-y-2 text-gray-300">
        <li>
          <span className="font-medium">Email:</span> contact@metaheed.com
        </li>
        <li>
          <span className="font-medium">Phone:</span> +880 1901 635511
        </li>
      </ul>
    </div>

    {/* Addresses */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Addresses</h3>
      <div className="text-gray-300 space-y-4">
        <div>
          <span className="font-medium">UK Reach:</span>
          <p>96 Ilford Lane, Ilford IG1 2LD, UK</p>
        </div>
        <div>
          <span className="font-medium">Dhaka Reach:</span>
          <p>32 Road 1/A Niketan, Gulshan 1, Dhaka 1212, Bangladesh</p>
        </div>
      </div>
    </div>
    
  </div>

  {/* Footer Bottom */}
  <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
    &copy; {new Date().getFullYear()} MetaHeed. All rights reserved.
  </div>
</footer>
</>
        );
    }
}

export default Footer;
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header className="bg-blue-600 text-white shadow">
                <div className="container mx-auto flex items-center justify-between p-4">
                    {/* Logo */}
                    <div id="logo">
                        <img src="https://metaheed.com/wp-content/uploads/2025/03/metaheed.png" alt="Metaheed" className="w-12 h-12 rounded-full" />
                    </div>

                    {/* Navigation Links */}
                    <nav>
                        <ul className="flex space-x-6 text-lg">
                            <li>
                                <a href="/" className="hover:text-gray-200">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-gray-200">About</a>
                            </li>
                            <li>
                                <a href="#section" className="hover:text-gray-200">Section</a>
                            </li>
                            <li>
                                <a href="#client" className="hover:text-gray-200">Client</a>
                            </li>
                        </ul>
                    </nav>

                    {/* Optional Button */}
                    <div>
                        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
                            Contact
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}
export default Navbar;
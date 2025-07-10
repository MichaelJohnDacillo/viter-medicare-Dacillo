import React from 'react'
import { FaClinicMedical } from 'react-icons/fa';

const Header = () => {
  return (
    <>
        {/* Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <FaClinicMedical className="text-blue-600 text-2xl"/>
                        <span className="font-bold text-xl text-blue-800">Medicare+</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className='text-blue-800 font-medium hover:text-blue-600'>Home</a>
                        <a href="#services" className='text-blue-800 font-medium hover:text-blue-600'>Services</a>
                        <a href="#doctors" className='text-blue-800 font-medium hover:text-blue-600'>Doctors</a>
                        <a href="#emergency" className='text-blue-800 font-medium hover:text-blue-600'>Emergency</a>
                        <a href="#pharmacy" className='text-blue-800 font-medium hover:text-blue-600'>Pharmacy</a>
                    </div>
                    <button className="md:hidden text-gray-600">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </>
  );
};

export default Header;
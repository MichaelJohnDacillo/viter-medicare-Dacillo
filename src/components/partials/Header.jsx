import React from 'react'
import { FaClinicMedical, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
                    <button
                    onClick={toggleMenu}
                    className="md:hidden text-xl text-gray-600 focus:outline-none">
                        {isMenuOpen ? <FaTimes /> : "☰"}
                    </button>
                </div>
            </div>
        </nav>

        {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-white text-2xl">
          <a href="#home" className='text-blue-800 font-medium hover:text-blue-600'>Home</a>
            <a href="#services" className='text-blue-800 font-medium hover:text-blue-600' onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#doctors" className='text-blue-800 font-medium hover:text-blue-600' onClick={() => setIsMenuOpen(false)}>Doctors</a>
            <a href="#emergency" className='text-blue-800 font-medium hover:text-blue-600' onClick={() => setIsMenuOpen(false)}>Emergency</a>
            <a href="#pharmacy" className='text-blue-800 font-medium hover:text-blue-600' onClick={() => setIsMenuOpen(false)}>Pharmacy</a>
      </div>
    </div>
    </>
  );
};

export default Header;
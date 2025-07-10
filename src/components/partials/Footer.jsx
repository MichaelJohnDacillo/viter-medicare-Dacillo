import React from 'react'
import { FaClinicMedical } from 'react-icons/fa';
import { FaHouseMedical } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
        <footer className="bg-blue-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 py-10 gap-6">
            <div>
              <div className="flex gap-2 text-white mb-4 m">
                <FaClinicMedical className="text-2xl" />
                <h4 className="text-lg font-bold">Medicare+</h4>
              </div>
              <p className="text-gray-300">
                Providing compassionate healthcare services since 2005.
              </p>
            </div>

            <div className="text-white">
              <h4 className="text-lg font-bold mb-3">Quick Links</h4>
              <ul className="text-gray-300">
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="mt-1 hover:text-white">
                  <a href="#services ">Services</a>
                </li>
                <li className="mt-1  hover:text-white">
                  <a href="#doctors">Doctors</a>
                </li>
                <li className="mt-1  hover:text-white">
                  <a href="#eservices ">Emergency</a>
                </li>
                <li className="mt-1  hover:text-white">
                  <a href="#pharmacy">Pharmacy</a>
                </li>
              </ul>
            </div>
            
            <div className="text-white">
              <h4 className="text-lg font-bold mb-3">Contact Us</h4>
              <p className="text-gray-300">
                123 Medical Center Drive Healthville, HV 12345
              </p>
              <p className="text-gray-300 ">Phone: (555)987-6543</p>
              <p className="text-gray-300">Email: info@medicareplus.com</p>
            </div>
            
            <div className="text-white gap-3">
              <h4 className="text-lg font-bold mb-3">Opening Hours</h4>
              <p className="text-gray-300 ">Monday - Friday: 8am - 8pm </p>
              <p className="text-gray-300 mt-2">Saturday: 9am - 5pm </p>
              <p className="text-gray-300 mt-2">Sunday: Emergency only</p>
            </div>
          </div>
          <div className="p-3 text-gray-200 text-center border-t border-blue-900">
            <p>&copy;2025 MediCare+. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
import React from "react";
import { FaClinicMedical } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Quality Healthcare Made Simple
            </h1>
            <p className="text-xl mb-8">
              Comprehensive medical services tailored to your needs with care
              and compassion.
            </p>
            <button className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300  hover:animate-pulse">
              Book an Appointment
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-full">
              <FaClinicMedical className="text-white text-8xl md:text-9xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
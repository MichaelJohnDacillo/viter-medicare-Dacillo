import React from "react";
import { FaUserMd } from "react-icons/fa";

const CardDoctor = ({ icon: Icon, name, specialization, description }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-6 overflow-hidden">
          <div className="w-full h-full bg-blue-200 flex items-center justify-center">
            {/* <FaUserMd className="text-blue-600 text-4xl"/> */}
            <Icon className="text-blue-600 text-4xl" />
          </div>
        </div>
        {/* <h3 className="text-xl font-bold mb-2 text-blue-800">Dr. Sarah Johnson</h3>
            <p className="text-blue-600 mb-4">General Practitioner</p>
            <p className="text-gray-600">With over 15 years of experience, Dr. Johnson provides compassionate primary care.</p> */}

        <h3 className="text-xl font-bold mb-2 text-blue-800">{name}</h3>
        <p className="text-blue-600 mb-4">{specialization}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </>
  );
};

export default CardDoctor;

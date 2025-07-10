import React from 'react'
import { FaUserMd } from 'react-icons/fa';
import CardDoctor from '../../../partials/CardDoctor';

const Doctors = () => {
  return (
    <>
        {/* Doctors Section */}
        <section id="doctors" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">
                    Meet Our Specialists
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                    Our team off board-certified physicians are dedicated to your health and wellbeing.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <CardDoctor icon={FaUserMd}
                    name={"Dr. Sarah Johnson"}
                    specialization={"General Practitioner"}
                    description={"With over 15 years of experience, Dr. Johnson provides compassionate primary care."}
                    />
                    <CardDoctor icon={FaUserMd}
                    name={"Dr. Michael Chen"}
                    specialization={"Cardiologist"}
                    description={"Specializing in interventional cardiology with focus on preventive care."}
                    />
                    <CardDoctor icon={FaUserMd}
                    name={"Dr. Emily Rodrigues"}
                    specialization={"Pediatrician"}
                    description={"With over 15 years of experience, Dr. Johnson provides compassionate primary care."}
                    />
                </div>
            </div>
        </section>
    </>
  );
};

export default Doctors;
import React from 'react'
import { FaAmbulance, FaPills, FaRegClock } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineRectangleStack } from 'react-icons/hi2';

const Pharmacy = () => {
  return (
    <>
        {/* Pharmacy Section */}
        <section id="pharmacy" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:grid md:grid-cols-2 justify-items-center items-center">
                
                <div>
                    <h2 className="text-3xl font-bold text-blue-800">In-house Pharmacy</h2> 
                    <p className="text-xl max-w-lg my-6">Our fully-stocked pharmacy provides convenient access to medications with expert advice from our  licensed pharmacists.</p>
                    
                    <div className="flex items-center gap-4 mb-4">
                        <div className="size-9  bg-white/20 flex items-center justify-center">
                            <FaPills className="text-2xl text-blue-600"/>
                        </div>
                        <div>
                            <p className="max-w-2xl font-bold text-blue-700">Prescription Medications</p>
                            <p className="max-w-2xl text-black/70">Fast filling of all your prescription needs</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="size-9 bg-white/20 flex items-center justify-center">
                            <FaPills className="text-2xl text-blue-600"/>
                        </div>
                        <div>
                            <p className="max-w-2xl font-bold text-blue-700">Over-the-counter</p>
                            <p className="max-w-2xl text-black/70">Wide selection of health and wellness products</p>
                        </div>
                    </div>
                        
                    <div className="flex items-center gap-4 mb-4">
                        <div className="size-9 bg-white/20 flex items-center justify-center">
                            <FaPills className="text-2xl text-blue-600"/>
                        </div>
                        <div>
                            <p className="max-w-2xl font-bold text-blue-700">Compounding Services</p>
                            <p className="max-w-2xl text-black/70">Custom medication formulations when needed</p>
                        </div>
                    
                    
                    </div>      
                    
                </div>

                <div className="text-blue-600 bg-blue-100 p-8 rounded-md mt-10 md:mt-0">
                    <FaPills className="size-24"/>
                </div>
            </div>
        </section>
    </>
  );
};

export default Pharmacy;
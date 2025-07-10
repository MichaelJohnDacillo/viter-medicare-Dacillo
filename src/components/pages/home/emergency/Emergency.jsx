import React from 'react'
import { FaAmbulance, FaPills, FaRegClock } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineRectangleStack } from 'react-icons/hi2';

const Emergency = () => {
  return (
    <>
        {/* Emergency Section */}
        <section id="emergency" className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <div className="max-w-6xl mx-auto px-4 md:grid md:grid-cols-2 justify-items-center items-center">
                <div className="rounded-md mb-10 md:mb-0">
                    <FaAmbulance className="size-24"/>
                </div>
                <div>
                    <h2 className="text-3xl font-bold ">24/7 Emergency Services</h2> 
                    <p className="text-xl max-w-lg my-6">Our emergency department is staffed around the clock with experienced medical professionals ready to handle any medical crisis.</p>
                    
                    <div className="flex items-center gap-4 mb-4">
                        <div className="rounded-full size-9 bg-white/20 flex items-center justify-center">
                            <FaRegClock className="text-lg"/>
                        </div>
                        <p className="max-w-2xl">Immediate response to critical conditions</p>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="rounded-full size-9 bg-white/20 flex items-center justify-center">
                            <HiOutlineRectangleStack className="text-lg"/>
                        </div>
                        <p className="max-w-2xl">State-of-the-art emergency facilities</p>
                    </div>
                        
                    <div className="flex items-center gap-4 mb-4">
                        <div className="rounded-full size-9 bg-white/20 flex items-center justify-center">
                            <FiPhone className="text-lg"/>
                        </div>
                        <p className="max-w-2xl">Emergency hotline: (555) 123-4567</p>
                    
                    
                  </div>      
                    
                </div>
            </div>
        </section>
    </>
  );
};

export default Emergency;
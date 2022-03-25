import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import img1 from '../images/homepage/up_to_300.webp'
import img2 from '../images/homepage/save_150.webp'
import img3 from '../images/homepage/microsoft_365.webp'
import img4 from '../images/homepage/xbox_controllers.webp'

const Features = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lgxl:grid-cols-4 gap-x-8 w-11/12 mx-auto py-12">
                {/* single-item */}
                <div className="mb-16">
                    <img src={img1}alt="up to 300" className="w-full mb-4" />
                    <h3 className="text-lg   font-semibold">Microsoft 365</h3>
                    <p className="mb-2">Premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription.</p>
                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                    
                        <div className="flex items-center  justify-center hover:underline px-1 ">
                        <button className=" text-sm flex  mr-1 bg-transparent border-transparent text-blue-800 font-semibold">For up to 6 people  </button>
                        <FaChevronRight className="text-blue-800 cursor-pointer transition-all hover:translate-x-10"/>
                        </div>

                        <div className="flex items-center  justify-center bg-white text-black  px-1">
                        <button className=" text-sm flex  mr-1 bg-transparent border-transparent text-blue-800 font-semibold">For 1 person  </button>
                        <FaChevronRight className="text-blue-800"/>
                        </div>
                    </div>
                </div>
                 {/* single-item */}
                 <div className="mb-16">
                    <img src={img4}alt="Xbox Images" className="w-full mb-4" />
                    <h3 className="text-lg   font-semibold">Microsoft Xbox</h3>
                    <p className="mb-2">Play video games and enjoy life. Play arcade and adventure games with friends. Try new adventures. </p>
                    <div className="flex gap-x-12">
                    
                        <div className="flex items-center  justify-center bg-white text-black  px-1">
                        <button className=" text-sm flex  mr-1 bg-transparent
                         border-transparent text-blue-800 font-semibold">Learn more  </button>
                        <FaChevronRight className="text-blue-800"/>
                        </div>

                        </div>
                    </div>
                {/* single-item */}
                <div className="mb-16">
                    <img src={img2}alt="microsoft age img" className="w-full mb-4" />
                    <h3 className="text-lg   font-semibold">Microsoft Edge</h3>
                    <p className="mb-2">World-class performance with more privacy,
                     more productivity, and more value while you browse.</p>
                    <div className="flex gap-x-12">
                    
                        <div className="flex items-center  justify-center bg-white text-black  px-1">
                        <button className=" text-sm flex  mr-1 bg-transparent
                         border-transparent text-blue-800 font-semibold">Download now  </button>
                        <FaChevronRight className="text-blue-800"/>
                        </div>

                        
                    </div>
                </div>
                {/* single-item */}
                <div className="mb-16">
                    <img src={img3}alt="microsoft onedrive img" className="w-full mb-4" />
                    <h3 className="text-lg   font-semibold">Microsoft OneDrive</h3>
                    <p className="mb-2">Save your files and photos to OneDrive and access them from any device, anywhere.</p>
                    <div className="flex gap-x-12">
                    
                        <div className="flex items-center  justify-center bg-white text-black  px-1">
                        <button className=" text-sm flex  mr-1 bg-transparent border-transparent text-blue-800 font-semibold">Learn more  </button>
                        <FaChevronRight className="text-blue-800"/>
                        </div>

                        
                    </div>
                </div>
               
                </div>
                
            
        </section>
    )
}

export default Features

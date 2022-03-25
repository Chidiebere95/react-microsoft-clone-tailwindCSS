import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import img from '../images/homepage/hero_539.png'

const Hero = () => {
    return (
        <div>
            <div className="md:hidden flex flex-col">
                <div className="flex-1 w-full">
                    <img src={img} alt="hero-img" className="w-full" />
                </div>
                <div className="flex-1 bg-gray-700 text-center items-center justify-center py-20 text-white">
                    <div className="w-11/12 mx-auto ">

                    <button className="bg-yellow-500 py-1 px-4 text-sm text-black mb-1 ">New</button>
                    <h3 className="text-xl mb-1">
                    Designed for life today—and tomorrow
                    </h3>
                    <p className="text-base mb-3">The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.</p>
                    <div className="inline-block">

                    <div className="flex items-center  justify-center bg-white text-black py-2 px-4">
                    <button className=" text-sm flex  mr-1 ">See if your PC is ready  </button>
                    <FaChevronRight/>
                    </div>
                    </div>
                    </div>

                </div>
            </div>

            <div className="hidden md:block bg-hero lgxl:w-11/12 mx-auto">
                <div className="w-96 text-black  py-36 mx-12 z-10">
                <button className="bg-yellow-500 py-1 px-4 text-sm text-black mb-1 ">New</button>
                    <h3 className="text-2xl lgxl:text-4xl font-bold mb-4">
                    Designed for life today—and tomorrow
                    </h3>
                    <p className="text-base mb-4 w-">The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.</p>
                    <div className="inline-block">

                    <div className="flex items-center  justify-center bg-white text-black py-2 px-4">
                    <button className=" text-sm flex  mr-1 font-semibold ">See if your PC is ready  </button>
                    <FaChevronRight className=""/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

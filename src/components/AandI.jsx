import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import img from '../images/homepage/game_pass_539.png'

const AandI = () => {
    return (
        <div>
            <div className="md:hidden flex flex-col">
                <div className="flex-1 w-full">
                    <img src={img} alt="hero-img" className="w-full" />
                </div>
                <div className="flex-1 bg-gray-200 text-center items-center justify-center py-28 text-black">
                    <div className="w-11/12 mx-auto ">
                    <h3 className="text-xl mb-1 font-semibold">
                    Outlook for iOS and Android
                    </h3>
                    <p className="text-base mb-3">Connect. Organize. Get things done.</p>
                    <div className="inline-block">

                    <div className="flex items-center  justify-center bg-black text-white py-2 px-4">
                    <button className=" text-sm flex  mr-1 font-semibold ">Download now  </button>
                    <FaChevronRight/> 
                    </div>
                    </div>
                    </div>

                </div>
            </div>

            <div className="hidden md:block bg-aandi lgxl:w-11/12 mx-auto">
                <div className="w-96 text-white  py-36 mx-12 z-10 xl2xl:w-full">
                    <h3 className="text-2xl font-bold mb-4 xl2xl:text-3xl">
                    Outlook for iOS and Android
                    </h3>
                    <p className="text-base mb-4 w-">Connect. Organize. Get things done.</p>
                    <div className="inline-block">

                    <div className="flex items-center  justify-center bg-white text-black py-2 px-4">
                    <button className=" text-sm flex  mr-1 font-semibold ">Download now  </button>
                    <FaChevronRight className=""/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AandI

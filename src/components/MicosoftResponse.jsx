import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const MicosoftResponse = () => {
    return (
        <section className="pt-8 pb-4 text-center bg-gray-200 lgxl:w-11/12 mx-auto">
            <div className="w-11/12 mx-auto">
                <h3 className="text-2xl font-semibold mb-2 md:text-3xl">Microsoft's response to COVID-19</h3>
                <p className="mb-4">Read how we’re responding to the COVID-19 outbreak, and get resources to help.</p>
                <div className="flex items-center  justify-center hover:underline px-1 ">
                  <button className=" text-sm flex  mr-1 bg-transparent border-transparent text-black font-semibold">
                    Learn more
                  </button>
                  <FaChevronRight className="text-black cursor-pointer transition-all hover:translate-x-10" />
                </div>
            </div>
        </section>
    )
}

export default MicosoftResponse

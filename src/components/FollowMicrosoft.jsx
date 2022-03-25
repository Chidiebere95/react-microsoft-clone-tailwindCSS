import React from 'react'
import {  FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const FollowMicrosoft = () => {
    return (
        <section className="pt-8 pb-12">
            <div className="flex items-center gap-x-4 w-11/12 mx-auto ">
                <p className="text-base capitalize font-light">follow microsoft</p>
                <FaFacebookSquare className="text-3xl text-blue-800"/>
                <FaTwitterSquare className="text-3xl text-blue-300"/>
                <FaLinkedin className="text-3xl text-blue-500"/>
            </div>
        </section>
    )
}

export default FollowMicrosoft

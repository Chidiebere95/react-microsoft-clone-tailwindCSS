import React from 'react'
import {FaBars,FaChevronDown,FaSearch,FaShoppingCart,FaUser} from 'react-icons/fa'
import logo from "../images/homepage/logo.png"



const Header = () => {
    return (
        <nav className="p-4  ">
        <div className="mdlgnav:hidden flex justify-between items-center">
            <div className="flex gap-x-4 text-xl">
                <div className="">
                    <FaBars/>
                </div>
                <div className="">
                    <FaSearch/>
                </div>
            </div>
            <div className="">
                <img src={logo} alt="logo" className="w-28" />
            </div>
            <div className="flex gap-x-4 text-xl">
            <div className="">
                    <FaShoppingCart/>
                </div>
                <div className="">
                    <FaUser/>
                </div>
            </div> 
        </div>
        <div className="hidden  mdlgnav:flex justify-between items-center px-4 lgxl:w-11/12 lgxl:px-1 mx-auto">
            <div className="flex items-center gap-x-6 capitalize list-none text-xs">
            <img src={logo} alt="logo" className="w-28" />
            <li>Microsoft 365</li>
            <li>office</li>
            <li>windows</li>
            <li>xbox</li>
            <li>support</li>
            </div>
            <div className="flex gap-x-8">
                <div className="flex items-center list-none capitalize text-xs">
                    <li className="mr-2">all microsoft </li>
                    <FaChevronDown className="text-bold-10"/>
                </div>
                <FaSearch/>
                <FaShoppingCart/>
                <FaUser/>
            </div>
        </div>
    </nav>
    )
}

export default Header

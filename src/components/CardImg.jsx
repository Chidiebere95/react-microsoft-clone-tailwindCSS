import React,{useState} from 'react'
import { FaChevronRight } from 'react-icons/fa';
import  img2  from "../images/homepage/hero.PNG";

const CardImg = ({item}) => {
    const {info,desc,text,img}=item
    const [hover, setHover] = useState(false);
    const [direction, setDirection] = useState("");
    
    let hoverStyle = "opacity-80";
   const handleMouseEnter=()=>{
      setHover(true)
    }
   const handleMouseLeave=()=>{
      setHover(false)
    }


    return (
        
        <div
          className="mb-16   "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className="  cursor-pointer">
            <img
              src={img}
              alt="up to 300"
              className={`w-full mb-4 ${hover && hoverStyle }`}
            />
            <div className="block   text-black z-10">
              <h3 className="text-lg   font-semibold hover:opacity-100">
               {info}
              </h3>
              <p className="mb-2 hover:opacity-100">
               {desc}
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 hover:opacity-100">
                <div className="flex items-center  justify-center hover:underline px-1 ">
                  <button  className=" text-sm flex  mr-1 bg-transparent border-transparent text-blue-800 font-semibold">
                    {text}
                  </button>
                  <FaChevronRight className="text-blue-800 cursor-pointer transition-all hover:translate-x-10"  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
    )
}

export default CardImg

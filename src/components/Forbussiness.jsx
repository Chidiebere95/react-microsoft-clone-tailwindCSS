import React from "react";

import { cardImgdata2 } from "../data";
import { FaChevronRight } from "react-icons/fa";
import CardImg from "./CardImg";

const Forbussiness = () => {
 
 console.log(cardImgdata2);
  return (
    <section className="pt-12">
      <h3 className="text-2xl w-11/12 mx-auto mb-4 font-semibold">
        For business
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lgxl:grid-cols-4 gap-x-8 w-11/12 mx-auto ">
       {cardImgdata2.map((item,index)=>(
           <CardImg key={index} item={item}/>
       ))}
      </div>
    </section>
  );
};

export default Forbussiness; 

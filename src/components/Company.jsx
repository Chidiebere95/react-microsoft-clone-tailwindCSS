import React from 'react'
import {footer} from '../data'
import Info from './Info'

const Company = () => {

    return (
        <section className="bg-gray-50 py-16">
            <div className="w-11/12 mx-auto">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 sm:gap-8 lgxl:grid-cols-6">
                {footer.map((item,index)=>(
                    <Info key={index} item={item}/>
                ))}
            </div>
            </div>
        </section>
    )
}

export default Company

import React from 'react'
import Links from './Links'

const Info = ({item}) => {
    const {section,links}=item
    return (
        <div className="capitalize">
                    <h3 className="text-sm font-semibold mb-3">{section}</h3>
                    {links.map((item,index)=>(
                        <Links key={index} item={item}/>
                    ))}
                  
                </div>
    )
}

export default Info

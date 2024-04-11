import React from 'react'
import LearningPathCard from '../Components/LearningPathCard'
import FeaturedPath from '../Items/FeaturedPath'

export default function Section5() {
    return (
        <div className='p-8'>
            <h1 className='font-bold text-xl md:mt-12'>Featured learning paths</h1>

            {
                FeaturedPath.map((data,index)=>{
                    console.log(data);
                        return <LearningPathCard key={index} details={data}/>

                })
            }
           
           


        </div>
    )
}

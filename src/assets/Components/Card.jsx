import React from 'react'

export default function Card(props) {
    return (
         <div class="w-full sm:w-1/2 md:w-1/4 mb-4 px-2  transition hover:shadow-lg">
                    <div class="relative bg-white rounded border xl:h-auto ">
                        <picture className="block bg-gray-200  ">
                            <img class="block" src={props.image} className='rounded' alt="Card 1"/>
                        </picture>
                        <div class="p-4">
                            <div class="overflow-hidden">
                                <p className='text-xs text-gray-700 '>{props.subject}</p>
                                <p className="font-bold stretched-link text-md" href="#" title="Card 1">
                                    {props.title}
                                </p>
                            </div>
                        </div>
                    </div>
        </div>
           
    )
       
    
}

import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


export default function Section2() {
    return (
        <div>

            <div class="pt-12 h-auto m-5 ">
                <h1 className='font-bold text-xl'>Pick up where you left off</h1>
                <div class=" p-5 group mx-2 mt-6  grid grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
                    <a href="#" class="col-span-2 text-left text-gray-600 hover:text-gray-700">
                        <div class="group relative h-full w-full overflow-hidden">
                            <img src="/Images/23446148_sl_121021_47240_04.jpg" alt="" class="h-full w-full border-none object-cover text-gray-700 transition " />
                        </div>
                    </a>
                    <div class="col-span-2 flex flex-col space-y-3 pr-8 text-left">
                        <div className='font-bold flex space-x-4 text-xs'>
                            <p>CryptoCurrency </p>
                            <p>Lesson 1 of 19</p>

                        </div>
                        <a href="#" class="mt-3 overflow-hidden text-2xl font-bold text-md text-black"> A Brief History of Currency </a>
                        <p class="overflow-hidden text-md text-gray-500 ">Trust is the backbone of all currencies, from commodity monies to crypto.</p>
                    
                        <div class="flex flex-col text-gray-700 sm:flex-row">
                        <button className='bg-black text-white p-2 rounded-md mt-5 hover:bg-white hover:text-black border border-black transition-all duration-300'> <FontAwesomeIcon icon={faPlay} className='px-2'/>Resume Course</button>    
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

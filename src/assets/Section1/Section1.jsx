import React from 'react'
import Days from '../Components/Days'
import days from '../Items/DaysItem'
export default function Section1() {
    return (
        <>
            {/* left part */}
            <div className='flex flex-col md:flex-row  justify-between  lg:mt-0 sm:pt-3'>

                <div className='flex space-x-4 justify-evenly items-center md:mt-12'>
                    <img src="/Images/number.png" className='w-28 h-28' alt="" />
                    <div>
                        <h2 className='font-bold block'>You're on a 5-day streak!</h2>
                        <div className='flex space-x-4 text-xs font-bold text-gray-700'>
                            <p >5 Longest Streak</p>
                            <p>19 Lessons completed</p>
                        </div>
                    </div>


                </div>
                {/* right part */}
                <div className='flex space-x-5 my-4 items-center justify-evenly'>
                {days.map((dayName, index) => (
                    <div key={index}>
                        {console.log(dayName)} {/* Logging dayName */}
                        <Days day={dayName} /> {/* Rendering Days component */}
                    </div>
                ))}
                </div>

                {/* <Days day={dayName}/> */}
            </div>
        </>
    )
}

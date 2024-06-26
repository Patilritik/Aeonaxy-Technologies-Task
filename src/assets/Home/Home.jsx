import React from 'react'
import Navbar from '../Navbar/Navbar'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import Section5 from '../Section5/Section5'
export default function Home() {
    return (
        <>
            <Navbar />
            <div className='md:px-36 px-4 py-2 my-6 font-poppins'>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </div>
        </>
    )
}

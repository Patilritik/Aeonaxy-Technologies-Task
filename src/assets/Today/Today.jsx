import React from 'react'
import Navbar from '../Navbar/Navbar'
import Section3 from '../Section3/Section3'
import Section5 from '../Section5/Section5'

export default function Today() {
  return (
    <div>
      <Navbar />
      <div className='md:px-36 px-4 py-2 my-6 font-poppins'>
        <Section3 />
        <Section5 />
      </div>
    </div>
  )
}

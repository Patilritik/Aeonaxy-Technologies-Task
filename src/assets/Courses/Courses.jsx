import React from 'react'
import Navbar from '../Navbar/Navbar'
import Section2 from '../Section2/Section2'
import Section4 from '../Section4/Section4'

export default function Courses() {
  return (
    <div>
      <Navbar />
      <div className='md:px-36 px-4 py-2 my-6 font-poppins'>
        <Section2 />
        <Section4 />
      </div>
    </div>
  )
}

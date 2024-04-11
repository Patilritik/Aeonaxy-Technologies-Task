import React from 'react'
import Card from '../Components/Card'

export default function Section4() {
  return (
    <div className='p-8'>

          <h1 className='font-bold text-xl md:mt-12'>Recommended for you</h1>
          <div className='mt-6'>
             <Card title="UnderStanding Variables" image={'/Images/1712824036319.jpeg'} subject="Pre-Algebra"/>
          </div>
    </div>
  )
}

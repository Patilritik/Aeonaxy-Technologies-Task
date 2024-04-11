import React from 'react'

export default function Days(props) {
  return (
    <div className='border border-yellow-300 rounded-full p-1 text-center space-y-2'>
        <h2 className>{props.day}</h2>
        <img src="/Images/thunder.png" alt="" />
    </div>
  )
}

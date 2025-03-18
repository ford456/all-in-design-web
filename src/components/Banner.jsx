import React from 'react'
import bannerhome from '../assets/img/bannerhome.png'

export default function Banner() {
  return (
    <div className='bg-cover h-auto md:h-[700px] my-10  pt-10 md:py-5 '>
        <img className=' w-full ' src={bannerhome} alt="" />
    </div>
    
  )
}

import React from 'react'

import SponserImg from '../assets/img/Sponser.png'

function Sponser() {
  return (
    <nav className='bg-white-200  flex justify-center items-center md:mt-5 md:pt-5'>
    <div className='container w-full mx-auto max-w-[1320px] '>
        
            <img src={SponserImg} alt="" className='w-full' />
        </div>
    </nav>
  )
}

export default Sponser

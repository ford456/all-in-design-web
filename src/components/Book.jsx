import React from 'react'

export default function Book() {
  return (
    <div className='bg-white pb-10 md:mb-120 h-auto md:h-[37.5rem] md:mt-10  items-center'>
      <div className=' container mx-auto max-w-[1320px] p-5 m-5'>
        <div className='text-center my-10'>
            <h3 className=' cursor-default text-[2rem] leading-[1.25] font-medium text-[#FFFFF] justify-center items-center  '>สูจิบัตร</h3>
            <a href="https://online.fliphtml5.com/exlay/hleh/" target='_blank' className='inline-flex justify-center items-center bg-[#c1788b] text-xl text-white px-10 mt-5 py-3 rounded-md'  >E-book</a>
        </div>
        <div >
        <iframe className='container md:h-[720px] mx-auto h-auto min-h-[300px] max-w-[1320px] justify-center items-center ' src="https://online.fliphtml5.com/exlay/hleh/" ></iframe>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

function ArtCard({ data }) {
  return (
    <div  >
      
    
        <div key={data.id} className=' flex flex-col outline-0 outline-[#c1788b]  mt-10 mb-2 items-center container mx-auto h-[560px] md:h-[500px] max-w-[1320px] rounded-4xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:outline-2 hover:outline-[#c1788b] hover:outline-offset-2 ' >
      
          <div className=' mb-2 py-0 md:pb-5'>
            
                <img className=' w-full h-auto max-h-[250px] md:h-[250px] md:max-h-[13rem]' src={data.miximg} alt={data.title} />
            
        
            <div className='px-5 mt-2'>
            <h3 className='text-[#FFFFF] font-medium text-xl indent-8 pb-2'>{data.title}</h3>
            <hr/>
            <div className='text-gray-600 text-sm mt-3'>
                
                <p >{data.name1}</p>

            </div>
            <div className='text-gray-600 text-sm mt-3'>
                
                <p >{data.name2}</p>
            </div>
            <div className='text-gray-600 text-sm mt-3'>
                
                <p >{data.name3}</p>
            </div>
            
           </div>

        </div>
      
      </div>
      
    </div>
  )
}

export default ArtCard

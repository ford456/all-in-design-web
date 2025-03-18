import React,{ useState } from 'react'
import ArtImg from '../assets/img/Art.png'
import ProductImg from '../assets/img/Product.png'
import MultiImg from '../assets/img/Multimedia.png'
import { Link } from 'react-router-dom';


export default function Project() {
   const [toggle, setToggle] = useState(false);
  
      const updateToggle = () => {
          setToggle(!toggle)
  
      }
  
  return (
    <div className='bg-white py-10 md:mb-100 h-auto md:h-[37.5rem] md:mt-10  items-center'>
      <div className='cursor-default text-[#FFFFF] container mx-auto max-w-[1320px] p-10 mt-20 flex flex-col justify-center items-center'>
        <h1 className='text-center text-[2rem] leading-[1.25] font-medium  '>ผลงานจัดแสดงศิลปนิพนธ์</h1>
        <p className='text-xl mt-5 text-center'>นิสิตระดับชั้นปีที่ 4 หลักสูตรศิลปกรรมศาสตรบัณฑิต สาขาวิชาคอมพิวเตอร์กราฟิกและมัลติมีเดีย
        <br/>คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยพะเยา</p>
    </div>
      <div>
        <div className='container mx-auto max-w-[1320px] p-10 flex flex-col md:flex-row justify-between items-center '>
          
          <div className='relative w-full md:w-[30%] bg-white mb-5 shadow-lg rounded-xl overflow-hidden flex flex-col justify-center items-center outline-0 outline-[#c1788b] hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:outline-2 hover:outline-[#c1788b] hover:outline-offset-2'>
            <Link to='/Art-graphics'target='_parent' >
            <img className='bg-white ' src={ArtImg} alt=''/>
            <h5 className='cursor-default text-center text-md my-5'>Art & Graphics</h5></Link>
          </div>
          
          
          <div className='relative w-full md:w-[30%] bg-white mb-5 shadow-lg rounded-xl overflow-hidden flex flex-col justify-center items-center outline-0 outline-[#c1788b] hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:outline-2 hover:outline-[#c1788b] hover:outline-offset-2'>
            <Link to='/Product-craft' target='_parent'>
            <img className='bg-white' src={ProductImg} alt=''/>
            <h5 className='cursor-default text-center text-md my-5'>Product & Craft</h5></Link>
          </div>
          
          
          <div className='relative w-full md:w-[30%] bg-white mb-5 shadow-lg rounded-xl overflow-hidden flex flex-col justify-center items-center outline-0 outline-[#c1788b] hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:outline-2 hover:outline-[#c1788b] hover:outline-offset-2'>
            <Link to='/Multimedia' target='_parent'>
            <img className='bg-white' src={MultiImg} alt=''/>
            <h5 className='cursor-default text-center text-md my-5'>Multimedia</h5></Link>
          </div>
          
        </div>  
      </div>
    </div>
    
  )
}



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
        <h1 className='text-[2rem] leading-[1.25] font-medium  '>ผลงานจัดแสดงศิลปนิพนธ์</h1>
        <p className='text-xl mt-5 text-center'>นิสิตระดับชั้นปีที่ 4 หลักสูตรศิลปกรรมศาสตรบัณฑิต สาขาวิชาคอมพิวเตอร์กราฟิกและมัลติมีเดีย
        <br/>คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยพะเยา</p>
    </div>
      <div>
        <div className='container mx-auto max-w-[1320px] p-10 flex flex-col md:flex-row justify-between items-center '>
          <div className='relative w-full md:w-[30%] bg-white shadow-lg rounded-xl overflow-hidden flex flex-col justify-center items-center'>
            <button  className='absolute bg-[#c1788b] text-white z-1 p-2 px-3 rounded-xl opacity-0 hover:opacity-100  '><Link to='/Art-graphics'target='_parent' >ดูผลงาน</Link></button>
            <img className='bg-white hover:brightness-50' src={ArtImg} alt=''/>
            <h5 className='cursor-default text-center text-md my-5'>Art & Graphics</h5>
          </div>
          <div className='relative w-full md:w-[30%] bg-white shadow-lg rounded-xl overflow-hidden flex flex-col justify-center items-center'>
            <button  className='absolute bg-[#c1788b] text-white z-1 p-2 px-3 rounded-xl opacity-0 hover:opacity-100  '><Link to='/Product-craft' target='_parent'>ดูผลงาน</Link></button>
            <img className='bg-white hover:brightness-50' src={ProductImg} alt=''/>
            <h5 className='cursor-default text-center text-md my-5'>Product & Craft</h5>
          </div>
          <div className='relative w-full md:w-[30%] bg-white shadow-lg rounded-xl overflow-hidden flex flex-col justify-center items-center'>
            <button  className='absolute bg-[#c1788b] text-white z-1 p-2 px-3 rounded-xl opacity-0 hover:opacity-100  '><Link to='/Multimedia' target='_parent'>ดูผลงาน</Link></button>
            <img className='bg-white hover:brightness-50' src={MultiImg} alt=''/>
            <h5 className='cursor-default text-center text-md my-5'>Multimedia</h5>
          </div>
        </div>  
      </div>
    </div>
    
  )
}



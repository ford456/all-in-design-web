import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import HeaderImg from '../assets/img/HeaderHome.png'

export default function HeaderHome() {
  return (
    <div className='bg-white py-10 mb-40 h-auto md:h-[37.5rem] md:mt-30 flex items-center'>
      <div className='container mx-auto max-w-[1320px] pb-20 md:py-10 p-10 mt-0 md:p-20 md:mt-10 flex flex-col md:flex-row justify-between items-center'>
        <div >
            <h1 className='cursor-default text-4xl text-[#c1788b] font-bold'>นิทรรศการแสดงศิลปนิพนธ์</h1>
            <p className= 'cursor-default text-xl mt-10 text-[#FFFFF]'>ขอเชิญเข้าร่วมนิทรรศการแสดงผลงานศิลปนิพนธ์<br/>นิสิตระดับชั้นปีที่ 4 สาขาวิชาคอมพิวเตอร์กราฟิกและมัลติมีเดีย<br/>คณะเทคโนโลยีสารสนเทศและการสื่อสาร<br/>มหาวิทยาลัยพะเยา</p>
            <p className= 'cursor-default text-xl mt-10 text-[#FFFFF]'>ณ ลานอเนกประสงค์ชั้น 2<br/>อาคาร 99 ปี พระอุบาลีคุณูปมาจารย์<br/>(ปวง ธมฺมปญฺโญ) มหาวิทยาลัยพะเยา<br/>วันที่ 4 - 6 กันยายน 2567<br/>เวลา 09.00 น. – 17.00 น.</p>
            <Link to='/Projects' target='_parent'  className='inline-flex justify-center items-center bg-[#c1788b] text-xl text-white px-10 py-3 mt-10 rounded-md'>ผลงานจัดแสดง</Link>
        </div>
        <div>
          <img src={HeaderImg} alt="" className='h-auto md:max-w-[550px] md:h-[550px]' />
        </div>

      </div>

    </div>
  )
}

import { useState } from 'react'

import './App.css'

//components

import AppRoutes from './routes/AppRoutes'
import { Helmet } from 'react-helmet';


export const metadata = {
  title: 'All in Design',
  description: 'นิทรรศการแสดงศิลปนิพนธ์ สาขาวิชาคอมพิวเตอร์กราฟิกและมัลติมีเดีย มหาวิทยาลัยพะเยา ขอเชิญเข้าร่วมนิทรรศการแสดงผลงานศิลปนิพนธ์ นิทรรศการแสดงศิลปนิพนธ์ สาขาวิชาคอมพิวเตอร์กราฟิกและมัลติมีเดีย คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยพะเยา',
  keywords: 'นิทรรศการแสดงศิลปนิพนธ์, ศิลปนิพนธ์, คอมพิวเตอร์กราฟิก, มัลติมีเดีย, มหาวิทยาลัยพะเยา, ICT, UP, CG, นิทรรศการ, ศิลปะ, การออกแบบ, แพ็กเกจจิ้ง, ผลงานนิสิต, นิทรรศการศิลปะ',
};


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Helmet>
      <mata charSet="utf-8" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
    </Helmet>,
      <AppRoutes/>
      
    </>
  )
}

export default App

import {React,  useState } from 'react'
import { Link } from 'react-router-dom'
import { Datas } from '../Data/Datas'

import ArtLogo from '../assets/img/Art.png'


import Card from '../components/Card'

import { IoSearch } from "react-icons/io5";



function ArtPro() {
  
  const [showAll, setShowAll] = useState(false); // ควบคุมการแสดงสินค้า
  const [searchTerm, setSearchTerm] = useState(""); // เก็บค่าค้นหา

  // 🔹 กรองเฉพาะ category "Art"
  const filteredProducts = Datas.filter((product) => product.category === "Art");

  // 🔹 กรองสินค้าตามค่าค้นหา
  const searchedProducts = filteredProducts.filter((product) =>
    product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.name1?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.name2?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.name3?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔹 เรียงข้อมูล A -> Z
  const sortedDatas = searchedProducts.slice().sort((a, b) => a.title.localeCompare(b.title));

  // 🔹 แสดง 6 ชิ้นแรก ถ้า showAll เป็น false
  const displayedProducts = showAll ? sortedDatas : sortedDatas.slice(0, 6);

  return (
    <div className='bg-white-1000 container mx-auto max-w-[1320px] mt-20'>
      <div className="text-center h-auto md:h-[300px] mt-10 py-0 md:py-5 flex flex-col items-center justify-center">
        <img className='w-auto max-h-[12rem]' src={ArtLogo} alt="" />
      </div>

      {/* 🔍 กล่องค้นหา */}
      <div className='flex flex-row justify-center items-center my-2'>
        <IoSearch className='pointer-events-none relative left-8 text-xl fill-gray-400' />
        <input
          className="static text-black w-[85%] h-[40px] border-2 border-gray-300 rounded-xl p-2 pl-10 focus:outline-[#c1788b] focus:outline-offset-2"
          type="text"
          placeholder='ค้นหาด้วยชื่อผลงาน หรือผู้จัดทำ'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 🔸 แสดงสินค้า */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-20 bt-5'>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <Link to={`/details/${product.id}`} key={product.id} target='_parent'>
              <Card data={product} />
            </Link>
          ))
        ) : (
          <p className="md:col-2 text-center text-red-500 py-10">ไม่พบข้อมูลที่ตรงกับ "{searchTerm}"</p>
        )}
      </div>

      {/* 🔻 ปุ่มดูเพิ่มเติม / แสดงน้อยลง */}
      {sortedDatas.length > 6 && (
        <div className="text-center my-5 hover:text-[#c1788b]">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#0000] outline-[#FFFFF] outline-2 text-[#FFFFF] px-4 py-2 rounded-full">
            {showAll ? "แสดงน้อยลง" : "ดูเพิ่มเติม"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ArtPro

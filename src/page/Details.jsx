import React from 'react'
import { useParams, Link } from "react-router-dom";
import { Datas } from '../Data/Datas';



    

export  function Details() {

    const { id } = useParams();
    
    const product = Datas.find((p) => p.id === id);
    if (!product) return <h1 className='cursor-default text-6xl font-bold mt-20 py-30 p-10 flex justify-center ' >PROJECT NOT FOUND </h1>;
    
      // 🔹 รวมข้อมูลของผู้จัดทำเป็น Array และกรองเฉพาะคนที่มีชื่อ
  const creators = [
    { name: product.name1, img: product.nameimg1 },
    { name: product.name2, img: product.nameimg2 },
    { name: product.name3, img: product.nameimg3 }
  ].filter(person => person.name); // ลบค่าที่เป็น undefined หรือ ""

  // 🔹 กำหนด grid-cols ตามจำนวนผู้จัดทำ
  const gridCols = creators.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3";
  


  return (
    
    <div  className="container mx-auto p-5 md:p-20 max-w-[1320px] mt-25">
      <h1 className="cursor-default text-lg md:text-3xl font-medium mb-5 md:mx-2 indent-15 whitespace-pre-line">{product.title}</h1>
      <img src={product.miximg} alt={product.title} className="w-[1320px] h-auto object-cover mb-3 rounded-2xl shadow-md" />
      <h6 className="cursor-default text-gray-600 text-md md:text-xl my-10 indent-15 text-justify whitespace-pre-line hyphens-auto" lang="th" >{product.description1}</h6>
      <p className="cursor-default text-gray-600 text-md dm:text-xl my-10 text-left whitespace-pre-line " >{product.description2}</p>

      <div >
      <h3 className="cursor-default text-2xl font-medium my-5 text-center pt-10">ผู้จัดทำ</h3>
        <div className={`cursor-default grid ${gridCols} gap-10 md:gap-5 justify-center p-5`}>
          {creators.map((creator, index) => (
            <div key={index} className="flex flex-col items-center">
              <img className="w-auto max-h-40 md:w-40 md:h-40 rounded-full mb-3" src={creator.img} alt={creator.name} />
              <p className="text-sm md:text-lg">{creator.name}</p>
            </div>
          ))}
        </div>  
      </div>

      {/* ปุ่มกลับ */}
      <div className='flex flex-row justify-center items-center  '>
        <Link to={`/${product.url}`} target='_parent' className=" mt-6 hover:bg-[#c1788b] hover:outline-0 hover:text-white px-4 py-2 rounded-md outline-2 text-black ">Go Back</Link>
      </div>
      
    </div>
  )
}

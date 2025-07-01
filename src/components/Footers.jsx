import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/Logofooter.png'

//icons
import { RiFacebookCircleLine } from "react-icons/ri"
import { FiInstagram } from "react-icons/fi";
import { RiTiktokFill } from "react-icons/ri";


export default function Footers() {
  return (
    <div>
        <footer className='bg-black text-white'>
            <div className='container mx-auto max-w-[1320px] pt-10 pb-5 '>
            <div className='grid px-10 md:mx-10 grid-cols-2 gap-4 md:justify-center '>
                <div>
                                <Link to="/" target='_parent'>
                                    <img className="h-20 w-auto mb-5" src={Logo} alt=""/>
                                </Link>
                <p className='pointer-events-none text-sm'>© 2024 All in Design - Thesis Exhibition<br/>
                University of Phayao. All rights reserved.</p>
                <div className='text-3xl my-3 flex gap-2 '>
                    <a  href='https://www.facebook.com/cg.thesis'target='_blank' alt=''><RiFacebookCircleLine />
                    </a>
                    <a href='https://www.instagram.com/allin.design_thesis/' target='_blank' alt=''><FiInstagram /></a> 
                    <a href='https://www.tiktok.com/@allin.design_thesis' target='_blank' alt=''><RiTiktokFill /></a> 
                </div>
                </div>
                <div className='flex flex-col justify-self-center r-10 gap-y-2' >
                <h1 className='pointer-events-none text-2xl font-bold '>ผลงานจัดแสดง</h1>
                <ul className='text-sm flex flex-col  gap-1'>
                    <Link to='/Art-graphics'target='_parent'><li>Art & Graphics</li></Link>
                    <Link to='/Product-craft' target='_parent'><li>Product & Packaging</li></Link>
                    <Link to='/Multimedia' target='_parent'><li>Multimedia</li></Link>
                </ul>
                </div>
                
                
            </div>
            </div>
        </footer>
    </div>
  )
}

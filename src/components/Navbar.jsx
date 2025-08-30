import React, { useState } from 'react'
import Logo from '../assets/img/logo-allin.png'
import './Navbar.css'


//icon
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
    const [toggle, setToggle] = useState(false);

    const updateToggle = () => {
        setToggle(!toggle)

    }

    const [protoggle, setproToggle] = useState(false);

    const updateproToggle = () => {
        setproToggle(!protoggle)

    }


    return (
        <div className="Navbar">
            <nav className=' fixed w-full top-[-2px] bg-[#F5F7FA] z-100'>
                <div className='container mx-auto max-w-[1320px] static h-auto md:p-10 pt-2 px-10 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px] ' >
                    <div className='my-2 md:mx-10 flex' >
                        <Link to="/" target='_parent' className='' >
                            <img className="h-13 w-auto " src={Logo} alt="" />
                        </Link>
                    </div>

                    <ul className={`${!toggle ? 'hidden' : 'flex'} flex flex-col md:my-5 mt-5 mb-3 md:mx-10 md:flex md:flex-row `}>
                        <li className='my-2 md:mx-4 font-medium text-[#FFFFF] hover:text-[#c1788b]'><Link to="/" target='_parent'>หน้าหลัก</Link></li>
                        <li className='my-2 md:mx-4 font-medium text-[#FFFFF] hover:text-[#c1788b]'><Link to="https://cgup-exhibition.vercel.app/" target='_parent'>All Exhibition</Link></li>
                        <li className='cursor-pointer relative my-2 md:ml-2 font-medium'>
                            <div
                                onClick={updateproToggle}
                                className='flex items-center text-[#000000] hover:text-[#c1788b] cursor-pointer'
                            >
                                <span>ผลงานจัดแสดง</span>
                                {protoggle
                                    ? <GoChevronUp className='ml-2 text-2xl stroke-1' />
                                    : <GoChevronDown className='ml-2 text-2xl stroke-1' />
                                }
                            </div>
                            {protoggle && (
                                <div className='absolute left-0 top-full mt-2 bg-white shadow-md rounded-xl w-[200px] opacity-95 z-50'>
                                    <ul className='flex flex-col p-3'>
                                        <li className='py-1 text-[#000000] hover:text-[#c1788b]'>
                                            <Link to='/Art-graphics' target='_parent'>Art & Graphic</Link>
                                        </li>
                                        <li className='py-1 text-[#000000] hover:text-[#c1788b]'>
                                            <Link to='/Product-craft' target='_parent'>Product & Packaging</Link>
                                        </li>
                                        <li className='py-1 text-[#000000] hover:text-[#c1788b]'>
                                            <Link to='/Multimedia' target='_parent'>Multimedia</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>



                    </ul>


                    <FaBars onClick={updateToggle} className='absolute mt-5 mr-5 right-5 cursor-pointer text-xl md:hidden' />
                </div>
            </nav>
        </div>
    )
}

export default Navbar

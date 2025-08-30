import React,{ useState } from 'react'
import Logo from '../assets/img/logo-allin.png'
import './Navbar.css'


//icon
import { GoChevronUp , GoChevronDown} from "react-icons/go";
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
        <div className='container mx-auto max-w-[1320px] relative h-auto md:p-10 pt-2 px-10 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px] ' >
            <div className='my-2 md:mx-10 flex' >
                <Link to="/" target='_parent' className='' >
                    <img className="h-13 w-auto " src={Logo} alt=""/>
                </Link>
            </div>

            <ul className={`${!toggle ? 'hidden' : 'flex' } flex flex-col md:my-5 mt-5 mb-3 md:mx-10 md:flex md:flex-row `}>
                <li className='my-2 md:mx-4 font-medium text-[#FFFFF] hover:text-[#c1788b]'><Link to="/" target='_parent'>หน้าหลัก</Link></li>
                <li className='my-2 md:mx-4 font-medium text-[#FFFFF] hover:text-[#c1788b]'><Link to="https://cgup-exhibition.vercel.app/" target='_parent'>All Exhibition</Link></li>
                <li className='cursor-pointer my-2 md:ml-2 font-medium'>
                    <div className='grid grid-cols-2 gap-2 text-[#FFFFF] hover:text-[#c1788b]'>
                        <p onClick={updateproToggle} className=' flex items-center md:items-center md:flex md:flex-row'>ผลงานจัดแสดง </p>
                        {!protoggle ? <GoChevronUp onClick={updateproToggle} className= ' cursor-pointer absolute right-5 top-37 md:top-1 md:ml-4 stroke-2 md:relative' /> 
                                                    :<GoChevronDown onClick={updateproToggle} className= ' cursor-pointer absolute right-5 top-37 md:top-1 md:ml-4 stroke-2 md:relative' />}
                    </div></li>
                
                
                <div className={`${!protoggle ? 'hidden' : 'absolute' } absolute top-45 md:top-15 md:right-40 container md:mx-auto md:max-w-[320px] h-auto grid md:justify-items-end md:items-center z-50`}>
                    <div className='bg-white h-auto md:w-[200px] max-w-[200px] opacity-95 p-3 rounded-xl shadow-md font-normal'>
                        <ul >
                            <li className='text-[#FFFFF] hover:text-[#c1788b] '><Link to='/Art-graphics' target='_parent' >Art & Graphic</Link></li>
                            <li className='text-[#FFFFF] hover:text-[#c1788b] '><Link to='/Product-craft' target='_parent'>Product & Packaging</Link></li>
                            <li className='text-[#FFFFF] hover:text-[#c1788b] '><Link to='/Multimedia'target='_parent'>Multimedia</Link></li>
                        </ul>
                    </div>
                </div>
            </ul>
            
            
            <FaBars onClick={updateToggle} className='absolute mt-5 mr-5 right-5 cursor-pointer text-xl md:hidden' />
        </div>
    </nav>
    </div>
  )
}

export default Navbar

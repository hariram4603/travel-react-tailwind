import React from 'react'
import { useState } from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FaPinterest } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }

  return (
    <div className=' flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BLISS.</h1>
        </div>
        <ul className=' hidden md:flex'>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
        <div className=' hidden md:flex'>
            <BiSearch className=' mr-2' size={20} />
            <BsPerson size={20} />
        </div>

        {/* hamburger */}

        <div onClick={handleNav} className=' md:hidden z-10 '>
            {nav ? <AiOutlineClose className=' text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            
        </div>

        {/* mobile menu dropdown */}

        <div onClick={handleNav} className={nav ? ' absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
            <ul>
                <h1>BLISS.</h1>
            <li className=' border-b'>Home</li>
            <li className=' border-b'>Destination</li>
            <li className=' border-b'>Travel</li>
            <li className=' border-b'>View</li>
            <li className=' border-b'>Book</li>
            <div className=' flex flex-col'>
                <button className=' my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className=' flex justify-between my-8'>
            <FaFacebook className='icon' />
            <FaXTwitter className='icon' />
            <FaInstagram className='icon' />
            <FaPinterest className='icon' />
            <FaYoutube className='icon' />
            </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
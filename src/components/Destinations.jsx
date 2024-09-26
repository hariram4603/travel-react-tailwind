import React from 'react'
import KavarattiBeach from '../assets/KavarattiBeach.jpg';
import MinicoyBeach from '../assets/MinicoyBeach.jpg';
import AgattiBeach from '../assets/AgattiBeach.jpg';
import KadmatBeach from '../assets/KadmatBeach.jpg';
import AminiBeach from '../assets/AminiBeach.jpg';
import KalpeniBeach from '../assets/KalpeniBeach.jpg';

const Destinations = () => {
  return (
    <div className=' max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All-Inclusive Resorts</h1>
      <p className=' py-4'>On Lakshadweep's Best Beaches</p>
      <div className=' grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className=' w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 ' src={MinicoyBeach} alt="" />
        <img className=' w-full h-full object-cover ' src={AgattiBeach} alt="" />
        <img className=' w-full h-full object-cover ' src={KadmatBeach} alt="" />
        <img className=' w-full h-full object-cover ' src={AminiBeach} alt="" />
        <img className=' w-full h-full object-cover ' src={KalpeniBeach} alt="" />

      </div>
    </div>
  )
}

export default Destinations
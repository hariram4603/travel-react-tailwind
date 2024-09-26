import React from 'react'

import KavarattiBeach from '../assets/KavarattiBeach.jpg';
import MinicoyBeach from '../assets/MinicoyBeach.jpg';
import AgattiBeach from '../assets/AgattiBeach.jpg';
import KadmatBeach from '../assets/KadmatBeach.jpg';
import AminiBeach from '../assets/AminiBeach.jpg';
import KalpeniBeach from '../assets/KalpeniBeach.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
    return (
      <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
  
      <SelectsCard bg={KavarattiBeach} text='Kavaratti' />
      <SelectsCard bg={MinicoyBeach} text='Minicoy' />
      <SelectsCard bg={AgattiBeach} text='Agatti' />
      <SelectsCard bg={KadmatBeach} text='Kadmat' />
      <SelectsCard bg={AminiBeach} text='Amini' />
      <SelectsCard bg={KalpeniBeach} text='Kalpeni' />
      
          
      </div>
    )
  }
  
  export default Selects
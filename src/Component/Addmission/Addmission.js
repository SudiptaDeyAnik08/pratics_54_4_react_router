import React from 'react'

import './Addmission.css'

import Professor from '../../asstes/pro.jpg'

function Addmission() {
  return (
    <div className='admissionBody flex' >
      <div className=' pro_image'>
        <img src={Professor} alt="" />
      </div>
      <div className='background_Addmission_image w-3/6'>
        <div className='bg-child_addmission text-justify'>
          <div className='bg-child_addmission2'>
            <h1 className='text-3xl font-bold text-white pb-3'>Apply for Admission</h1>
            <p className='text-3xl text-green-500 pb-10 '> Fall 2019 applications are now open</p>
            <p className='text-2xl text-white '>We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field they’re passionate about and dare to lead it.</p>
            <button className=' mt-5 ps-10 pt-4 pe-10 pb-4 bg-green-500 rounded-md text-white font-bold hover:bg-sky-900'>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addmission
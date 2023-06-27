import React from 'react'

import col1 from '../../asstes/col-icon-1.png'
import col2 from '../../asstes/col-icon-2.png'
import col3 from '../../asstes/col-icon-3.png'
import col4 from '../../asstes/col-icon-4.png'

function Card2Section() {
  return (
    <div className='flex ps-5 pe-5 pt-10 bg-blue-950 '>
        <div className='pe-5'>
            <div className='pb-10'> 
                <img src={col1} alt="" />
            </div>
            <div>
                <p className='font-bold text-white text-2xl pb-5'>Education Services</p>
                <p className="font-semibold text-blue-50">Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
                <p className=' text-green-700 pt-5 hover:font-bold hover:text-white'>Learn More</p>
            </div>
        </div>
        <div className='pe-5'>
            <div className='pb-10'>
            <img src={col2} alt="" />
            </div>
            <div>
                <p className='font-bold text-white text-2xl pb-5'>International Hubs</p>
                <p className="font-semibold text-blue-50">Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
                <p className=' text-green-700 pt-5 hover:font-bold hover:text-white'>Learn More</p>
            </div>
        </div>
        <div className='pe-5'>
            <div className='pb-10'>  
            <img src={col3} alt="" />
            </div>
            <div>
                <p className='font-bold text-white text-2xl pb-5'>Bachelor’s and Master’s</p>
                <p className="font-semibold text-blue-50">Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
                <p className=' text-green-700 pt-5 hover:font-bold hover:text-white'>Learn More</p>
            </div>
        </div>
        <div className='pe-5'>
            <div className='pb-10'>
            <img src={col4} alt="" />
            </div>
            <div>
                <p className='font-bold text-white text-2xl pb-5'>University Life</p>
                <p className="font-semibold text-blue-50">Kingster University was established by John Smith in 1920 for the public benefit and it is recognized</p>
                <p className=' text-green-700 pt-5 hover:font-bold hover:text-white'>Learn More</p>
            </div>
        </div>
    </div>
  )
}

export default Card2Section
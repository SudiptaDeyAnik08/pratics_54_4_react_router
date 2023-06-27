import React from 'react'

import './Header.css'
import img from '../../asstes/uni.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='headerClass flex justify-between'>
        <div className='flex '>
            <img src={img} alt="" className='w-20'/>
            <h1 className='text-5xl	pt-2	'> <small className='font-bold text-sky-900	'>Sudipta </small>University</h1>
        </div>

        <div className='pe-5 pt-6'>
         <Link className='ps-4 font-semibold' to="">Home</Link>
         <Link className='ps-4 font-semibold' to="">Pages</Link>
         <Link className='ps-4 font-semibold' to="">Academics</Link>
         <Link className='ps-4 font-semibold' to="">Admissions</Link>
         <Link className='ps-4 font-semibold' to="">Courses</Link>
         <Link className='ps-4 font-semibold' to="/quiz">Quiz</Link>
         <Link className='ps-4 font-semibold' to="">University Life</Link>
         <Link className='ps-4 font-semibold' to="">Search</Link>
        </div>
    </div>
  )
}

export default Header
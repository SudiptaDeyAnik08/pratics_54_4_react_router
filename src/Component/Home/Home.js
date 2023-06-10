import React from 'react'
import Header from '../Header/Header'

import '../Home/Home.css'

import { EnvelopeOpenIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div  className='flex justify-between pt-2 pb-3 homeNav'>
               
                <div className='flex ms-10 '>
                    <EnvelopeOpenIcon className='EnvelopeOpenIcon ms-2 me-2'></EnvelopeOpenIcon>
                    <p>contact@KUTheme.edu</p>

                    <PhoneIcon className='w-5 ms-2'></PhoneIcon>
                    <p>+1-3435-2356-222</p>
                </div>

                <div className='flex me-10 '>
                <p className='me-2'>Alumni</p>
                <p className='me-2'>Calendar</p>
                <p className='me-2'>Portal</p>
                <p className='me-2  bg-green-600 '>Support KU</p>
                </div>
            </div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

export default Home
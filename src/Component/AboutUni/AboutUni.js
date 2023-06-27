import React from 'react'

import './AboutUni.css'

import uni from '../../asstes/uni.png'

function AboutUni() {
    return (
        <div className='aboutUni'>
            <div className='aboutUni_child flex   '>

                <div className='child2'>
                    <div className=' flex'>
                        <div className='unilogo'>
                            <img src={uni} alt="" />
                        </div>
                        <div>
                            <p className='text-4xl pt-5 ps-3 text-white font-thin'> Sudipta Univarsity</p>
                        </div>
                    </div>
                    <div className="ouruni">
                        <p className='font-bold text-4xl pt-5 text-green-600'>About Our University</p>
                    </div>
                </div>

                <div className='child3 font-semibold text-teal-100 text-2xl'>
                    <p>We are one of the largest, most diverse universities in the USA with over 90,000 students in USA, and a further 30,000 studying across 180 countries for Sudipta University.</p>

                    <p className='pt-10'>Sudipta University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Sudipta has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector.</p>

                    <p className='pt-10'>Read More..! </p>
                </div>
            </div>

        </div>
    )
}

export default AboutUni
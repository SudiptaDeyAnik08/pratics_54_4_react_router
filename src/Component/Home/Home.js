import React from 'react'


import '../Home/Home.css'
import HomeBody from '../HomeBody.js/HomeBody'
import Addmission from '../Addmission/Addmission'
import AboutUni from '../AboutUni/AboutUni'
import Card2Section from '../Card2Section/Card2Section'


function Home() {
    return (
        <div className='home_main_bg'>
            <div className='bg_image  '>
                <div className='child_bg text-white '>
                    <h3 className='font-medium text-4xl ms-10 mb-10' >The Best Univarsity of The Country</h3>
                    <h1 className='font-bold text-8xl univarstiy p-4 pt-1 w-4/6 ms-10'>Sudipta Univarsity</h1>
                    <h2 className='ms-10 take_tour_area font-bold text-lg text-black p-5 bg-white w-40 mt-10'>Take A Tour</h2>
                </div>
            </div>
            <HomeBody></HomeBody>
            <Addmission></Addmission>
            <AboutUni></AboutUni>
            <Card2Section></Card2Section>
        </div>
    )
}

export default Home
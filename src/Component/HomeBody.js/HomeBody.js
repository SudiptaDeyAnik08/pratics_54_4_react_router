import React from 'react'

import "./HomeBody.css"

import icon1 from '../../asstes/icon-1.png'
import icon2 from '../../asstes/icon-2.png'
import icon3 from '../../asstes/icon-3.png'
import icon4 from '../../asstes/icon-4.png'

function HomeBody() {
  return (
    <div className='homeBody2 '>
       <div className='HomeBody flex justify-between'> 
       
       <div className="Card_Parenet p-8 flex">
        <div className="image mt-7">
        <img src={icon1} alt="" />
        </div>
        <div className="data p-5">
          <h1 className='pb-2'>University Life</h1>
          <p>Overall in here</p>
        </div>
       </div>
       <div className="Card_Parenet p-8 flex">
        <div className="image mt-7">
          <img src={icon2} alt="" />
        </div>
        <div className="data p-5">
          <h1 className='pb-2'>Graduation</h1>
          <p>Getting Diploma</p>
        </div>
       </div>
       <div className="Card_Parenet p-8 flex">
        <div className="image mt-7">
        <img src={icon3} alt="" />
        </div>
        <div className="data p-5">
          <h1 className='pb-2'>Athletics</h1>
          <p>Sport Clubs</p>
        </div>
       </div>
       <div className="Card_Parenet p-8 flex" >
        <div className="image mt-7">
        <img src={icon4} alt="" />
        </div>
        <div className="data p-5">
          <h1 className='pb-2'>Social</h1>
          <p>Overall in here</p>
        </div>
       </div>

       </div>       
    </div>
  )
}

export default HomeBody
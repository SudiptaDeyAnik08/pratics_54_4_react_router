import React from 'react'

import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';

function SingleQuiz({ data }) {
  // const [logo,name,total] = data;

  return (
    <div className='bg-gray-200 rounded	 m-3 '>
      <div className='m-2 bg-gray-700'>
        <img src={data.logo} alt="" />
      </div>
      <div className='bg-gray-200	p-4 flex justify-around'>
        <div>
          <p className='text-indigo-600	 font-bold		'  >{data.name}</p>
          <p className='text-cyan-500 font-bold		'> Total Quiz: {data.total}</p>
        </div>
        <button className='bg-blue-800	ps-7 pe-7 pt-1 pb-1 rounded text-emerald-100	hover:bg-sky-500	'>
          <Link to={`/Quiz/${data.id}`}>Start Quiz <FiArrowRightCircle></FiArrowRightCircle></Link>
        </button>
      </div>
    </div>
  )
}

export default SingleQuiz
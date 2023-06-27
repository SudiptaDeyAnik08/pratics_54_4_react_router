import React from 'react'

import { AiFillEyeInvisible } from "react-icons/ai";


function SimpleQuizBody({ data, num }) {



    console.log(data);
    const { correctAnswer, options, question } = data;

    const submitButton = () => {
        let userValue = document.getElementsByName('ans').value
        console.log(userValue)
    }

    return (
        <div className='border-solid border-2	 border-sky-500 m-5 w-4/6'>
            <p className='text-center	text-sky-600 font-bold text-lg	pt-3'> Quiz: {question}

                <AiFillEyeInvisible></AiFillEyeInvisible></p>

            <div >

                <div className=' grid grid-cols-2 ' >

                    <div className='border-solid border-2	 border-sky-500 p-6 m-4 rounded-md hover:bg-blue-700 hover:text-white	'>
                        <input type="radio" name="ans"  value={options[0]} />

                        <label className='p-2' for='ans' >{options[0]}</label>
                    </div>


                    <div className='border-solid border-2	 border-sky-500 p-6 m-4 rounded-md hover:bg-blue-700 hover:text-white	'>
                        <input type="radio" name="ans"  value={options[1]} />

                        <label className='p-2' for='ans' >{options[1]}</label>

                    </div>

                    <div className='border-solid border-2	 border-sky-500 p-6 m-4 rounded-md hover:bg-blue-700 hover:text-white	'>
                        <input type="radio" name="ans"  value={options[2]} />

                        <label className='p-2' for='ans' >{options[2]}</label>

                    </div>

                    <div className='border-solid border-2	 border-sky-500 p-6 m-4 rounded-md hover:bg-blue-700 hover:text-white	'>
                        <input type="radio" name="ans"  value={options[3]} />

                        <label className='p-2' for='ans' >{options[3]}</label>

                    </div>
                </div>


                <div className=' text-center mb-4'>

                    <button type="button" className='bg-sky-400 text-white w-1/6 p-2 rounded-md ' onClick={ submitButton}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default SimpleQuizBody
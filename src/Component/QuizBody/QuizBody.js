import React from 'react'
import { useLoaderData } from 'react-router-dom'

import './QuizBody.css';
import SimpleQuizBody from './SimpleQuizBody/SimpleQuizBody';

function QuizBody() {
    const data = useLoaderData();

    const { total, name, logo, questions } = data.data;

    return (
        <div >
            <div className='flex justify-around'>
                <div className='font-bold text-blue-600	'>Topic: {name}</div>
                <div className='font-bold text-blue-600	'>Total Number of Question : {total}</div>
                <div className='h-30 name_body'>
                    <img className='name_body2' src={logo} alt="JavaScript" />
                </div>
            </div>
                {
                    questions.map(res => <SimpleQuizBody data={res} key={res.id} ></SimpleQuizBody>)
                }
        </div>
    )
}

export default QuizBody
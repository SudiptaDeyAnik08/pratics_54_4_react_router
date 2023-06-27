import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleQuiz from '../SingleQuiz/SingleQuiz';

function Quiz() {

    const quiz = useLoaderData();

    console.log(quiz.data);

    return (
        <div>
            <div className='flex pt-10 m-5 mt-10'>
                {
                    quiz.data.map(res => <SingleQuiz key={res.id} data={res}></SingleQuiz>)
                }
            </div>
        </div>
    )
}

export default Quiz
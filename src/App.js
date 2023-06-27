import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Component/Home/Home';
import Main from './Component/Layout/Main';
import Quiz from './Component/Quiz/Quiz';
import QuizBody from './Component/QuizBody/QuizBody';

function App() {

  const router = createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/quiz',
        loader:async()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element:<Quiz></Quiz>
      },
      {
        path:'/Quiz/:quizid',
        loader:async({params})=>{
          return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizid}`)
        },
        element:<QuizBody></QuizBody>
      }
    ]
   },
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

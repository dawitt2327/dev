import React from 'react'
import verifyiImg from "../../../../assets/images/verify.png"
import pythonImg from "../../../../assets/images/python.svg.png"
import {VscVerified} from 'react-icons/vsc'
import reactImg from '../../../../assets/images/react.png'
import {FcClock} from 'react-icons/fc'




const Svt = () => {
  var listSvt=[1,2,3,4,5,6,6,7,8];
  var takenSvt= [1,2,3,4,5,6,7,8];
  return (
    <div className='bg-[#FBFBFB]'>
        <h2 className="ml-20 text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl">Multiple Choice Quizzes</h2 >
        <div className='ml-20 mt-8 p-8 font-semibold  text-gray-800 bg-white w-3/4 rounded-lg shadow-lg'>
            <h2>Become eligible for top software jobs by completing these steps:</h2>
            <ul class="list-verify list-3xl text-black-500">
                <li className='display: inline-flex m-4'> <img src={verifyiImg} alt="tick" className='display:inline-flex w-[2.5rem] sm:' /> <span className='mt-2'> Take a Quiz from your preferred Tech Stack</span></li> <br />
                <li className='display: inline-flex ml-4'><img src={verifyiImg} alt="tick" className='display:inline-flex w-[2.5rem] sm:' /><span className='mt-2'>Pass all Quizzes from one Tech Stack</span></li>
                
            </ul>       
        </div>
        <div className='ml-20 mt-8 p-8 font-semibold  text-gray-800 bg-white w-3/4 rounded-lg shadow-lg'>
            <h3>My Tech Stacks</h3>
            <div className="card-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              { 
                takenSvt.map((v, k) => <div className="card flex flex-col  items-center bg-[#FBFBFB] m-3 p-2 round-lg shadow-lg">
                <img src={pythonImg} alt="Card Image" className='h-40 round-lg shadow-sm' />
                <p>Python</p>
                <p className='bg-[#E0F5E6] pl-3 pr-1 w-20 rounded-md '>Passed</p>
                <p className='flex items-center'><VscVerified className='m-1' /> <span>Completed</span></p>
              </div>)
              }
              
              
            </div>
        </div>
        <div className='ml-15 mt-8 p-8   text-gray-800 bg-white w-8/9 rounded-lg shadow-lg'>
            <h3 className='font-semibold'>Additional Relevant Quizzes</h3>
          <div className="card-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {
            listSvt.map((v, k)=><div className="card flex flex-col  items-center bg-[#FBFBFB] m-3 p-2  round-lg shadow-lg">
            <img src={pythonImg} alt="Card Image" className='h-40 round-lg shadow-sm' />
            <p>Python</p>
            <p className='bg-[#E0F5E6] pl-3 pr-1 w-25 rounded-md flex '> <span><FcClock className='m-1' /></span> 20 min</p>
            <button className='border-2 border-black pr-5 m-0.5 pl-5 rounded-lg hover:bg-blue-300'>Start Quize</button>
          </div>)
          }

          </div>
            
        </div>
    </div>
  )
}

export default Svt
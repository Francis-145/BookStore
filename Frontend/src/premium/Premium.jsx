import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AllBooks from '../components/AllBooks'
import { Link } from 'react-router-dom'
const Premium = () => {
  return (
   <>
   <Navbar/>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
   <div className='pt-32 items-center justify-center text-center '>
   <h1 className='text-2xl  md:text-4xl'>We are Elated to Have you <span className='text-pink-400'>Here !!!</span></h1>
   <p className='mt-10'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nobis facere quis illo suscipit provident? Expedita libero voluptates quae veniam voluptatum in, velit nesciunt voluptate cupiditate similique iusto animi a! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto perferendis omnis assumenda fugiat vel sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, laboriosam.
   </p>
   <div>
   <Link to={"/"}>
   <button className='text-bold bg-pink-600 text-white rounded-lg py-2 px-5 mt-7 hover:bg-pink-700 duration-300'>Back</button>
   </Link>
    
   </div>
   </div>
   <AllBooks/>
    </div>
   <Footer/>
   </>
  )
}

export default Premium
//{
    /*
        <div className='min-h-screen'>
   <AllBooks/>
   </div>
    */
  // }
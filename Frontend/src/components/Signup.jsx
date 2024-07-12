import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Login from './Login'
const Signup = () => {

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
<>
<div className='ml-[500px] mt-44'>
<form method="dialog" onSubmit={handleSubmit(onSubmit)}>
<div id="my_modal_1" className="">
  
  <div className="modal-box dark:bg-slate-900 dark:text-white ">
  
    <h3 className="font-bold text-3xl pb-12   ">Sign Up</h3>
   <div className=''>
   <span className='font-semibold my-2'>Full Name</span><br />
    <input type='password' placeholder='enter your Password' className='w-60 px-3 py-3 border outline-none rounded-lg' />
   <br />
    <span className='font-semibold py-2'>Email</span><br />
    <input type='email' placeholder='enter your Email' className='w-60 px-3  py-3 border outline-none rounded-lg' {...register("email", { required: true })}/>
   </div><br />
    {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
   
   <span className='font-semibold'>Password</span><br />
    <input type='password' placeholder='enter your Password' className='w-60 px-3 py-3 border outline-none rounded-lg' />
    <div className='pt-12 flex justify-between'>
    <button className='bg-pink-500 text-white px-3 py-2 rounded-xl hover:bg-pink-700 duration-300 cursor-pointer'>Sign Up</button>
    <p>Already Have an Account?? {" "}<button className='text-blue-500 underline cursor-pointer' onClick={()=>document.getElementById("my_modal_1").showModal()}>
      LOGIN
    </button> {" "}
    <Login/>
    </p>
    
   </div>
    <div className="modal-action">
      
        {/* if there is a button in form, it will close the modal */}
        <Link to={"/"}> <button className="btn">Close</button></Link>
       
     
    </div>
  </div>
</div>
</form>
</div>
</>
  
  )
}

export default Signup

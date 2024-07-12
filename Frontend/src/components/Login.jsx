import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
const Login = () => {

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  //console.log(watch("example"));

  return (
    <div>
      <dialog id="my_modal_1" className="modal  ">
  <div className="modal-box dark:bg-slate-900 dark:text-white ">
    <h3 className="font-bold text-3xl pb-12 ">Login</h3>
   <div className=''>
    <span className='font-semibold'>Email</span><br />
    <input type='email' placeholder='enter your Email' className='w-60 px-3 border outline-none rounded-lg' 
    {...register("email", { required: true })}
    /> <br />
    {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
   </div><br />
   
   
    <span className='font-semibold'>Password</span><br />
    <input type='password' placeholder='enter your Password' className='w-60 px-3 border outline-none rounded-lg' 
    {...register("password", { required: true })}
    /><br/>
    {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
    <div className='pt-12 flex justify-between'>
    <button className='bg-pink-500 text-white px-3 py-2 rounded-xl hover:bg-pink-700 duration-300 cursor-pointer'>Login</button>
    <p>Not Registered?{" "} <Link className='underline text-blue-500 cursor-pointer' to={'/signup'}>Sign Up</Link>{""}</p>
   </div>
    <div className="modal-action">
      <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Login


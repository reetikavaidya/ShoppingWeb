import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';





const Register = ({openLogin}) => {
    const [uname,setUname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();


    const handleSubmit=(e)=>{
        e.preventDefault();
        
            dispatch(addUser({id: Date.now(),uname,email,password}))
        
        setUname('');
        setEmail('');
        setPassword('');
    };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label className='block text-gray-700'>UserName</label>
        <input  type='text' value={uname} className='w-full px-3 py-2 border ' placeholder='Enter User Name' onChange={(e)=>setUname(e.target.value)} required/>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Email</label>
          <input type='email'value={email} placeholder='Enter your email' className='w-full px-3 py-2 border ' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Password</label>
          <input type='password' value={password} placeholder='Enter your password' className='w-full px-3 py-2 border 'onChange={(e)=>setPassword(e.target.value)}/>
        </div> 
        <div className='mb-4'>
        <button type='submit' className='w-full bg-red-600 text-white py-2'>Sign Up</button>
            </div>
            <div className='mb-4'>
            <span className='text-gray-700'>Already have an account ! </span>
        <button onClick={openLogin} className='text-red-800'>Login</button>
            </div>

       </form>

    </div>
  )
}

export default Register
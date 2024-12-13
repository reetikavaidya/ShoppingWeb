import React, { useState } from 'react'

const Changeaddress = ({setAddress,setIsopenmodal}) => {
const[newAddress,setNewaddress]=useState("")
const onClose=()=>{
  setAddress(newAddress)
  setIsopenmodal(false)
}
  return (
    <div>
        <input type='text'placeholder='Enter new address' className='border p-2 w-full mb-4' onChange={(e)=>setNewaddress(e.target.value)}/>
        <div className='flex justify-end'>
            <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-800'onClick={()=>setIsopenmodal(false)}>Cancel</button>
            <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800'onClick={onClose} >Save Address</button>
        </div>
    </div>
  )
}

export default Changeaddress
import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../login/Login'
import Register from '../login/Register'
import Modal from './Modal'
import { setSearchTerm } from '../redux/productSlice'


function Navbar() {
    const products=useSelector(state=>state.cart.products)
    const navigate=useNavigate();
    const[isopenmodal,setIsopenmodal]=useState(false)
    const[isLogin,setIsLogin]=useState(true)
    const [search,setSearch]=useState()
    const dispatch=useDispatch()

    const handlesearch=(e)=>{
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
    }
   const openSignUp=()=>{
    setIsLogin(false)
    setIsopenmodal(true)
   }
   const openLogin=()=>{
    setIsLogin(true)
    setIsopenmodal(true)
   }
    const handleuserList=()=>{
        navigate('/user');
    }
  return (
   <nav className='bg=white shadow-md'>
    <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='text-lg font-bold'>
            <Link to="/">e-shop</Link> 
        </div>
        <div className='relative flex-1 mx-4'>
            <form onSubmit={handlesearch}>
                <input type='text' placeholder='Search product' className='w-full border py-2 px-4' onChange={(e)=>setSearch(e.target.value)}/>
                < FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
            </form>
        </div>
        <div className='flex items-center space-x-4'>
            <Link to="/cart" className='relative'>
            <FaShoppingCart className='text-lg'/>{products.length>0&&(<span className='absolute top-0 text-xs w-3 left-4 rounded-full flex justify-center items-center font-semibold bg-red-400'>{products.length}</span>)}
            </Link>
            <button className='hidden md:block' onClick={()=>setIsopenmodal(true)}>
                Login | Register
            </button>


           <button className='block md:hidden' >
            <FaUser/>
            </button> 
            <button className='bg-green-400 p-1 font-serif border border-black rounded shadow' onClick={handleuserList}>Account </button>
        </div>
    </div>
    <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
        <Link to="/" className='hover:underline'>Home</Link>
        <Link to="/shop" className='hover:underline'>Shop</Link>
        <Link to="/contact" className='hover:underline'>Contact</Link>
        <Link to="/about" className='hover:underline'>About</Link>
    </div>
    <Modal isopenmodal={isopenmodal} setIsopenmodal={setIsopenmodal}>
        {isLogin?<Login openSignUp={openSignUp}/>:<Register openLogin={openLogin}/>}
    </Modal>
   </nav>
  )
}

export default Navbar
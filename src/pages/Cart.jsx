import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Emptycart from '../assets/images/emptycart.png'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../components/Modal'
import Changeaddress from '../components/Changeaddress'
import { removeFromcart,handleincrement,handledecrement } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const cart=useSelector(state=>state.cart)
    const [address,setAddress]= useState('Main Street,1002')
  const [isopenmodal,setIsopenmodal]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  return (
    <div className='conatiner mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
        {cart.products.length>0 ?(
       <div  > 
        <h3 className='text-2xl font-semibold mb-4'>Shopping Cart</h3>
        <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
       
         <div className="md:w-2/3">
    <div className="flex justify-between text-lg border-b items-center mb-4 font-bold">
      <p>Products</p>
      <div className="flex text-lg space-x-10 items-center">
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
        <p>Remove</p>
      </div>
    </div>

    {cart.products.map((product) => (
      <div
        key={product.id}
        className="flex flex-col md:flex-row justify-between items-center space-x-4 mt-4 border-b pb-4"
      >
        <div className="flex items-center space-x-4 md:w-2/3">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-contain rounded"
          />
          <h3 className="text-lg font-semibold truncate">{product.name}</h3>
        </div>

        <div className="flex space-x-16 items-center">
          <p>Rs. {product.price}</p>
          <div className="flex items-center border">
            <button
              className="text-xl font-bold px-2 border-r"
              onClick={()=> dispatch(handledecrement(product.id))}

              aria-label="Decrease quantity"
            >
              -
            </button>
            <p className="text-xl px-2">{product.quantity}</p>
            <button
              className="text-xl px-2 font-bold border-l"
              onClick={()=> dispatch(handleincrement(product.id))}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <p>Rs. {(product.quantity * product.price).toFixed(2)}</p>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={()=> dispatch(removeFromcart(product.id))}
            aria-label="Remove product"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    ))}
         </div>
       
        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border m-2'>
            <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
            <div className='flex justify-between mb-5 border-b pb-1'>
                <span className='text-sm'>Total items:</span>
                <span>{cart.totalQuantity}</span>
            </div>
            <div className='mb-4 border-b pb-2'>
                <p>Shipping</p>
                <p className='ml-2'>Shipping To: {""}
                <span className='text-xs font-bold'>{address}</span>
                </p>
                
                <button className='text-blue-500 hover:underline mt-1 ml-2'onClick={()=>setIsopenmodal(true)} >Change Address</button>
                </div>
                <div className='flex justify-between mb-4'>
                    <span>Total price:</span>
                    <span>{cart.totalPrice.toFixed(2)}</span>
                </div>
                <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800' onClick={()=>navigate('/checkout')}>Proceed to checkout</button>
        

        </div>
       </div>
       <Modal isopenmodal={isopenmodal}
       setIsopenmodal={setIsopenmodal}>
        <Changeaddress setAddress={setAddress} setIsopenmodal={setIsopenmodal}/>
       </Modal>
       </div> 
  )
        :(
        <div className='flex justify-center'>
            <img src={Emptycart} alt='' className='h-96'/>
        </div>
 ) }

    </div>
  )
}


export default Cart
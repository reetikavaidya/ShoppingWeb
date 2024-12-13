import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({setOrder}) => {
    const [billingtoggle,setBillingToggle]=useState(false);
    const [shippingtoggle,setShippingToggle]=useState(false);
    const [paymenttoggle,setPaymentToggle]=useState(false);
    const [paymentMethod,setPaymentMethod]=useState("cod");
    const [shippinginfo,setShippinginfo]=useState({
        address:'',
        city:'',
        zipcode:''

    })
    const cart=useSelector(state=>state.cart)
    const navigate=useNavigate()
    const handleOrder=()=>{
        const newOrder={
            products:cart.products,
            orderNumber:"1233",
            shippinginformation:shippinginfo,
            totalPrice:cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/orderconform')

    }
    return (
    <div  className='conatiner mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
        <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
        <div className='flex flex-col md:flex-row items-start justify-between space-x-10 mt-8'>
            <div className="md:w-2/3">
            {/* Billing */}
            <div className='border p-2 mb-6'>
                <div className='flex items-center justify-between'  
                 onClick={()=>setBillingToggle(!billingtoggle)}>
                    <h3 className='text-lg font-semibold mb-2'  >Billing Information</h3>{billingtoggle ?<FaAngleDown/>:<FaAngleUp/>}
                </div>
                <div className={`text-left space-y-4 items-start ${billingtoggle ? "":"hidden"}`}>
                    <div>
                        <label className='block text-gray-700'>Name</label>
                        <input type='text' name='name' placeholder='FirstName_MiddleName_LastName' className='border border-black p-1 w-full'/>
                    </div>
               
                    <div>
                        <label className='block text-gray-700'>Email</label>
                        <input type='email' name='email' placeholder='abc@gmail.com' className='border border-black p-1 w-full'/>
                    </div>
               
                    <div>
                        <label className='block text-gray-700'>Phone No.</label>
                        <input type='text' name='phone' placeholder='123456789' className='border border-black p-1 w-full'/>
                    </div>
                </div>
            </div>
            {/* shipping */}
            <div className='border p-2 mb-6'>
                <div className='flex items-center justify-between'  
                onClick={()=>setShippingToggle(!shippingtoggle)}>
                    <h3 className='text-lg font-semibold mb-2'>
                        Shipping Information
                    </h3>
                    {shippingtoggle ?<FaAngleDown/>:<FaAngleUp/>}
                </div>
                <div className={`text-left space-y-4 ${shippingtoggle ? "":"hidden"}`}>
                    <div>
                        <label className='block text-gray-700'>Address</label>
                        <input type='text' name='address'
                        placeholder='Enter your address'className='border border-black p-1 w-full'
                        onChange={(e)=>setShippinginfo({...shippinginfo,address:e.target.value})}
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700'>City</label>
                        <input type='text' name='city'
                        placeholder='Enter your city' className='border border-black p-1 w-full'
                        onChange={(e)=>setShippinginfo({...shippinginfo,city:e.target.value})}
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700'>Zip Code</label>
                        <input type='text' name='zipcode'
                        placeholder='Enter zip code' className='border border-black p-1 w-full'
                        onChange={(e)=>setShippinginfo({...shippinginfo,zipcode:e.target.value})}
                        />
                    </div>
                </div>
            </div>
            {/* Payment */}
            <div className='border p-2 mb-6'>
                <div className='flex items-start justify-between '
                  onClick={() => setPaymentToggle(!paymenttoggle)}>
                    <h3 className='text-lg font-semibold mb-2'>
                        Payment Method
                    </h3>{paymenttoggle ?<FaAngleDown/>:<FaAngleUp/>}
                </div>
                <div className={`text-left space-y-4 ${paymenttoggle ? "":"hidden"}`}>
                    <div >
                        <input type='radio' name='payment' 
                        checked={paymentMethod==="cod"}
                        onChange={()=>setPaymentMethod("cod")} />
                        <label className='block text-gray-700 ml-2 '>Cash On Delivery</label>
                    </div>
                    <div>
                        <input type='radio' name='payment' 
                        checked={paymentMethod==="dc"}
                        onChange={()=>setPaymentMethod("dc")} />
                        <label className='block text-gray-700 ml-2'>Debit card</label>
                    </div>
                   {paymentMethod==="dc" && (
                    <div className=' bg-gray-100 p-4 rounded-lg mb-4'>
                        <h3 className='text-xl font-semibold mb-4'>Debit card Information</h3>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-semibold mb-2 text-left'>Card Number</label>
                            <input type='text'placeholder='Enter card number' className='border p-2 w-full rounded' required/>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                            <input type='text ' placeholder='Enter Card Holder Name'className='border p-2 w-full rounded' required/>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <div className='w-1/2 mr-2'>
                            <label className='block text-gray-700 font-semibold mb-2'>Expire Date</label>
                            <input type='date'className='border p-2 w-full rounded' required/>
                            </div>
                            <div>
                            <label className='block text-gray-700 font-semibold mb-2'>CVV </label>
                            <input type='text' placeholder='Enter CVV'className='border p-2 w-full rounded' required/>
                            </div>
                        </div>
                    </div>
                   
                )}
               
                    
                </div>
            </div>
            </div> 
            <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border '>
            <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
            <div className='space-y-4'>
                {cart.products.map(product=>(
                    <div key={product.id} className='flex justify-between'>
                        <div className='flex items-center'>
                            <img src={product.image} alt='' className='h-16 w-16 object-contain rounded'/>
                            </div>
                            <div className='ml-4 '>
                                <h4 className='text-md font-semibold '> {product.name} </h4>
                                <p className='text-gray-600'> Rs.{product.price*product.quantity}</p>
                            </div>
                       
                    </div>
                ))}
            </div>
            <div>
                <div className='mt-4 border-t pt-4'>
                    <span className='flex justify-between'>Total price:</span>
                    <span className='font-semibold'>Rs.{cart.totalPrice.toFixed(2)}</span>
                </div>
                <div>
                    <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
                    onClick={handleOrder}>Place Order</button>
                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Checkout
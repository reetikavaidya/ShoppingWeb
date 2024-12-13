import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderConform = ({order}) => {
    const navigate=useNavigate()
  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
        <h2 className='text-2xl fint-semibold mb-4'>Thank you for your order</h2>
        <p>Yor Order has been placed successfully you will recieve an email conformation shortly</p>
        <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
            <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
            <p>Order Number:{order.orderNumber}</p>
            <div className='mt-4'>
                <h2 className='text-md font-semibold mb-2'>Shipping Information</h2>
                <p>{order.shippinginformation.address}</p>
                <p>{order.shippinginformation.city}</p>
                <p>{order.shippinginformation.zipcode}</p>

            </div>
            <div className='mt-4'>
                <h2 className='text-md font-semibold mb-2'>ProductS Ordered</h2>
                {order.products.map(product=>(
                    <div key={product.id} className='flex justify-between mt-2'>
                        <p>{product.name} x {product.quantity} </p>
                        <p>Rs.{product.price*product.quantity} </p>

                    </div>
                    
                ))}
            </div>
            <div className='mt-4 flex justify-between'>
                <span>Total price</span>
                <span className='font-semibold'>Rs.{order.totalPrice}</span>
            </div>
            <div className='mt-6'>
                <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600'>Track Order</button>
                <button className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800' onClick={()=>navigate('/shop')}>Continue Shopping</button>
            </div>
        </div>
    </div>
  )
}

export default OrderConform
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addtocart } from '../redux/cartSlice';

const Productdetails = () => {
  const { id } = useParams();
  const products = useSelector(state => state.product.products);
  const dispatch=useDispatch()
  const handleAddToCart =(e,product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addtocart(product))
    alert("Product added successfully!!")

  }
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const newProduct = products.find(product => product.id === parseInt(id));
    setProduct(newProduct || null);
  }, [id, products]);
if(!product) return <div>Loading.....</div>
  return (
    <div>
      {product ? (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row gap-x-16'>
         <div className='md:w-2/3 py-4 shadow-md md:px-8 h-96 flex justify-center'>
          <img src={product.image} alt={product.name} className='h-full' />
         </div>
      
        <div className='md:w-1/4 py-4 shadow-md md:p-16 flex flex-col items-center gap-y-2'>
          <h2 className='text-3xl font-semibold mb-2'>{product.name}</h2>
          <p className='text-xl font-semibold text-gray-800 mb-4'>Price: Rs.{product.price}</p>

          <div className=' bottom-4 right-2 flex items-center justify-center p-3 bg-red-600 group text-white text-sm rounded hover:w-32 hover:bg-red-700 transition-all' 
        onClick={(e)=>handleAddToCart(e,product)}>
            
            <span className=''>Add to cart</span>
        </div>
          </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Productdetails;

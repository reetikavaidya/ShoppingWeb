import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import NotFound from '../assets/images/NotFound.png'

const Filterdata = () => {
    const filterProducts = useSelector(state=>state.product.filteredData)
  return (
    <div className='mx-auto py-12 bg-white mt-2 px-3 md:px-16 lg:px-24'>
        {filterProducts.length > 0?
        <>
    <h2 className='text-2xl font-bold mb-6 text-center'>SHOP</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer' >
      {
        filterProducts.map(((product)=>(
          <ProductCard product={product}/>
           ) ))} 
        </div>
        </>
        :
        <div className='flex justify-center'>
            <img src={NotFound} alt='' className='h-96 object-cover'/>
        </div>
}
  </div>
  )
}

export default Filterdata
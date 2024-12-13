import React from 'react'
import Mencategory from '../assets/images/Mencategory.jpeg'
import Womencategory from '../assets/images/Womencategory.avif'
import Kidcategory from '../assets/images/Kidcategory.jpeg';

const categories=[
    {
        title:'Men',
        imageUrl:Mencategory,
    },
    {
     title:'Women',
     imageUrl:Womencategory,
 },
 {
     title:'Kids',
     imageUrl:Kidcategory,
 },

 ];

function Categoriessection() {
   
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer my-4'>
        {categories.map((category,index)=>
        <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={category.imageUrl} alt=""  className='w-full h-full object-cover rounded-lg shadow-md'/>
            <div className='absolute top-20 left-10'>
                <p className='text-xl font-bold'>{category.title}</p>
                <p className='text-gray-700'>View All</p>


            </div>
        </div>
        )}
    </div>
  )
}

export default Categoriessection
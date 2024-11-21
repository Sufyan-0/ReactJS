
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function ProductCard() {
    const [data , setData] = useState()
    const API = "https://dummyjson.com/products"
  
    const productsFunc =async()=>{
     const product = await axios(API)
    // console.log(product?.data?.products)
     setData(product?.data?.products)
    }
    useEffect(()=>{
      productsFunc()
    },[])
   console.log(data)
  return (
    <>

  <div className='container mx-auto mt-5 grid grid-cols-4 gap-4'>
        {data?.map((item)=>{
           return <>
             <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
               <div className="relative">
               <img className="w-full" src={item.thumbnail} alt="Product Image"/>
               <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
               </div>
           </div>
           <div className="p-4">
               <h3 className="text-lg font-medium mb-2">{item.title}</h3>
               <p className="text-gray-600 text-sm mb-4">{item.description}</p>
               <div className="flex items-center justify-between">
                   <span className="font-bold text-lg">{item.price}</span>
                   <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
               Buy Now
             </button>
               </div>
           </div>
           </div>

           </>
        })}
 </div>

    </>
  )
}

export default ProductCard
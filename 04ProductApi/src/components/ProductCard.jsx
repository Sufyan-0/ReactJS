
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import Filter from './Filter';
function ProductCard() {
    const [data , setData] = useState()
    const [filteredData, setFilteredData] = useState([]);
    const API = "https://dummyjson.com/products"
  
    const productsFunc =async()=>{
     const product = await axios(API)
    // console.log(product?.data?.products)
     setData(product?.data?.products)
     setFilteredData(product?.data?.products); 
    }
    useEffect(()=>{
      productsFunc()
    },[])
   
    const handleSearch = (searchQuery) => {
      if (searchQuery.trim() === '') {
        // If search query is empty, show all products
        setFilteredData(data);
      } else {
        // Filter products based on the search query
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
      }
    };
  return (
    <>
  <SearchBar onSearch={handleSearch}/>
   <Filter></Filter>
   {(filteredData.length === 0)? <div className='container mx-auto flex justify-center mt-5 text-red-600'>Not Found</div> :  <div className='container mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredData?.map((item)=>{
           
           
           return(
             <div key ={item.id}className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
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

)
        })}
 </div> }
 

    </>
  )
}

export default ProductCard
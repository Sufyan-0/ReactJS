import React from 'react'


function SearchBar() {
  return (
       <div className="container mx-auto">

       
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        onChange={(event)=>{
          console.log(event.target.value)
        }}
        type="search"
        placeholder="What are you looking for... "
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
      />
    </div>
    </div>
  )
}

export default SearchBar
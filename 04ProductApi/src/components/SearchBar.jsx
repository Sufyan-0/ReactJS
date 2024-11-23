import React, { useEffect, useState } from 'react'


function SearchBar({ onSearch }) {
  // console.log("props" , props.data)
  const [userSearch , setUserSearch] = useState("")
  
  const handleSearch = () => {
    onSearch(userSearch); // Pass the search query to the parent
  };
  const handleKeyPress = (event) => {
    
    if (event.key === 'Enter') {
      handleSearch(); // Trigger search on Enter key press
    }else if (event.key === 'Backspace') {
      console.log("Backspace")
      handleSearch(); // Trigger search on Enter key press
    }
  };


  return (
       <div className="container w-full mx-auto flex justify-center">   
    <div className="relative mt-2 rounded-md shadow-sm item-center">
    <input
          value={userSearch}
          onChange={(event) => setUserSearch(event.target.value)}
          onKeyPress={handleKeyPress}
          type="search"
          placeholder="What are you looking for..."
          className=" rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
        <button
          onClick={handleSearch}
          className="inline  ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
    </div>
    </div>
  )
}

export default SearchBar
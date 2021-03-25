import React from "react"

const Location = () => {
  return (
    <div className="w-96 mt-16 text-gray-500 font-semibold">
      <label htmlFor="checkbox" className="flex items-center ">
        <input type="checkbox" className="mr-3 w-4 h-4" />
        Full Time
      </label>
      <div className="uppercase font-bold text-gray-400 mt-7">Location</div>
      <div className="bg-white rounded pl-2 flex justify-between items-center mt-6 shadow-md overflow-hidden">
        <span className="material-icons text-gray-400 block ml-4">public</span>
        <input
          type="text"
          placeholder="City, state, zip code or country"
          className="w-11/12 py-3 px-5 outline-none"
        />
      </div>
      <label htmlFor="radio" className="flex items-center mt-7">
        <input type="radio" name="city" className="mr-3 w-4 h-4" />
        London
      </label>
      <label htmlFor="radio" className="flex items-center mt-3">
        <input type="radio" name="city" className="mr-3 w-4 h-4" />
        Amsterdam
      </label>
      <label htmlFor="radio" className="flex items-center mt-3">
        <input type="radio" name="city" className="mr-3 w-4 h-4" />
        New York
      </label>
      <label htmlFor="radio" className="flex items-center mt-3">
        <input type="radio" name="city" className="mr-3 w-4 h-4" />
        Berlin
      </label>
    </div>
  )
}

export default Location

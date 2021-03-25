import React from "react"
import skyscrapers from "../skyscrapers.png"

const SearchInput = () => {
  return (
    <div className="mt-10">
      <div
        className="bg-cover bg-center w-full h-36 flex items-center justify-center rounded-lg"
        style={{ backgroundImage: `url(${skyscrapers})` }}
      >
        <form
          action="#"
          className="w-10/12 bg-white flex justify-between items-center p-1 rounded pl-8 relative"
        >
          <span className="material-icons text-gray-400  absolute left-5">
            work_outline
          </span>
          <input
            type="text"
            placeholder="Title, companies, expertise or benefits"
            className="w-9/12 py-2 px-5 outline-none ml-3"
          />
          <button className=" text-white  font-semibold bg-blue-500 py-4 px-12 rounded hover:bg-blue-600">
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchInput

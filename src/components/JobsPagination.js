import React from "react"

const JobsPagination = ({ page, setPage, hasNextPage }) => {
  const adjustPage = (amount) => {
    setPage((prevPage) => prevPage + amount)
  }

  return (
    <div className="md:ml-8 lg:mt-8 flex rounded text-blue-900">
      {page !== 1 && (
        <button
          onClick={() => adjustPage(-1)}
          className="py-2 px-3 leading-tight bg-white border border-gray-300  border-r-0 ml-0 rounded-l hover:bg-gray-200"
        >
          Previous
        </button>
      )}
      {page !== 1 && (
        <button
          className="py-2 px-3 leading-tight bg-white border border-gray-300 border-r-0 hover:bg-gray-200"
          onClick={() => setPage(1)}
        >
          1
        </button>
      )}
      {page > 3 && (
        <div className="py-2 px-3 leading-tight bg-white border border-gray-300 border-r-0 hover:bg-gray-200">
          ...
        </div>
      )}
      {page > 2 && (
        <button
          className="py-2 px-3 leading-tight bg-white border border-gray-300 border-r-0 hover:bg-gray-200"
          onClick={() => adjustPage(-1)}
        >
          {page - 1}
        </button>
      )}
      <button className="py-2 px-3 leading-tight bg-blue-500 text-white border border-gray-300 border-r-0 hover:bg-blue-600">
        {page}
      </button>
      {hasNextPage && (
        <button
          className="py-2 px-3 leading-tight bg-white border border-gray-300 border-r-0 hover:bg-gray-200"
          onClick={() => adjustPage(1)}
        >
          {page + 1}
        </button>
      )}
      {hasNextPage && (
        <button
          className="py-2 px-3 leading-tight bg-white border border-gray-300 rounded-r hover:bg-gray-200"
          onClick={() => adjustPage(1)}
        >
          Next
        </button>
      )}
    </div>
  )
}

export default JobsPagination

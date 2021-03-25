import React from "react"

const JobCard = () => {
  return (
    <div className="bg-white mt-8 ml-8 flex items-center p-3 h-28 text-blue-900 shadow-md rounded relative">
      <div className="bg-green-500 w-20 h-20 rounded"></div>
      <div className="ml-3 font-semibold">
        <div className="text-xs font-bold">Kasisto</div>
        <div className="text-lg">Front-End Software Engineer</div>
        <span className="text-xs font-bold inline-block mt-1 border rounded px-1 py-0.5 border-blue-900">
          Full Time
        </span>
      </div>
      <div className="text-xs text-gray-400 flex absolute right-5 bottom-4 font-medium">
        <div className="mr-5 flex items-center">
          <span className="material-icons text-lg material-icons text-gray-400 block mr-1">
            public
          </span>
          New York
        </div>
        <div className="flex items-center">
          <span className="material-icons text-lg material-icons text-gray-400 block mr-1">
            schedule
          </span>
          5 days ago
        </div>
      </div>
    </div>
  )
}

export default JobCard

import React from "react"
import { Link } from "react-router-dom"

const JobCard = ({ job }) => {
  return (
    <div className="bg-white mt-8 lg:ml-8 flex items-center p-3 md:h-28 text-blue-900 shadow-md rounded md:relative">
      <img
        src={
          job.company_logo ||
          "https://via.placeholder.com/100x100.png?text=Not+Found"
        }
        alt={job.title}
        className="w-20 h-20 rounded object-contain"
      />
      <div>
        <div className="ml-3 font-semibold">
          <div className="text-xs font-bold">{job.company}</div>
          <Link to={`/details/${job.id}`}>
            <div className="sm:text-lg leading-6">{job.title}</div>
          </Link>
          <span className="text-xs font-bold inline-block mt-1 border rounded px-1 py-0.5 border-blue-900">
            {job.type}
          </span>
        </div>
        <div className="ml-3 mt-1 text-xs text-gray-400 flex lg:absolute lg:right-5 lg:bottom-4 font-medium">
          <div className="mr-5 flex items-center">
            <span className="material-icons text-lg material-icons text-gray-400 block mr-1">
              public
            </span>
            {job.location}
          </div>
          <div className="flex items-center">
            <span className="material-icons text-lg material-icons text-gray-400 block mr-1">
              schedule
            </span>
            {new Date(job.created_at).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCard

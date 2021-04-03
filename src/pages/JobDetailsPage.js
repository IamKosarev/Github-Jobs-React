import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"

const JobDetailsPage = ({ jobs }) => {
  const { jobId } = useParams()
  const job = jobs.find((job) => job.id === jobId)

  return (
    <div className="flex flex-col lg:flex-row mt-8">
      <div className="w-72">
        <Link to="/">
          <button className="flex text-blue-500 hover:text-blue-600 font-semibold ">
            <div className="material-icons transform rotate-180 mr-2">
              arrow_right_alt
            </div>
            <div>Back to search</div>
          </button>
        </Link>
        <div className="uppercase font-bold text-gray-400 mt-7">
          How to apply
        </div>
        <div className="mt-4 font-semibold text-blue-900 break-all">
          <ReactMarkdown source={job.how_to_apply} />
        </div>
      </div>

      <div className="mt-12 lg:mt-0 lg:ml-20 text-blue-900 w-11/12 lg:w-9/12">
        <h2 className="font-semibold text-2xl items-center">{job.title}</h2>
        <div className="text-xs font-bold inline-block mt-3 border rounded px-1 py-0.5 border-blue-900">
          {job.type}
        </div>
        <div className="mt-3 flex items-center text-sm text-gray-400">
          <span className="material-icons text-lg material-icons block mr-1">
            schedule
          </span>
          {new Date(job.created_at).toLocaleDateString()}
        </div>
        <div className="mt-8 flex items-center">
          <img
            src={
              job.company_logo ||
              "https://via.placeholder.com/100x100.png?text=Not+Found"
            }
            alt={job.title}
            className="w-20 h-20 rounded object-contain"
          />
          <div className="ml-3">
            <h4 className="text-lg font-semibold ">{job.company}</h4>
            <div className="flex items-center text-sm text-gray-400">
              <span className="material-icons text-lg material-icons text-gray-400 block mr-1">
                public
              </span>
              {job.location}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <ReactMarkdown source={job.description} />
        </div>
      </div>
    </div>
  )
}

export default JobDetailsPage

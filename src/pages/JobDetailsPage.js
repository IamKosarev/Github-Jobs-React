import React from "react"
import { Link, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"

const JobDetailsPage = ({ jobs }) => {
  const { jobId } = useParams()
  const job = jobs.find(job => job.id === jobId)

  return (
    <section className="bg-gray-100">
      <div className="container min-h-screen mx-auto bg-gray-100 px-3 sm:px-10 lg:px-30 py-10">
        <div className="text-3xl font-light">
          <span className="font-bold">Guthub</span> Jobs
        </div>
        <div className="flex mt-8">
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
            <div className="mt-4 font-semibold text-blue-900">
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>

          <div className="ml-20 text-blue-900 w-9/12">
            <h2 className="font-semibold text-2xl flex items-center">
              {job.title}
              <span className="text-xs font-bold inline-block ml-4 border rounded px-1 py-0.5 border-blue-900">
                {job.type}
              </span>
            </h2>
            <div className="flex items-center text-sm text-gray-400">
              <span className="material-icons text-lg material-icons block mr-1">
                schedule
              </span>
              {new Date(job.created_at).toLocaleDateString()}
            </div>
            <div className="mt-8 flex items-center">
              {/* <div className="w-10 h-10 rounded bg-green-400"></div> */}
              <img
                src={job.company_logo}
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
      </div>
    </section>
  )
}

export default JobDetailsPage

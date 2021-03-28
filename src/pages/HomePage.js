import React from "react"
import SearchInput from "../components/SearchInput"
import Location from "../components/Location"
import JobCard from "../components/JobCard"
import useFetchJobs from "../useFetchJobs"
import { useState } from 'react'

const HomePage = ({jobs, loading, error}) => {


  return (
    <section className="bg-gray-100">
      <div className="container mx-auto bg-gray-100 px-3 sm:px-10 lg:px-30 py-10">
        <div className="text-3xl font-light">
          <span className="font-bold">Guthub</span> Jobs
        </div>
        <SearchInput />
        <div className="flex">
          <Location />
          <div className="w-11/12 mt-8">
            {loading && <span>Loading...</span>}
            {error && <h1>Error. Try Refreshing</h1>}
            {jobs.map((job) => {
              return <JobCard key={job.id} job={job} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage

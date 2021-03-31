import React from "react"
import SearchInput from "../components/SearchInput"
import Location from "../components/Location"
import JobCard from "../components/JobCard"
import JobsPagination from "../components/JobsPagination"

const HomePage = ({
  jobs,
  loading,
  error,
  params,
  handleParamChange,
  page,
  setPage,
  hasNextPage,
}) => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto bg-gray-100 px-3 sm:px-10 lg:px-30 py-10">
        <div className="text-3xl font-light">
          <span className="font-bold">Guthub</span> Jobs
        </div>
        <SearchInput handleParamChange={handleParamChange} />
        <div className="flex">
          <Location handleParamChange={handleParamChange}  />
          <div className="w-11/12 mt-8">
            <JobsPagination
              page={page}
              setPage={setPage}
              hasNextPage={hasNextPage}
            />
            {loading && <span>Loading...</span>}
            {error && <h1>Error. Try Refreshing</h1>}
            {jobs.map((job) => {
              return <JobCard key={job.id} job={job} />
            })}
            <JobsPagination
              page={page}
              setPage={setPage}
              hasNextPage={hasNextPage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage

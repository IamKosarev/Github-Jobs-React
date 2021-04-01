import React from "react"
import SearchInput from "../components/SearchInput"
import Location from "../components/Location"
import JobCard from "../components/JobCard"
import JobsPagination from "../components/JobsPagination"

const HomePage = ({
  jobs,
  loading,
  error,
  handleParamChange,
  page,
  setPage,
  hasNextPage,
}) => {
  return (
    <>
      <SearchInput handleParamChange={handleParamChange} />
      <div className="flex">
        <Location handleParamChange={handleParamChange} />
        <div className="w-11/12 mt-8">
          {!loading && (
            <JobsPagination
              page={page}
              setPage={setPage}
              hasNextPage={hasNextPage}
            />
          )}
          {loading && <span>Loading...</span>}
          {error && <h1>Error. Try Refreshing</h1>}
          {jobs.map((job) => {
            return <JobCard key={job.id} job={job} />
          })}
          {!loading && (
            <JobsPagination
              page={page}
              setPage={setPage}
              hasNextPage={hasNextPage}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage

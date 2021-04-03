import React from "react"
import SearchInput from "../components/SearchInput"
import Location from "../components/Location"
import JobCard from "../components/JobCard"
import JobsPagination from "../components/JobsPagination"
import Loader from "../components/Loader"

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
      <div className="flex flex-col lg:flex-row">
        <Location handleParamChange={handleParamChange} />
        <div className="md:w-11/12 mt-6 lg:mt-8">
          <JobsPagination
            page={page}
            setPage={setPage}
            hasNextPage={hasNextPage}
          />
          {loading && <Loader />}
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

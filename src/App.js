import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage"
import JobDetailsPage from "./pages/JobDetailsPage"
import useFetchJobs from "./useFetchJobs"

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  const handleParamChange = (e) => {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams((prevParams) => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage
              jobs={jobs}
              loading={loading}
              error={error}
              params={params}
              handleParamChange={handleParamChange}
              page={page}
              setPage={setPage}
              hasNextPage={hasNextPage}
            />
          </Route>
          <Route exact path="/details/:jobId">
            <JobDetailsPage jobs={jobs} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

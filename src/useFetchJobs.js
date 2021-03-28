import { useReducer, useEffect } from "react"
import axios from "axios"

const BASE_URL =
  "https://artem-cors-proxy.herokuapp.com/https://jobs.github.com/positions.json"

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, jobs: [] }
    default:
      return state
  }
}

const useFetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios
      .get(BASE_URL, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        params: { markdown: true, page: page, ...params },
      })
      .then(({ data }) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: data } })
      })
      .catch((error) => {
        if (axios.isCanсel(error)) return
        dispatch({ type: ACTIONS.ERROR, payload: { error } })
      })

    return () => {
      cancelToken.cancel()
    }
  }, [params, page])

  return state
}

export default useFetchJobs

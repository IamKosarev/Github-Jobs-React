import React from "react"
import BeatLoader from "react-spinners/BeatLoader"

const Loader = () => {
  return (
    <div className="mx-auto w-40 mt-16">
      <BeatLoader color={"#3b82f6"} size={40} />
    </div>
  )
}

export default Loader

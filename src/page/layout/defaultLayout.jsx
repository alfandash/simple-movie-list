import React from "react"

const DefaultLayout = (props) => {
  return (
    <>
      <div className="header">
        <header className="d-block w-100 text-center">
          <h1>Movie List</h1>
        </header>
      </div>
      <div className="container">{props.children}</div>
    </>
  )
}

export default DefaultLayout

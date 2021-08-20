import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import actionType from "../redux/actionType"
import axios from "axios"

import Layout from "./layout/defaultLayout"

import SearchForm from "../component/searchForm"
import MovieList from "../component/movieList"

const Home = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("batman")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get("http://www.omdbapi.com?apikey=faf7e5bb&s=" + title + "&page=1")
      .then((resp) => {
        const { data } = resp
        if (data.Response === "True") {
          dispatch({ type: actionType.loadMovieList, data: data || {} })
        } else {
          dispatch({ type: actionType.loadMovieList, data: {} })
        }
        dispatch({ type: actionType.loadMovieTitle, data: title })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [title])

  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-12">
            <SearchForm title={title} setTitle={setTitle} />
          </div>
        </div>
        {isLoading ? (
          <div className="main-loader d-flex w-100 justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="sr-only" />
            </div>
          </div>
        ) : (
          <MovieList />
        )}
      </Layout>
    </>
  )
}

export default Home

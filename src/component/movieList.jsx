import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import actionType from "../redux/actionType"
import PosterModal from "./posterModal"
import useInfiniteScroll from "../hooks/useInfiniteScroll"
import axios from "axios"

const MovieList = () => {
  const dispatch = useDispatch()
  const { movieList, movieTitle } = useSelector((state) => state)

  // infinite scroll function and custom hooks
  const [page, setPage] = useState(1)
  const ref = useRef(null)
  const [isFetching, setIsFetching] = useInfiniteScroll({
    callback: handleFetching,
    ref: ref,
  })

  function handleFetching() {
    axios
      .get(
        "http://www.omdbapi.com?apikey=faf7e5bb&s=" +
          movieTitle +
          "&page=" +
          page
      )
      .then((resp) => {
        const { data } = resp
        dispatch({ type: actionType.appendMovieList, data: data || [] })
        setPage(page + 1)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }

  return (
    <>
      <div className="row">
        {movieList?.Search?.map((movie, index) => {
          return (
            <div className="col-12 col-sm-4" key={index}>
              <div className="card shadow my-2">
                <img
                  src={movie.Poster}
                  className="card-img-top cursor-pointer"
                  alt={"image-" + index}
                  onClick={() =>
                    dispatch({
                      type: actionType.loadMoviePoster,
                      data: movie.Poster,
                    })
                  }
                />
                <div className="card-body">
                  <h3>{movie.Title}</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href={"/detail/" + movie.imdbID}>
                    <button type="button" className="btn btn-info">
                      Detail
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )
        }) || (
          <div className="col-12 text-center p-5">
            <h4>Empty result..</h4>
          </div>
        )}
        {movieList?.Search?.length >= 5 &&
          Number(movieList.totalResults) >= page && (
            <div
              className="col-12 d-flex justify-content-center py-4 mb-4"
              ref={ref}
            >
              {isFetching && (
                <div className="spinner-border" role="status">
                  <span className="sr-only" />
                </div>
              )}
            </div>
          )}
      </div>
      <PosterModal />
    </>
  )
}

export default MovieList

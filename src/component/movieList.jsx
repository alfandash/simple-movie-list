import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionType from '../redux/actionType';
import PosterModal from './posterModal';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import axios from "axios";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movieList, movieTitle } = useSelector((state) => state);

  // infinite scroll function and custom hooks
  const ref = useRef(null);
  const [isFetching, setIsFetching] = useInfiniteScroll({ callback: handleFetching, ref: ref });

  function handleFetching() {
    axios.get("http://www.omdbapi.com?apikey=faf7e5bb&s="+ movieTitle +"&page=1")
      .then((resp) => {
        const { data } = resp;
        dispatch({ type: actionType.loadMovieList, data: data?.Search || []})
      })
      .finally(() => {
        setIsFetching(false)
      })
  }

  return (
    <>
      <div className="row">
      {
        movieList.map((movie, index) => {
          return (
            <div className="col-12 col-sm-4" key={index}>
              <div className="card">
                <img src={movie.Poster} className="card-img-top cursor-pointer" alt={"image-" + index} onClick={() => dispatch({ type: actionType.loadMoviePoster, data: movie.Poster})}/>
                <div className="card-body">
                  <h3>{movie.Title}</h3>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          )
        })
      }
      <div className="col-12 d-flex justify-content-center py-4 mb-4" ref={ref}>
        {
          movieList.length >= 5 && isFetching && (
            <div className="spinner-border" role="status">
              <span className="sr-only"/>
            </div>
          )
        }
      </div>
      </div>
      <PosterModal />
    </>
  )
}

export default MovieList;
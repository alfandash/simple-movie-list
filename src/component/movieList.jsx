import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionType from '../redux/actionType';
import PosterModal from './posterModal'

const MovieList = () => {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state);

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
      </div>
      <PosterModal />
    </>
  )
}

export default MovieList;
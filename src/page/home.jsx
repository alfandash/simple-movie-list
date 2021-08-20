import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import actionType from '../redux/actionType';
import axios from "axios";

import SearchForm from "../component/searchForm";
import MovieList from "../component/movieList";

const Home = () => {

  const dispatch = useDispatch();

  const [page, setPage] = useState(1)
  const [title, setTitle] = useState('batman')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    axios.get("http://www.omdbapi.com?apikey=faf7e5bb&s="+ title +"&page=" + page)
      .then((resp) => {
        const { data } = resp;
        dispatch({ type: actionType.loadMovieList, data: data?.Search || []})
        dispatch({ type: actionType.loadMovieTitle, data: title})
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [title])



  return (
    <>
      <div className="header">
        <header className="d-block w-100 text-center">
          <h1>Movie List</h1>
        </header>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SearchForm title={title} setTitle={setTitle}/>
          </div>
        </div>
        {
          isLoading ? (
            <div className="spinner-border" role="status">
              <span className="sr-only"/>
            </div>
          ) : (
            <MovieList />
          )
        }
       
      </div>
    </>
  )
}

export default Home
import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "./layout/defaultLayout"

import MovieDetail from '../component/movieDetail';

const Detail = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [movieInfo, setMovieInfo] = useState('')
  const { id } = useParams()

  useEffect(() => {
    setIsLoading(true)
    axios.get("http://www.omdbapi.com?apikey=faf7e5bb&i=" + id)
      .then((resp) => {
        const { data } = resp;
        console.log(data)
        setMovieInfo(data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])



  return (
    <>
    <Layout>
      {
        isLoading ? (
          <div className="main-loader d-flex w-100 justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="sr-only"/>
            </div>
          </div>
        ) : (
          <MovieDetail {...movieInfo}/>
        )
      }
    </Layout>
      
    </>
  )
}

export default Detail
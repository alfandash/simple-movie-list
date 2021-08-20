import React from "react";


const MovieDetail = (props) => {

  console.log(props, 'props')
  
  return (
    <div className="container">
      <div className="card">
        <div className="container-fluid">
          <div className="wrapper row">
            <div className="poster col-12 col-md-4 m-0 p-0">
              <img className="rounded h-100" src={props.Poster} />
            </div>
            <div className="details col-12 col-md-8">
              <a href={"/"} >
                <button type="button" className="mt-4 btn btn-outline-secondary">&#8249; Home</button>
              </a>
              <h3 className="title my-4">{props.Title}</h3>
              <div className="rating">
                <h5>
                  <strong>Rating: </strong>
                </h5> 
                <p className="font-weight-bold">
                  {props.imdbRating} <span className="text-secondary">({props.imdbVotes})</span>
                </p>
              </div>
              <div>
                <h5>
                  <strong>Year: </strong>
                </h5> 
                <p>{props.Year}</p>
              </div>
              <div>
                <h5>
                  <strong>Actors: </strong>
                </h5> 
                <p>{props.Actors}</p>
              </div>
              <div >
                <h5>
                  <strong>PLOT:</strong>
                </h5> 
                <p>{props.Plot}</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail;
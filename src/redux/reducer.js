import actionType from "./actionType"

const initialState = {
  movieList: {},
  movie: {},
  moviePoster: "",
}

const reducer = (state = Object.assign({}, initialState), { type, data }) => {
  switch (type) {
    case actionType.loadMovieList:
      return {
        ...state,
        movieList: data,
      }
    case actionType.loadMovie:
      return {
        ...state,
        movie: data,
      }
    case actionType.loadMoviePoster:
      return {
        ...state,
        moviePoster: data,
      }
    case actionType.appendMovieList:
      state.movieList.Search = state.movieList.Search.concat(data.Search)
      return {
        ...state,
      }
    case actionType.loadMovieTitle:
      return {
        ...state,
        movieTitle: data,
      }
    default:
      return state
  }
}

export default reducer

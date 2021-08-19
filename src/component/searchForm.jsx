import React from "react";


const SearchForm = (props) => {

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const target = ev.target;

    if (props.title !== target.keyword.value) {
      props.setTitle(target.keyword.value)
    }
  }

  return (
    <>
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mx-sm-3 mb-2">
          <input name="keyword" type="text" className="form-control" id="movie-input" placeholder="Movie Keyword" defaultValue={props?.title}/>
        </div>
        <button type="submit" className="btn btn-primary mb-2">search</button>
      </form>
    </>
  )
}

export default SearchForm;
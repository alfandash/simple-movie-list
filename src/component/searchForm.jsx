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
      <form className="form-inline mb-2" onSubmit={handleSubmit}>
        <div className="form-group mr-3 ">
          <input name="keyword" type="text" className="form-control" id="movie-input" placeholder="Movie Keyword" defaultValue={props?.title}/>
        </div>
        <button type="submit" className="btn btn-primary">search</button>
      </form>
    </>
  )
}

export default SearchForm;
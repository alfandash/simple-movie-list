import React from "react"
import { Button, Modal } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import actionType from "../redux/actionType"

const PosterModal = () => {
  const dispatch = useDispatch()
  const { moviePoster } = useSelector((state) => state)
  const isShow = moviePoster !== ""

  const handleClose = () => {
    dispatch({ type: actionType.loadMoviePoster, data: "" })
  }

  return (
    <Modal show={isShow} onHide={handleClose}>
      <Modal.Body className="d-flex justify-content-center">
        <img src={moviePoster} />
      </Modal.Body>
    </Modal>
  )
}

export default PosterModal

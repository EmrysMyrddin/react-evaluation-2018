import React from 'react'
import { func } from 'prop-types'

const DeleteBtn = ({ onClick }) => (
  <a className="btn btn-danger"  onClick={onClick}>
    <i className="glyphicon glyphicon-trash" />
  </a>
)

DeleteBtn.propTypes = {
  onClick: func,
}

export default DeleteBtn

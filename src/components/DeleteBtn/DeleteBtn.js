import React from 'react'
import { func } from 'prop-types'

const DeleteBtn = ({ onClick }) => (
  <a className="btn btn-default" onClick={onClick} style={{backgroundColor: "red"}}>
    <i className={`glyphicon glyphicon-remove`} />
  </a>
)

DeleteBtn.propTypes = {
  onClick: func,
}

export default DeleteBtn

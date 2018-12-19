import React from 'react'
import { func } from 'prop-types'

const RemoveBtn = ({onClick}) => (
  <a className="btn btn-default" title="remove" onClick={onClick}>
    <i className="glyphicon glyphicon-trash" />
  </a>
)

RemoveBtn.propTypes = {
  onClick: func,
}

export default RemoveBtn

import React from 'react'
import ReactDOM from 'react-dom'
import { oneOf, PropTypes } from 'prop-types'



const SortBtn = ({ type, handleSubmit }) => (
  <button className="btn btn-default" value="type" onClick={handleSubmit}>
    <i className={`glyphicon glyphicon-sort-by-attributes${type === 'asc' ? '' : '-alt'}`} />
  </button>
)

SortBtn.propTypes = {
  type: oneOf(['asc', 'desc'])
}

export default SortBtn

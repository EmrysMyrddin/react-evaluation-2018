import React from 'react'
import { oneOf } from 'prop-types'

const SortBtn = ({ type }) => (
  <button className="btn btn-default" value="type">
    <i className={`glyphicon glyphicon-sort-by-attributes${type === 'asc' ? '' : '-alt'}`} />
  </button>
)

SortBtn.propTypes = {
  type: oneOf(['asc', 'desc'])
}

export default SortBtn

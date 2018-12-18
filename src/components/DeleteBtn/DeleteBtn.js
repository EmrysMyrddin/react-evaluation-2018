import React from 'react'

const DeleteBtn = ({ onClick }) => (
    <a className="btn btn-danger" onClick={onClick} title="Delete">
        <i className="glyphicon glyphicon-trash" />
    </a>
)

export default DeleteBtn

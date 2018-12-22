import React from 'react';

const DeleteBtn = ({onClick}) => (
    <a className="btn btn-danger" onClick={onClick}>
        <i className="glyphicon glyphicon-remove"></i>
    </a>
)

export default DeleteBtn; 
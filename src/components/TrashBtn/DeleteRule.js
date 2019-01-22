import React from 'react';

const DeleteRule = ({onClick}) => (
    <a className="btn btn-danger" onClick={onClick}>
        <i className="glyphicon glyphicon-trash"></i>
    </a>
)

export default DeleteRule;
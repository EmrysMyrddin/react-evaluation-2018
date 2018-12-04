import React from 'react';

const TrashBtn = ({onClick}) => (
    <a className="btn btn-danger" onClick={onClick}>
        <i className="glyphicon glyphicon-trash"></i>
    </a>
)

export default TrashBtn;
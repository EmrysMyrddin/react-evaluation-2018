import React from 'react'

// eslint-disable-next-line react/prop-types
const Input = ({ label, input, meta }) => (
  <div className={`form-group  ${(meta.error && meta.touched) ? 'has-error' : ''}`}>
    <label htmlFor={input.name}>{label}</label>
    <input
      id={input.name}
      className={'form-control'}
      placeholder={label}
      {...input}
    />
    {meta.error && meta.touched ?<span className="help-block">}</span>:""}
  </div>
)

export default Input

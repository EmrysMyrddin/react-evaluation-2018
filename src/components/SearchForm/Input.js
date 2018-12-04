import React from 'react'

const Input = ({ label, input }) => (
  <div className="form-group row">
    <label class="col-sm-1 col-form-label" htmlFor={input.name}>{label}</label>
    <div class="col-sm-11">
      <input
        id={input.name}
        className={'form-control'}
        placeholder={label}
        {...input}
      />
    </div>
  </div>
)

export default Input

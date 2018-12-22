import React from 'react'
import { Link } from 'react-router-dom'
import { Field } from 'redux-form'

const Filter = ( { handleChange, handleSubmit } ) => (
  <div className="well">
  	<form role="search" onSubmit={handleSubmit}>
    	<div className="form-group">
      	<Field
					component="input"
					name="search"
					label="search"
					onChange={ handleChange }
				/>
    	</div>
		</form>
	</div>
)

export default Filter
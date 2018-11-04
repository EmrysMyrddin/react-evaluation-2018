import { func } from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

const SearchBar = ( { handleChange, handleSubmit } ) => (
	<form className="navbar-form" role="search" onSubmit={ handleSubmit }>
		<div className="input-group">
			<Field
				component="input"
				name="search"
				label="search"
				paceholder="Search"
				className="form-control"
				onChange={ handleChange }
			/>
		</div>
	</form>
)

SearchBar.propTypes = {
	handleSubmit: func,
	handleChange: func
}

export default SearchBar

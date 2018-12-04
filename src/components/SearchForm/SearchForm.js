import React from 'react'
import { Field } from 'redux-form'
import Input from './Input'

const SearchForm = ({handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <Field
            component={Input}
            name="search"
            label="Recherche"
        />
    </form>
)

export default SearchForm
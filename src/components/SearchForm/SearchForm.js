import React from 'react'
import { Field } from 'redux-form'
import Input from './Input'
import SortBtn from './SortBtn'

const SearchForm = ({handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <Field
            component={Input}
            name="search"
            label="Recherche"
        />
        <Field
        	component={SortBtn}
        	name="sort"
        	type="asc"
        />
        <Field
        	component={SortBtn}
        	name="sort"
        	type="desc"
        />
    </form>
)

export default SearchForm
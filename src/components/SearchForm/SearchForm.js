import React from 'react'
import { Field } from 'redux-form'
import Input from './Input'
import SortBtn from './SortBtn'
import RuleList from '../RuleList'

const SearchForm = ({handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <Field
            component={Input}
            name="search"
            label="Recherche"
        />
        /*
        <Field
        	component={SortBtn}
        	name="sort"
        	type="asc"
            handleSubmit={handleSubmit}
        />
        <Field
        	component={SortBtn}
        	name="sort"
        	type="desc"
            handleSubmit={handleSubmit}
        />
        */
    </form>
)

export default SearchForm
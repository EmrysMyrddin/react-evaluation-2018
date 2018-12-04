import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import SearchForm from './SearchForm'

export default compose(
    reduxForm({ form: 'search', enableReinitialize: true, destroyOnUnmount: false })
    )(SearchForm)
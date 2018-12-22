import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import Filter from './Filter'
import { titleFilter } from '../../store/actions/filter';

const mapStateToProps = ( state, ownProps ) => ( {} )

const mapDispatchToProps = ( dispatch, ownProps ) => (
    {onSubmit: async (values) => {
        dispatch(titleFilter(values.search))
    },
    onChange: async(values) => {
        dispatch(titleFilter(values.search))
    }}
)

export default compose(
    connect(mapDispatchToProps),
    reduxForm( {form: 'searchbar', enableReinitialize: true, destroyOnUnmount: false})
)(Filter)
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { applyFilter } from '../../store/actions/filter';
import SearchBar from './SearchBar';

const mapStateToProps = ( state, ownProps ) => ( {} )

const mapDispatchToProps = ( dispatch, ownProps ) => ( {
	onSubmit: async ( values ) =>
	{
		dispatch( applyFilter( values.search ) );
	},
	onChange: async ( values ) =>
	{
		dispatch( applyFilter( values.search ) );
	}
} )

export default compose(
	connect( mapStateToProps, mapDispatchToProps ),
	reduxForm( { form: 'searchbar', enableReinitialize: true, destroyOnUnmount: false } ),
)( SearchBar )

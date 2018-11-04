import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { addRule, updateRule } from '../../store/actions/rules';
import RuleForm from './RuleForm';

const mapStateToProps = ( state, ownProps ) =>
{
	const id = parseInt( ownProps.match.params.id, 10 )
	const rule = state.rules.find( r => r.id === id )

	if ( !rule ) return {}

	return { initialValues: rule }
}

const mapDispatchToProps = ( dispatch, ownProps ) => ( {
	onSubmit: async ( values ) =>
	{
		if ( ownProps.match.params.id )
			dispatch( updateRule( values ) )
		else
		{
			const createdRule = await dispatch( addRule( values ) )
			ownProps.history.push( `/edit/${ createdRule.id }` )
		}
	},
} )

export default compose(
	connect( mapStateToProps, mapDispatchToProps ),
	reduxForm( { form: 'ruleEdit', enableReinitialize: true, destroyOnUnmount: false } ),
)( RuleForm )

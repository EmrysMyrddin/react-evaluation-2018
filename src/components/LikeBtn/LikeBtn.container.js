import { connect } from 'react-redux';

import { doDislike, doLike } from '../../store/actions/rules';
import LikeBtn from './LikeBtn';

const mapStateToProps = ( state, { id, type } ) =>
{
	const rule = state.rules.find( rule => rule.id === id )
	return {
		value: rule && rule[ `${ type }s` ],
	}
}

const mapDispatchToProps = ( dispatch, { type, id } ) =>
{
	const action = type === 'like' ? doLike : doDislike
	return {
		onClick: () => dispatch( action( id ) ),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)( LikeBtn )

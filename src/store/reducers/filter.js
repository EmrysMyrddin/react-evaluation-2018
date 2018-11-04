import { QUERY_CHANGED } from '../actions/filter';

const initialState = ""

const filter = ( state = initialState, action ) =>
{
	switch ( action.type )
	{
		case QUERY_CHANGED: {
			return action.payload
		}
		default: {
			return state
		}
	}
}

export default filter
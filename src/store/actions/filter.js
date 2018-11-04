export const QUERY_CHANGED = 'QUERY_CHANGED'

export const applyFilter = query => ( dispatch ) =>
{
	dispatch( {
		type: QUERY_CHANGED,
		payload: {
			query
		}
	} )
}
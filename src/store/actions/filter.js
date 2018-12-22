export const TITLE_SEARCH = 'TITLE_SEARCH'

export const titleFilter = query => (dispatch) => {
    dispatch({
        type: TITLE_SEARCH,
        payload:{
            query
        }
    })
}
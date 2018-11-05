export const FILTER_RULES = 'FILTER_RULES'
export const OPTION_CHANGE = 'OPTION_CHANGE'

export const filterRules = (title) => (dispatch) => {
  dispatch({
    type: FILTER_RULES,
    payload: {
      title
    }
  })
}

export const changeOption = (option) => (dispatch) => {
  dispatch({
    type: OPTION_CHANGE,
    payload: {
      type: option
    }
  })
}
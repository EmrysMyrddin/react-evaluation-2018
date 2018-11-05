import { FILTER_RULES, OPTION_CHANGE } from '../actions/filters'

const initialState = {
  text: '',
  type: 'title'
}

const filter = (state = initialState, action) => {
  switch(action.type){
    case FILTER_RULES: {
      let newText = action.payload.title.toLowerCase();
      return {
        ...state, text: newText
      }
    }
    case OPTION_CHANGE: {
      if (action.payload.type === 'likes' || action.payload.type === 'dislikes')
      return {
        ...state, text: 0, type: action.payload.type
      }
      else{
        return {
          ...state, text: '', type: action.payload.type
        }
      }
    }
    default: {
      return state
    } 
  }
}

export default filter

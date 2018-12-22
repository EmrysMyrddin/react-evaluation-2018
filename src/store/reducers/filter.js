import {TITLE_SEARCH} from '../actions/filter'

const initState = ""

const filter = (state = initState, action) =>{
    switch(action.type){
        case TITLE_SEARCH:{
            return action.payload
        }
        default:{
            return state
        }
    }
}

export default filter
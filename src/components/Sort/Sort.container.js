import { connect } from 'react-redux'
import {Sort} from './Sort'
import { rulesSort } from '../../store/actions/rules'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {

      if(event.target.value === "increasing" || event.target.value === "decreasing")
      {
        sort = event.target.value
      }
      else
      {
        choose = event.target.value
      }
      dispatch(rulesSort(choose, sort))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sort)
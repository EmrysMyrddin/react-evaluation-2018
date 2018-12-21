import { connect } from 'react-redux'
import {Search, choose} from './Search'
import { rulesSearch } from '../../store/actions/rules'

const mapStateToProps = (state) => {
    return {}
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onChangeSearch: (event) => dispatch(rulesSearch(choose,event.target.value)),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Search)
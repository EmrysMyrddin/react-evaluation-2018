import { connect } from 'react-redux'
import Search from './Search'
import { searchRule } from '../../store/actions/rules'

const mapDispatchToProps = (dispatch) => {
  const action = searchRule;
  return {
    onSearch: (value) => {
      dispatch(action(value))
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Search)

import { connect } from 'react-redux'
import { filteredRule } from '../../store/actions/rules'
import Filter from './Filter'

const mapDispatchToProps = (dispatch) => {
  const action = filteredRule;
  return {
    onSearch: (value) => {
      dispatch(action(value))
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Filter)
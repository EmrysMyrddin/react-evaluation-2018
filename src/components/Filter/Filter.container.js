import { connect } from 'react-redux'
import Filter from './Filter'
import { filterRules, changeOption } from '../../store/actions/filters'

const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    optionChange: (e) => dispatch(changeOption(e.target.value)),
    search: (e) => dispatch(filterRules(e.target.value))
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps
)(Filter)

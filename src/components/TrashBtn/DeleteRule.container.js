import { connect } from 'react-redux'
import DeleteRule from './DeleteRule'
import { removeRule } from '../../store/actions/rules'

const mapDispatchToProps = (dispatch, { id }) => {
  const action = removeRule;
  return {
    onClick: () => dispatch(action(id)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(DeleteRule)

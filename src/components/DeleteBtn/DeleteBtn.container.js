import { connect } from 'react-redux'
import DeleteBtn from './DeleteBtn'
import { deleteRule } from '../../store/actions/rules'

const mapDispatchToProps = (dispatch, { id }) => {
  const action = deleteRule;
  return {
    onClick: () => dispatch(action(id)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(DeleteBtn)
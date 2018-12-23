import { connect } from 'react-redux'
import DeleteBtn from './DeleteBtn'
import { deleteRule } from '../../store/actions/rules'

const mapStateToProps = (state, { id }) => {
  const rule = state.rules.find(rule => rule.id === id)
  return {
    rule
  }
}

const mapDispatchToProps = (dispatch, { id }) => {
  const action = deleteRule
  return {
    onClick: () => dispatch(action(id)),
  }
}

export default connect(
 mapStateToProps,
 mapDispatchToProps,
)(DeleteBtn)

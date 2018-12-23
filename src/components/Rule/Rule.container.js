import { connect } from 'react-redux'
import Rule from './Rule'
import { deleteRule } from '../../store/actions/rules'

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteRule: () => dispatch(deleteRule(ownProps.rule.id)),
})

export default connect(
  null,
  mapDispatchToProps,
)(Rule)


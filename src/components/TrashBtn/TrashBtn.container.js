import { connect } from 'react-redux'
import TrahBtn from './TrashBtn'
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
)(TrahBtn)

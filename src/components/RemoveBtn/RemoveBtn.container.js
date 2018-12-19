import { connect } from 'react-redux'
import RemoveBtn from './RemoveBtn'
import { removeRule } from '../../store/actions/rules'


const mapStateToProps = null;

const mapDispatchToProps = (dispatch, { id }) => {
  const action = removeRule
  return {
    onClick: () => dispatch(action(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RemoveBtn)

import { connect } from 'react-redux'
import RuleList from './RuleList'
import { rulesLoaded } from '../../store/actions/rules'
import { formValueSelector } from 'redux-form'

const mapStateToProps = state => ({
  rules: state.rules,
  search: formValueSelector("search")(state, "search")
})

const mapDispatchToProps = dispatch => ({
  loadRules: () => dispatch(rulesLoaded()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RuleList)

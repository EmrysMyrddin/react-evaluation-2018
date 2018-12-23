import { connect } from 'react-redux'
import RuleList from './RuleList'
import { rulesLoaded } from '../../store/actions/rules'
import { formValueSelector } from 'redux-form'

const mapStateToProps = state => ({
  rules: state.rules,
  search: formValueSelector("search")(state, "search"),
  sort: formValueSelector("search")(state, "sort")
})

const mapDispatchToProps = dispatch => ({
  loadRules: () => dispatch(rulesLoaded()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RuleList)

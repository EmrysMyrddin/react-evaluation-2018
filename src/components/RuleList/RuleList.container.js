import { connect } from 'react-redux'
import RuleList from './RuleList'
import { rulesLoaded } from '../../store/actions/rules'

const mapStateToProps = state => ({
  rules: state.rules,
  filter: state.filter.query
})

const mapDispatchToProps = dispatch => ({
  loadRules: () => dispatch(rulesLoaded()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RuleList)

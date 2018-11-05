import { connect } from 'react-redux'
import RuleList from './RuleList'
import { rulesLoaded } from '../../store/actions/rules'

const mapStateToProps = state => {
  const currentType = state.filter.type
  if (currentType === 'title'){
    return {
      rules: state.rules.filter(rule => rule.title.toLowerCase().includes(state.filter.text))
    }
  }
  else if (currentType === 'likes' || currentType === 'dislikes'){
    return {
      rules: state.rules.filter(rule => rule[currentType] >= state.filter.text)
    }
  } 
  else if (currentType === 'tags'){
    return {
      rules: state.rules.filter(rule => isContains(rule))
    }
  }
  function isContains(rule){
    let cpt = 0
    if (state.filter.text === ''){
      return true;    // case for rules with empty tags - print them if search bar is empty
    }
    for (let tag in rule.tags){
      if (rule.tags[tag].toLowerCase().startsWith(state.filter.text)){
        cpt++
        break
      }
    }
    return cpt > 0
  }
}
const mapDispatchToProps = dispatch => ({
  loadRules: () => dispatch(rulesLoaded()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RuleList)

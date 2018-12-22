import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'
import SearchBar from '../SearchBar'

class RuleList extends React.Component {
  static propTypes = {
    rules: PropTypes.array,
    loadRules: PropTypes.func,
  }

  static defaultProps = {
    rules: [],
  }

  componentDidMount = () => {
    this.props.loadRules()
  }

  render() {
    const { rules } = this.props
    const ruleList = rules.map(rule => <Rule key={rule.id} rule={rule} />)
    return (
      <div class=""className="searchAndRules">
        <SearchBar></SearchBar>
        {ruleList}
      </div>
    )
  }
}

export default RuleList

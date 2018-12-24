import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'
import Search from '../Search'

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
      <div className="searchAndRules">
        <Search></Search>
        {ruleList}
      </div>
    )
  }
}

export default RuleList

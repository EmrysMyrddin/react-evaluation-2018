import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'
import Filter from '../Filter'

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
    return (
      <div>
        <Filter></Filter>
        {rules.map(rule => <Rule rule={rule} key={rule.id}/>)}
      </div>
    )  }
}

export default RuleList

import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'


class RuleList extends React.Component {
  static propTypes = {
    search: PropTypes.string,
    rules: PropTypes.array,
    loadRules: PropTypes.func,
  }

  static defaultProps = {
    rules: [],
    search: ""
  }

  componentDidMount = () => {
    this.props.loadRules()
  }

  render() {
    const { rules, search } = this.props
    const filteredRules = rules.filter(rule => rule.title.toLowerCase().includes(search.toLowerCase()))
    return (filteredRules) ? filteredRules.map(rule => <Rule key={rule.id} rule={rule} />) : rules.map(rule => <Rule key={rule.id} rule={rule} />)
  }
}

export default RuleList

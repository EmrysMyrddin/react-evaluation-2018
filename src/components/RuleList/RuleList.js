import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'


class RuleList extends React.Component {
  static propTypes = {
    search: PropTypes.string,
    sort: PropTypes.string,
    rules: PropTypes.array,
    loadRules: PropTypes.func,
  }

  static defaultProps = {
    rules: [],
    search: "",
    sort: ""
  }

  componentDidMount = () => {
    this.props.loadRules()
  }

  render() {
    const { rules, search, sort } = this.props
    const filteredRules = rules.filter(rule => rule.title.toLowerCase().includes(search.toLowerCase()))

    console.log(sort);

    if(sort == "asc") {
      if (filteredRules)
        filteredRules.sort((ruleA, ruleB) => {
          if(ruleA.likes > ruleB.likes)
            return 1
          if(ruleA.likes < ruleB.likes)
            return -1
        })
      else
        rules.sort((ruleA, ruleB) => {
          if(ruleA.likes > ruleB.likes)
            return 1
          if(ruleA.likes < ruleB.likes)
            return -1
        })
    } else if (sort == "desc") {
      if (filteredRules)
        filteredRules.sort((ruleA, ruleB) => {
          if(ruleA.likes < ruleB.likes)
            return 1
          if(ruleA.likes > ruleB.likes)
            return -1
        })
      else
        rules.sort((ruleA, ruleB) => {
          if(ruleA.likes < ruleB.likes)
            return 1
          if(ruleA.likes > ruleB.likes)
            return -1
        })
    }


    return (filteredRules) ? filteredRules.map(rule => <Rule key={rule.id} rule={rule} />) : rules.map(rule => <Rule key={rule.id} rule={rule} />)
  }
}

export default RuleList

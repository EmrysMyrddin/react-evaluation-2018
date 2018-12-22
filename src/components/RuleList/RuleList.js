import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'

class RuleList extends React.Component {
  static propTypes = {
    rules: PropTypes.array,
    loadRules: PropTypes.func,
    filter: PropTypes.string,
  }

  static defaultProps = {
    rules: [],
    filter: "",
  }

  componentDidMount = () => {
    this.props.loadRules()
  }

  render() {
    const { rules, filter } = this.props
    const filterRules = rules.filter( rule => (
			( rule.title || "" ).includes( filter )
			|| ( rule.description || "" ).includes( filter )
			|| ( rule.tags || [] ).some( k => k.includes( filter ) )
		) )
    return (
      <div>
        {filterRules.map(rule => <Rule key={rule.id} rule={rule} />)}
      </div>
    )
  }
}

export default RuleList

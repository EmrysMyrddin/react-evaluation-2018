import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'

class RuleSearch extends React.Component {
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
    return <input type="text" placeholder="Recherche..."/>
  }
}

export default RuleSearch

import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'
import Search from '../Search/Search'
import Sort from '../Sort/Sort'

class RuleList extends React.Component {

  constructor(props) {
    super(props)
  }

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
    const rulesView = rules.map(rule => <Rule key={rule.id} rule={rule} />)

    return (
      <div>
        <Search />
        <Sort />
        {rulesView}
      </div>
    ) 
  }
}

export default RuleList

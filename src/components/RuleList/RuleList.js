import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'

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

  handleChange(e) {
    const { rules } = this.props
    let newList = []

    if (e.target.value !== "") {
      newList = rules.filter(item => {
        const lc = item.title.toLowerCase()
        const filter = e.target.value.toLowerCase()
        return lc.includes(filter)
      })
    } else {
      newList = rules
    }
    this.setState({
      rules: newList
    })
  }


  render() {
    this.handleChange = this.handleChange.bind(this)
    let { rules } = this.props
    if (this.state != null && this.state.rules != null) {
      rules = this.state.rules
    }
    return [
      <input 
        class="form-control mr-sm-2" 
        type="text"
        onChange={this.handleChange} 
        placeholder="Search" 
        aria-label="Search"
      />,
      rules.map(rule => <Rule key={rule.id} rule={rule} />)
    ]
  }
}

export default RuleList

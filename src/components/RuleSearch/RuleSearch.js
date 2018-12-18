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

  state = {
    text: "",
    nbLike: 0
  }
  
  trier = (test, nbLike) => {
    const { rules } = this.props
    return rules
    .filter((rule) => rule.likes>=nbLike && rule.title.toUpperCase().includes(test.toUpperCase()))
    .map(rule => <Rule key={rule.id} rule={rule}/> )
  }

  render() {
    return <div><input value={this.state.text} onChange={e => this.setState({text: e.target.value})} type="text" placeholder="Recherche..."/><div><input value={this.state.nbLike} onChange={e => this.setState({nbLike: e.target.value})} type="number" placeholder="Minimum de like"/>  {this.trier(this.state.text, this.state.nbLike)}</div></div>
  }
}

export default RuleSearch

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
    text: ""
  }

  rechercher = (texte) => {
    console.log("Recherche effectuée")
  }

  render() {
    return <div><input value={this.state.texte} onChange={e => this.setState({text: e.target.value})} type="text" placeholder="Recherche..."/><button onClick={this.rechercher}>Go</button></div>
  }
}

export default RuleSearch

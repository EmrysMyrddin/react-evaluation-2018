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
    console.log(this.state.text)
  }

  trier = (test) => {
    console.log("On entre dans la fonction")
    console.log(test)
    const { rules } = this.props
    rules.forEach(function(rule){
      if ( rule.title === test){
        console.log("On entre dans la condition")
        console.log(rule.id)
        return <Rule key={rule.id} rule={rule}/>
      }
    })
  }

  render() {
    return <div><input value={this.state.texte} onChange={e => this.setState({text: e.target.value})} type="text" placeholder="Recherche..."/><button onClick={this.trier(this.state.text)}>Go</button><div>{this.trier(this.state.text)}</div></div>
  }
}

export default RuleSearch

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
  constructor() {
    super();
    this.state = {
      searched: ''
    }
  }


  componentDidMount = () => {
    this.props.loadRules()
  }

  render() {
    const { rules } = this.props
    const filtered = rules.filter((rule) =>
      rule.title.toLowerCase().includes(this.state.searched.toLowerCase()));
    return (

      <React.Fragment>
      //On définit le state afin de pouvoir faire la recherche sur le titre
        <Filtre onTextChanged={text => {
          this.setState({
            searched: text
          })
        }} />
        {filtered.map(rule => <Rule key={rule.id} rule={rule} />)}
      </React.Fragment>
    );
  }
}


class Filtre extends React.Component {
  
render() {
  return (
    <div className="form-group">

      <input className="form-control" type="text" 
      onChange={
        event => this.props.onTextChanged(event.target.value)
      }
      placeholder="Recherche sur les titres" />
    </div>
  );
  }
}
export default RuleList

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
    this.setState({
      typeTri: 1
    })
  }

  handleChangeValeurTri(e) {
    const { rules } = this.props
    let newList = []

    if (e.target.value !== "") {
      newList = rules.filter(item => {
        let lc = ""
        if (this.state.typeTri === "1") {
          if (item.title === undefined) {
            return false;
          }
          lc = item.title.toLowerCase()
        } else  if (this.state.typeTri === "2") {
          if (item.description === undefined) {
            return false;
          }        
          lc = item.description.toLowerCase()
        } else {
          if (item.tags === undefined) {
            return false
          }
          lc = item.tags.join().toLowerCase()
        }
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

  handleChangeTypeTri(e) {
    this.setState({
      typeTri: e.target.value
    })
  }

  render() {
    this.handleChangeValeurTri = this.handleChangeValeurTri.bind(this)
    this.handleChangeTypeTri = this.handleChangeTypeTri.bind(this)
    let { rules } = this.props
    if (this.state != null && this.state.rules != null) {
      rules = this.state.rules
    }
    return [
      <input 
        className="form-control mr-sm-2" 
        type="text"
        onChange={this.handleChangeValeurTri} 
        placeholder="Search" 
        aria-label="Search"
      />,
      <select className="form-control mr-sm-2" onChange={this.handleChangeTypeTri}>
        <option value="1">Trier par Titre</option>
        <option value="2">Trier par Description</option>
        <option value="3">Trier par Tag</option>
      </select>,
      <br/>,
      rules.map(rule => <Rule key={rule.id} rule={rule} />)
    ]
  }
}

export default RuleList

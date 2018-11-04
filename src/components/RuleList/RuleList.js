import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'

class RuleList extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: ''
    }
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
    const filtered = rules.filter((rule) =>
      rule.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );
    return (
      <React.Fragment>
        <Filter onTextChanged={text => {
          console.log(text);
          this.setState({
            keyword: text
          })
        }} />
        {filtered.map(rule => <Rule key={rule.id} rule={rule} />)}
      </React.Fragment>
    );
  }
}

class Filter extends React.Component {
  render() {
    return (
      <div className="form-group">
        <input
        className="form-control"
        type="text"
        onChange={event =>
          this.props.onTextChanged(event.target.value)
        }
        placeholder="Search. . ." />
        <span className="help-block text-center">Insert any word to find</span>
      </div>
    );
  }
}

export default RuleList

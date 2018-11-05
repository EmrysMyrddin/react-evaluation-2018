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

  render() {
    const { rules } = this.props
    return rules.map(rule => <Rule key={rule.id} rule={rule} />)
  }
}

export default RuleList
import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'

class RuleList extends React.Component {
  constructor() {
    super();
    this.state = {
      aChercher: ''
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
      rule.title.toLowerCase().includes(this.state.aChercher.toLowerCase())
    );
    return (
      <React.Fragment>
        <Filter onTextChanged={text => {
          this.setState({
            aChercher: text
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
        onKeyUp={event =>
          this.props.onTextChanged(event.target.value)
        }
        placeholder="Chercher?" />
        <span className="help-block">Tapez quelque mot a chercher</span>
      </div>
    );
  }
}

export default RuleList
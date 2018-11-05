import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'

class RuleList extends React.Component {
  static propTypes = {
    rules: PropTypes.array,
    loadRules: PropTypes.func,
  }
  constructor() {
    super();
    this.state = {
      searched: ''
  }
}

  static defaultProps = {
    rules: [],
  }

  componentDidMount = () => {
    this.props.loadRules()
  }

  render() {
    const { rules } = this.props

    //ne fonctionne pas telquel avec d'autres éléments que title
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
  /* A faire fonctionner, eventuellement via reducer
  <form>
    <input type="radio" id="titre" name="choix" value="title"/> Titre
    <input type="radio" id="description" name="choix" value="description"/> Description
    <input type="radio" id="likes" name="choix" value="likes"/> Likes
    <input type="radio" id="dislikes" name="choix" value="dislikes"/> Dislikes
    <input type="radio" id="tags" name="choix" value="tags"/> Tags
  </form>*/
render() {
  return (
    <div className="form-group">

      <input
      className="form-control"
      type="text"
      onChange={event =>
        this.props.onTextChanged(event.target.value)
      }
      placeholder="Recherche" />
    </div>
  );
  }
}

export default RuleList

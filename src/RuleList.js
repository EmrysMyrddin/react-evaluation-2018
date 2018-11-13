import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'

class RuleList extends React.Component {

  constructor() {
    super();
    // Initialisation de la barre de recherche à 0 caractère
    this.state = {
      search: ''
    };
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


  //Fonction permettant de modifier la liste à chaque entrée ou sortie d'une lettre dans la recherche
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 50) });
  }


  render() {
    const { rules } = this.props;
    let filteredRules = rules.filter(
      (rule) => {
        //If permettant d'identifier les rules ont une description ET un/des tags
        if(rule.description != null && rule.tags.length!==0){ 
          
         return( 
           //retourne les rules qui ont le meme tag qui est recherché (mot recherché == tag de la rule)
          rule.tags.indexOf(this.state.search) !== -1 ||

          //retourne les rules qui ont les lettres de la recherche dans leur titre ou dans leur description
          rule.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
            rule.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
        }
        //Else if permettant d'identifier les rules qui ont une description et pas de tags
        else if (rule.description != null) {
          return( rule.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          rule.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 );
        }
        //Else if permettant d'identifier les rules qui ont un/des tags et pas de description
        else if (rule.tags.length !==0){
          return( 
          rule.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          rule.tags.indexOf(this.state.search.toLowerCase()) !== -1);
        }
        //Else qui regroupe les rules qui n'ont ni description ni tags
        else {
          return (rule.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
        }

      }
    );
    //Barre de recherche permettant la recherche sur le titre, la description ou les tags
    // + La liste filtrée en fonction de la recherche grâce à la fonction filteredRules()
    return (
      <div>
        <p>Filtrer la recherche par le titre, la description, ou le tag (nom complet) : </p>
        <input class="recherche"
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />
        <ul>
          {filteredRules.map((rule) => {
            return <Rule rule={rule}
              key={rule.id} />
          })}
        </ul>

      </div>
    )
  }
}

export default RuleList

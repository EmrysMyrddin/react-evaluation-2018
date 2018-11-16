import React from 'react';
import PropTypes from 'prop-types';
import Rule from './Rule'


class RuleList extends React.Component {

  static propTypes = {
    rules: PropTypes.array
  }


  static defaultProps = {
    rules: []
  }

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     value : "",
  //     rules : props.rules,
  //   }
  // }



  constructor(props){
    super(props);
    this.state = {
      rules: props.rules,
      term: ''
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event){
    const { term } = this.state;

    if (term !== "") {
      let theFilter = this.props.rules.filter(rule => {
        return (
          searchingFor(term)
        );
      });
      if (theFilter.length > 0) {
        this.setState({
          rules: theFilter
        });
      } else {
        alert("Nothing found");
        this.setState({
          rules: this.props.rules
        });
      }
    } else {
      alert("Nothing found");
      this.setState({
        rules: this.props.rules
      });
    }
      // this.setState({term: event.target.value})
  }

  render() {

    return (

      this.state.rules.filter(
        searchingFor(this.state.term)).map(rule => <Rule key={rule.id} rule={rule} />)
        //return this.props.rules.map(rule => <Rule key={rule.id} rule={rule} />)

    )
  }
}

// function termMatching(state, term){
//   if( term === ""){
//     return true;
//   } else {
//     return state.title.toUpperCase().indexOf(term.toUpperCase()) !== -1;
//   }
// }

function searchingFor(term){
  return function(x){
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}
 export default RuleList

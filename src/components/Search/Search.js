import React, { Component } from 'react'
import Rule from '../Rule'


class Search extends Component {
 state = {
   query: '',
 }

 constructor(props) {
  super(props);
  this.test = "";
}

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
   this.test = this.search.value
 }

filtre = () => {
  console.log(this.test)
    return (
      <Rule key="0"></Rule>
    )
 }

 render() {
  const { rule } = this.props
   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
   )
 }
}



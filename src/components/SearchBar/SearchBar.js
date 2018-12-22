import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            goSearch: ''
        }
    }

    handleChange(goSearch) {
        this.setState({goSearch: goSearch.target.value})
    }

    render() {
        return ( 
        <div className = "form-inline" >
            <input className = "form-control" placeholder="Title" type = "text" onChange = {this.handleChange.bind(this)} ></input> 
            <button onClick = {() => this.props.onSearch(this.state.goSearch)} className = "btn btn-default" > Chercher </button>
        </div>
        )
    }
}

export default SearchBar;